<template>
  <div class="timeline">
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <div class="title"><h4><router-link to="">我是title</router-link></h4></div>
            <div class="summary"><p>我是摘要</p></div>
            <div class="category">
              <router-link to="/category/1" class="category_btn">spring</router-link>
              <router-link to="/category/2" class="category_btn">springboot</router-link>
              <router-link to="/category/3" class="category_btn">java</router-link>
            </div>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

  </div>
</template>
<style scoped lang="less">
  .timeline {
    text-align: left;
    .block {
      width: 50%;
      margin: 0 auto;
    }
  }

  .el-timeline-item__content {
    .el-card__body {
      >div {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .title {
        font-size: 20px;
      }
      
      .summary, .category {
        color: rgba(0, 0, 0, 0.5);
      }
      .category {
        
        overflow: hidden;
        .category_btn {
          float: left;
          padding: 3px 8px;
          text-align: center;
          border-radius: 10%;
          background-color: rgb(50, 223, 246);
          margin-right: 10px;
          &:hover {
            background-color: rgba(50, 223, 246, 0.5);
          }
        }
      }
      
    }
  }
</style>
<script>

export default {
  name: 'Timeline',
  components: {
    
  },
  data() {
    return {
    }
  },
}
</script>