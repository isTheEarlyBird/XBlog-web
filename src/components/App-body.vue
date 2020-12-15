<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="17" :xs="24" :sm="24" :md="17">
            <!-- 顶部图片 -->
            <div class="top-img">
                <el-image :src="src"></el-image>
            </div>
            <!-- 文章 -->
            <div class="article">
                <div class="item">
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
                                        <span><i class="el-icon-view">20</i></span>
                                        <span><i class="el-icon-star-on">20</i></span>
                                        <span><i class="el-icon-chat-dot-square">20</i></span>
                                    </li>
                                    <li class="article_title"><h4>我的标题</h4></li>
                                    <li class="article_info">
                                        <div class="user-info">
                                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                            <span>username</span>
                                        </div>
                                        <div class="create_time">
                                            <span>2020-12-11 10:20:12</span>
                                        </div>
                                    </li>
                                    <li class="article_summary"><span>摘要eewqewqeqwedqwedqdqwdasxsacxascascascascas</span></li>
                                    <li class="category">
                                        <div>
                                            <span><i class="el-icon-s-promotion"></i>spring</span>
                                            <span><i class="el-icon-s-promotion"></i>面试</span>
                                            <span><i class="el-icon-s-promotion"></i>springboot</span>
                                        </div>
                                        
                                    </li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                    
                </div>
                <div class="item">
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
                                        <span><i class="el-icon-view">20</i></span>
                                        <span><i class="el-icon-star-on">20</i></span>
                                        <span><i class="el-icon-chat-dot-square">20</i></span>
                                    </li>
                                    <li class="article_title"><h4>我的标题</h4></li>
                                    <li class="article_info">
                                        <div class="user-info">
                                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                            <span>username</span>
                                        </div>
                                        <div class="create_time">
                                            <span>2020-12-11 10:20:12</span>
                                        </div>
                                    </li>
                                    <li class="article_summary"><span>摘要eewqewqeqwedqwedqdqwdasxsacxascascascascas</span></li>
                                    <li class="category">
                                        <div>
                                            <span><i class="el-icon-s-promotion"></i>spring</span>
                                            <span><i class="el-icon-s-promotion"></i>面试</span>
                                            <span><i class="el-icon-s-promotion"></i>springboot</span>
                                        </div>
                                        
                                    </li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                    
                </div>
            </div>
        </el-col>
        <!-- 侧边栏 -->
        <Sidebar></Sidebar>
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
        src: require("@/assets/images/1.jpg"),
        src2: require("@/assets/images/2.jpg"),
      }
    },
    components:{
      Sidebar
    },
  }
</script>