<template>
    <!-- 侧边栏 -->
    <el-col :span="6" class="hidden-sm-and-down sidebar" >
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>推荐文章</span>
            </div>
            
            <div class="word item" v-for="(article, index) in sidebar.recommendArticles" :key="index">
                <router-link :to="{name:'Article', params: {articleId:article.id}}">{{article.title}}</router-link>
            </div>
            
            
            
        </el-card>
        
        <el-card class="box-card"  v-if="JSON.stringify(sidebar.recommendCategorys)!='{}'">
            <div slot="header" class="clearfix">
                <span>分类</span>
            </div>
            <div class="word item" v-for="(category, index) in sidebar.recommendCategorys" :key="index">
                <router-link :to="{path: '/category/' + category.id}">{{category.name}}</router-link>
            </div>
        </el-card>
    </el-col>
</template>

<style scoped lang="less">
    @margin20: 20px;
    //侧边栏
    .sidebar {
        min-height: 200px;
        .box-card {
            margin-bottom: @margin20 * 2;
        }
        .item {
            text-align: left;
            border-bottom: 1px solid rgba(0, 0, 0, 0.226);
            padding: 10px 0;
            &:last-child {
                border: none;
            }
            a {
                display: inline-block;
                width: 100%;
                cursor: pointer;
                &:hover {
                    color: rgba(255, 200, 20, 0.849);
                }
            }
        }
    }
   
</style>
<script>
export default {
    props: ['sidebar'],
    data() {
        return {
        }
    }
}
</script>