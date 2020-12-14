import axios from 'axios'
import Element from "element-ui";
import router from "./router";

axios.defaults.baseURL='http://localhost:8081'
axios.interceptors.request.use(config => {
//   console.log("前置拦截")
  // 可以统一设置请求头
  return config
})
axios.interceptors.response.use(response => {
    const res = response.data;
// console.log(res);
//     console.log("后置拦截")
    // 当结果的code是否为200的情况
    
    if (res.code === 20000) {
      return response
    }
    // 弹窗异常信息
    Element.Message({
      message: response.data.message,
      type: 'error',
      duration: 2 * 1000
    })
    if(res.code === 20002){
        router.push({
            path: '/login'
        });
    }
    // 直接拒绝往下面返回结果信息
    return Promise.reject(response.data.message)
  },
  error => {
    //console.log('err' + error)// for debug
    //console.log(error.response);
    if(error.response.data) {
      error.message = error.response.data.message
    }
    // 根据请求状态觉得是否登录或者提示其他

    if (error.response.code === 401) {
      store.commit('REMOVE_INFO');
      router.push({
        path: '/login'
      });
      error.message = '请重新登录';
    }
    if (error.response.code === 403) {
      error.message = '权限不足，无法访问';
    }
    Element.Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  })
