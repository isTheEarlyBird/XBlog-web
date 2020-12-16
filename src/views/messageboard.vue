<template>
  <div class="messageboard" style="min-height:600px;background-color: rgba(255, 255, 255);padding: 20px">
    
    <div class="showComment">
      <div class="comment-item overflow-hidden"  v-for="(item,index) in commentsList" :key="index">
        <div class="comment">
          <ul>
            <li class="comment-user-profile pointer">
              <el-avatar :src="require('../' + item.commentUser.userProfilePhoto)"></el-avatar>
            </li>
            <li class="comment-username margin-left-10">
              <span class="pointer">{{item.commentUser.userName}}</span>
              <span class="text">：</span>   
            </li>
            <li class="comment-content margin-left-10">
              <span>{{item.commentContent}}</span>
            </li>
            <li class="comment-date text margin-left-10">
              <span>{{formatTime(item.commentDate)}}</span>
            </li>
            <li class="copmment-reply-btn margin-left-10">
              <span @click="openReply(item.commentUser.userId, item.commentId)" class="pointer">回复</span>
            </li>
          </ul>
        </div>
        <div class="reply " v-if="item.children != null">
          <div v-for="(reply,i) in item.children" :key="i">
            <ul class="overflow-hidden">
              <li class="comment-user-profile pointer">
                <el-avatar :src="require('../' + reply.replyUser.userProfilePhoto)"></el-avatar>
              </li>
              <li class="comment-username margin-left-10">
                <span class="pointer">{{reply.replyUser.userName}}</span>
              </li>
              <li>
                <span class="text margin-left-10">回复：</span>
                <span class="margin-left-5">{{reply.commentUser.userName}}</span>
              </li>
              <li class="comment-content margin-left-20">
                <span>{{reply.commentContent}}</span>
              </li>
              <li class="comment-date text margin-left-10">
                <span>{{formatTime(reply.commentDate)}}</span>
              </li>
              <li class="copmment-reply-btn margin-left-10">
                <span @click="openReply(reply.replyUser.userId, reply.commentId)" class="pointer">回复</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="write-comment">
      <div style="margin: 100px 0;"></div>
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
  </div>
</template>
<style>
  @import '../assets/css/comment.css';
  
</style>
<script>
import Element from "element-ui";
export default {
  name: 'Messageboard',
  components: {
    
  },
  data() {
    return {
      commentsList: {},
      comment: "",
      blogReply: {
        commentUser: {},
        replyUser: {}
      },
    }
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
        this.blogReply = {
          commentUser: {},
          replyUser: {}
        }
        this.blogReply.commentId = commentId;
        this.blogReply.commentUser.userId = userId;//被回复人的id
        this.blogReply.articleId = 0;
        this.blogReply.commentContent = value
        this.blogReply.replyUser.userId = localStorage.getExpire("user").userId//回复人的id
        
        this.$axios.post(`/blog-comments/postReply`, JSON.stringify(this.blogReply),
          {
            headers: {
              "Authorization": localStorage.getExpire("token")
            }
          }
        )
        .then(response => {
          this.commentsList = response.data.data.commentsList
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
          "commentUser": {
            "userId": localStorage.getExpire("user").userId
          },
          "articleId": 0,
          "commentContent": this.comment
        }
        this.$axios.post(`/blog-comments/postComment`, JSON.stringify(data),
          {
            headers: {
              "Authorization": localStorage.getExpire("token")
            }
          }
        )
        .then(response => {
          this.commentsList = response.data.data.commentsList
          //情况评论框内容
          this.comment = ""
          this.$message({
            type: 'success',
            message: '评论成功'
          });
        });
      }
    },
  },
  mounted(){
    
    var $this = this;

    // this.$axios.get(`/blog-articles/findArticleById/watch/0`)
    // .then(response => {
    //   this.article = response.data.data.article;
    //   this.commentsList = response.data.data.commentsList;
    // });
  },
}
</script>
