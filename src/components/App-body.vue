<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="17" :xs="24" :sm="24" :md="17">
            <!-- 顶部图片 -->
            <div class="top-img">
                <el-image :src="src"></el-image>
            </div>
            <!-- 文章 -->
            <div class="article">
                <!-- 每篇文章 -->
                <div class="item" v-for="(article, index) in pageInfo.records" :key="index" @click="clickArticle(article.id)">
                    <el-row type="flex" :gutter="20">
                        <el-col :span="8" :xs="0">
                            <div class="item_img">
                                <el-image :src="src2" lazy></el-image>
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
        <Sidebar :sidebar="{categorys, recommendArticles}" ></Sidebar>
    </el-row>
</template>

<style scoped lang="less">
    @import url("~@/assets/css/articleItem.less");
    // @import './assets/css/articleItem.less';
    @margin20: 20px;

    .top-img {
        width: 100%;
        height: 350px;
        margin-bottom: @margin20;
    }
    .top-img .el-image {
        width: 100%;
        height: 100%;
    }

</style>
<script>
  import Sidebar from '@/components/sidebar'
  export default {
    data() {
        return {
            categorys: {},
            pageInfo:{},
            recommendArticles: {},
            currentPage: 0,
            pageSize: 10,
            src: require("@/assets/images/1.jpg"),
            src2: require("@/assets/images/2.jpg"),
        }
    },
    mounted() {
        this.init(this.currentPage, this.pageSize);
    },
    components:{
      Sidebar
    },
    methods: {
        //后台交互
        init(current, size) {
            this.$axios.get("/home/" + current + "/" + size)
            .then(response => {
                let homeVO = response.data.data.homeVO;
                this.categorys = homeVO.categorys;
                this.pageInfo = homeVO.pageInfo;
                this.recommendArticles = homeVO.recommendArticles;
            });
        },
        //点击文章
        clickArticle(articleId) {
            this.$router.push({name:'Article', params: {articleId: articleId}});
        },
        //点击页数
        handleCurrentChange() {
            this.init(this.currentPage, this.pageSize);
        },
        //点击每页多少条
        handleSizeChange() {
            this.init(this.currentPage, this.pageSize);
        }
    }
  }
</script>