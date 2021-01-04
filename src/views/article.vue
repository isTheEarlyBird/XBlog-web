<template>
  <div class="article">
    <h3>{{article.title}}</h3>
    <div class="info">
      <span class="type">{{article.type}}</span>
      <span class="userName"><el-link :underline="false">{{article.sysUser.username}}</el-link></span>
      <el-tooltip placement="bottom" class="createTime">
        <div slot="content">首次创建{{article.createTimeVO}}<br/>最后更新{{article.updateTimeVO}}</div>
        <el-button>{{article.createTimeVO}}</el-button>
      </el-tooltip>
      <span class="views el-icon-view">{{article.views}}</span>
      <span class="articleLikeCount" :class="chooseLike == true ? 'el-icon-star-on' : 'el-icon-star-off'" @click="clickLike()">{{article.likes}}</span>
    </div>
    <div class="content" v-html="article.content">
    </div>
    <div class="write-comment">
      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="comment"
        minlength=2
        maxlength="1000"
        resize="none"
        autosize
        show-word-limit
        >
      </el-input>
      <div class="post-comment">
        <el-button type="success" class="right" @click="postComment">提交</el-button>
      </div>
    </div>
    <div class="showComment">
      <div class="comment-item overflow-hidden"  v-for="(item,index) in commentList" :key="index">
        <div class="comment">
          <ul>
            <li class="comment-user-profile pointer">
              <el-avatar :src="item.sysUser.avatar"></el-avatar>
            </li>
            <li class="comment-username margin-left-10">
              <span class="pointer">{{item.sysUser.username}}</span>
              <span class="word">：</span>
            </li>
            <li class="comment-content margin-left-10">
              <span>{{item.content}}</span>
            </li>
            <li class="comment-date word margin-left-10">
              <span>{{formatTime(item.createTimeVO)}}</span>
            </li>
            <li class="copmment-reply-btn margin-left-10">
              <span @click="openReply(item.sysUser.id, item.id)" class="pointer">回复</span>
            </li>
          </ul>
        </div>
        <div class="reply " v-if="item.children != null">
          <div v-for="(reply,i) in item.children" :key="i">
            <ul class="overflow-hidden">
              <li class="comment-user-profile pointer">
                <!-- <el-avatar :src="require('../' + reply.replyUser.avatar)"></el-avatar> -->
              </li>
              <li class="comment-username margin-left-10">
                <span class="pointer">{{reply.replyUser.username}}</span>
              </li>
              <li>
                <span class="word margin-left-10">回复：</span>
                <span class="margin-left-5">{{reply.sysUser.username}}</span>
              </li>
              <li class="comment-content margin-left-20">
                <span>{{reply.content}}</span>
              </li>
              <li class="comment-date word margin-left-10">
                <span>{{formatTime(reply.createTimeVO)}}</span>
              </li>
              <li class="copmment-reply-btn margin-left-10">
                <span @click="openReply(reply.replyUser.id, reply.id)" class="pointer">回复</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  @import '../assets/css/comment.css';
  .article {
    margin-top: 5rem;
    width: 62.5rem;
    margin: 0 auto;
    margin-bottom: 5rem;
    color: #000000;
    background-color: rgba(255, 255, 255);
    padding: 2rem;
    text-align: left;
  }
  .article h3 {
      font-size: 1.7rem;
      padding: 1rem 0;
  }
  .article .info {
      width: 100%;
      border-radius: 5px;
      padding: 1rem 0.5rem;
      background-color: rgba(39, 255, 255, 0.23);
  }
  .article .info span, .article .info .createTime {
      display: inline-block;
      margin-right: 1.5rem;
      height: 45px;
      line-height: 45px;
  }
  .article .info .type {
      background-color: rgba(251, 255, 19, 0.822);
      width: 45px;
      
      border-radius: 50%;
      text-align: center;
      
  }
  .article .content {
      margin-top: 1rem;
      min-height: 500px;
  }
  .article .info .createTime {
      padding: 0;
      text-align: center;
      background: none;
      border: none;
  }

  .post-comment {
    overflow: hidden;
  }

</style>
<script>
import Element from "element-ui";
export default {
  name: 'Article',
  components: {
    
  },
  data() {
      return {
          toolbars: {
            navigation: false,
            subfield: true, // 单双栏模式
            preview: false,
            readmodel: true
          },
          article: {
            sysUser: {
              userName: ""
            }
          },
          commentList: {},
          chooseLike: false,
          comment: "",
      }
  },
  mounted(){
    
    var $this = this;

    this.article.id = this.$route.params.articleId
    this.$axios.get(`/article/watch/${this.article.id}`)
    .then(response => {
      this.article = response.data.data.article;
      this.commentList = response.data.data.commentList;
      this.article.type == 1 ? this.article.type = "原创" : this.article.type="转载"
    });
  },
  methods: {
    
    //将时间转化为多少年/月/天/小时/分钟前
    formatTime(commentDate){
      let date1 = new Date(commentDate.replace(/-/,'/'));
      let date2 = new Date();
      
      let year1 = date1.getFullYear();
      let month1 = date1.getMonth() + 1;

      let year2 = date2.getFullYear();
      let month2 = date2.getMonth() + 1;

      //毫秒值
      let format = date2-date1;
      //let day = Math.floor((new Date("2021/1/1") - new Date("2020/12/31")) / (24 * 3600 * 1000));
      
      let days = Math.floor(format / (24 * 3600 * 1000));//相隔多少天
      
      let flag1 = (0===year1%4) && (0===year1%100) || (0===year1%400);
      let flag2 = (0===year2%4) && (0===year2%100) || (0===year2%400);
      let yearDays = flag1 || flag2 ? 366 : 365;//满一年多少天
      
      if(year1 < year2 && days >= yearDays  ) {//满一年
        return year2 - year1 + "年前";
      }

      let nextMonth = new Date(commentDate.replace(/-/,'/'));
      nextMonth.setMonth(date1.getMonth() + 1);//下一个月
      let monDays =  Math.floor((nextMonth - date1) / (24 * 3600 * 1000));//这个月有多少天
      
      if(year1 < year2 && days < yearDays &&  days >= monDays) {//不满一年，但是跨年，满一个月 2020/12/1 2021/2/1
        return month2 - month1 + "月前";
      }

      if(year1 < year2 && days < yearDays &&  days >= monDays) {//不满一年，但是跨年，不满一个月 2020/12/25 2021/1/1
        return days + "天前";
      }

      if(days < yearDays &&  days >= monDays) {//不跨年，满一个月
        return month2 - month1 + "月前";
      }
      //不跨年，不满一个月
      
      //计算出相差天数
      if(days > 0){
        return days + "天前"
      }
      //计算出小时数
      var leave1 = format % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      var hours = Math.floor(leave1 / (3600 * 1000));
      if(hours > 0){
        return hours + "小时前"
      }
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000));
      return minutes + "分钟前"
      
    },
    //显示回复框
    openReply(userId, commentId){
      let $this = this;
      this.$prompt('请输入内容', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '请填写内容'
      }).then(({ value }) => {
        let data = {
          "commentId": commentId,
          "content": value,
          "articleId": this.article.id,
          "userId": userId,//被回复人的id
          "replyId": 2//回复人的id
        }
        this.$axios.post("/comment/postReply", JSON.stringify(data),
          // {
          //   headers: {
          //     "Authorization": localStorage.getExpire("token")
          //   }
          // }
        )
        .then(response => {
          this.commentList = response.data.data.commentList
          this.$message({
            type: 'success',
            message: '评论成功'
          });
        });

        
      });
    },
    //发布评论
    postComment(){
      if(this.comment.trim() == ""){
        Element.Message({
          message: "请先输入内容",
          type: 'error',
          duration: 2 * 1000
        })
      }else {
        let data = {
          "userId": 1,
          "articleId": this.article.id,
          "content": this.comment
        }
        this.$axios.post(`/comment/postComment`, JSON.stringify(data)
          // {
          //   headers: {
          //     "Authorization": localStorage.getExpire("token")
          //   }
          // }
        )
        .then(response => {
          this.commentList = response.data.data.commentList
          //情况评论框内容
          this.comment = ""
          this.$message({
            type: 'success',
            message: '评论成功'
          });
        });
      }
    },
    //点击喜欢
    clickLike() {
        if(this.chooseLike == true){//已经点击过了
          this.$axios.put(`/article/decreaseLikes/${this.article.id}`)
          .then(response => {
            this.article.likes = this.article.likes-1;
            this.chooseLike = false;
          });
        }else {
          this.$axios.put(`/article/increaseLikes/${this.article.id}`)
          .then(response => {
            this.article.likes = this.article.likes+1;
            this.chooseLike = true
          });
        }
      // }
    }
  },
  
  
  created() {
    
  }
}
</script>
