<template>
  <div class="timeline">
    <div class="block">
      <el-timeline>
        <el-timeline-item :timestamp="article.createTimeVO" placement="top" v-for="(article, index) in articles" :key="index">
          <el-card>
            <div class="title"><h4><router-link :to="{path: '/article/'+article.id}">{{article.title}}</router-link></h4></div>
            <div class="summary"><p>{{article.summary}}</p></div>
            <div class="category">
              <template v-for="(category, index2) in article.categorys">
                <router-link :to="{path: '/category/'+ category.id}" class="category_btn"  :key="index2">
                    {{category.name}}
                </router-link>
              </template>
            </div>
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
      articles: {}
    }
  },
  mounted() {
    this.findArticleByID();
  },
  methods: {
    //获取文章
    findArticleByID() {
      this.$axios.get("/article/listArticleByUserId/0")
      .then(response => {
          this.articles = response.data.data.articles;
      });
    }
  }
}
</script>