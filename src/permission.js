import router from "./router";
import Element from "element-ui";
import axios from 'axios'
// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    const token = localStorage.getItem("token")
    
    if (token) { // 判断当前的token是否存在 ； 登录存入的token
      if (to.path === '/login') {
      } else {
        next()
      }
    } else {
      if(localStorage.getExpire("user")){//过期了
        let $this = this;
        console.log(token);
        //登出
        axios.get('/logout', {
          
          headers: {
            "Authorization": token
          }
        }).then((res) => {
          $this.$store.commit("REMOVE_INFO")
        })
        
      }else {
        
        Element.Message({
          message: "请先登录",
          type: 'error',
          duration: 3 * 1000
        })
      }
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
