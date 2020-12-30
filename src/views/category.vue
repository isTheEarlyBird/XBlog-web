<template>
  <el-row type="flex" justify="space-between">
      <el-col :span="17" :xs="24" :sm="24" :md="17">
        <!-- 选择的分类 -->
        <div class="category">
          <span @click="clickCategory(index + 1)" :class="{'skyblue': (index + 1 == num ? true : false)}" class="pointer" v-for="(category, index) in allCategory" :key="index">
            {{category.name}}
          </span>
        </div>
        <div class="article">
            <!-- 每篇文章 -->
            <template v-if="pageInfo.records && pageInfo.records.length > 0">
              <div class="item"  v-for="(article, index) in pageInfo.records" :key="index" @click="clickArticle(article.id)">
                  <el-row type="flex" :gutter="20">
                      <el-col :span="8" :xs="0">
                          <div class="item_img">
                              <el-image :src="require('../' + article.cover)" lazy></el-image>
                          </div>
                      </el-col>
                      <el-col :span="16" :xs="24">
                          <div class="item_info">
                              <ul>
                                  <li class="top-right number">
                                      <span><i class="el-icon-view">{{article.views}}</i></span>
                                      <span><i class="el-icon-star-on">{{article.likes}}</i></span>
                                      <span><i class="el-icon-chat-dot-square">{{article.comments}}</i></span>
                                  </li>
                                  <li class="article_title"><h4>{{article.title}}</h4></li>
                                  <li class="article_info">
                                      <div class="user-info">
                                          <el-avatar :src="article.sysUser.avatar"></el-avatar>
                                          <span>{{article.sysUser.username}}</span>
                                      </div>
                                      <div class="create_time">
                                          <span>{{article.createTimeVO}}</span>
                                      </div>
                                  </li>
                                  <li class="article_summary"><span>{{article.summary}}</span></li>
                                  <li class="category" >
                                      <div>
                                          <span v-for="(category, index) in article.categorys" :key="index"><i class="el-icon-s-promotion"></i>{{category.name}}</span>
                                      </div>
                                      
                                  </li>
                              </ul>
                          </div>
                      </el-col>
                  </el-row>
              </div>
            </template>
            <template v-if="pageInfo.records.length <= 0">
              <div class="item">
                没有数据
              </div>
            </template>
            <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size.sync = "pageSize"
                
                layout="sizes, prev, pager, next"
                :total="pageInfo.total">
                </el-pagination>
            </div>
        </div>
      </el-col>
      <!-- 侧边栏 -->
      <Sidebar :sidebar="{recommendArticles}" ></Sidebar>
  </el-row>
</template>
<style scoped lang="less">
   @import url("~@/assets/css/articleItem.less");
   .category {
     min-height: 50px;
     margin-bottom: 30px;
     overflow: hidden;
     >span {
       float: left;
       margin-right: 20px;
       margin-bottom: 10px;
       padding: 10px;
       border-radius: 10%;
       background-color: rgb(50, 223, 246);
     }
   }
   .category .skyblue {
     background-color: rgb(98, 196, 253);
   }
</style>
<script>
import Sidebar from '@/components/sidebar'
export default {
  name: 'Category',
  components: {
    Sidebar
  },
  inject: ["reload"],
  data() {
    return {
      allCategory: {},//所有分类
      recommendArticles: {},//推荐文章
      recommendCategorys: {},//推荐分类
      pageInfo: {
        records: {
          length: ""
        }
      },
      pageSize: 10,
      currentPage: 0,
      num: 0,
    }
  },
  mounted() {
    this.num = this.$route.params.categoryId;
    this.init(this.num, this.currentPage, this.pageSize);
  },
  methods: {
    //后台交互
    init(cid, current, size) {
      this.$axios.get("/category/categorys/" + cid+"/"+ current + "/" + size )
      .then(response => {
        let commonVO = response.data.data.commonVO;
        this.pageInfo = commonVO.pageInfo;
        this.recommendArticles = commonVO.recommendArticles;
        
        this.allCategory = response.data.data.allCategory;
      });
    },
    //点击分类
    clickCategory(index) {
      this.num = index;
      this.$router.push({path: "/category/" + index});
      this.reload();//刷新页面
    },
    //点击文章
    clickArticle(articleId) {
        this.$router.push({name:'Article', params: {articleId: articleId}});
    },
    //点击页数
    handleCurrentChange() {
        this.init(this.num, this.currentPage, this.pageSize);
    },
    //点击每页多少条
    handleSizeChange() {
        this.init(this.num, this.currentPage, this.pageSize);
    }
  }
}
</script>
