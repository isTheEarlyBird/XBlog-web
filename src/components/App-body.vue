<template>
    <div class="body">
        <el-row type="flex" justify="center">
            <el-col :span="16" :xs="24">
                <el-row type="flex" justify="space-between">
                    <el-col :span="17" :xs="24" :sm="24" :md="17">
                        <div class="top-img">
                            <el-image :src="src"></el-image>
                        </div>

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
                    <el-col :span="6" class="hidden-sm-and-down sidebar" >
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>推荐文章</span>
                            </div>
                            <div class="text item">
                                <router-link :to="{name:'Article', params: {id:1}}">springboot如何学习</router-link>
                            </div>
                            <div class="text item">
                                <a href="">springboot如何学习倒萨倒萨倒萨倒萨倒萨倒萨大大撒打算dsadsds</a>
                            </div>
                            <div class="text item">
                                <a href="">springboot如何学习倒萨倒萨倒萨倒萨倒萨倒萨大大撒打算dsadsds</a>
                            </div>
                            <div class="text item">
                                <a href="">springboot如何学习倒萨倒萨倒萨倒萨倒萨倒萨大大撒打算dsadsds</a>
                            </div>
                            <div class="text item">
                                <a href="">springboot如何学习倒萨倒萨倒萨倒萨倒萨倒萨大大撒打算dsadsds</a>
                            </div>
                            
                        </el-card>
                        
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>分类</span>
                            </div>
                            <div class="text item">
                                <a href="">springboot</a>
                            </div>
                            <div class="text item">
                                <a href="">springdsadsds</a>
                            </div>
                            <div class="text item">
                                <a href="">dsadsds</a>
                            </div>
                            <div class="text item">
                                <a href="">java</a>
                            </div>
                            <div class="text item">
                                <a href="">c</a>
                            </div>
                            
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="less">
    @margin20: 20px;
    @height160: 160px;
     
    .body {
        min-height: 650px;
        margin-top: @margin20;
    }

    el-row {
        margin-bottom: @margin20;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
   
    .top-img {
        width: 100%;
        height: 350px;
    }
    .top-img .el-image {
        width: 100%;
        height: 100%;
    }

    
    .article {
        margin-top: @margin20;
        margin-bottom: @margin20;
        
        .item {
            cursor: pointer;
            padding: 2%;
            margin-bottom: @margin20;
            width: 100%;
            height: (1+2%) * @height160;
            background-color: #fff;
            border: 1px solid #fff;
            &:last-child {
                margin-bottom: 0;
            }
            .el-image {
                width: 100%;
                height: @height160;
            }
            &:hover {
                border: 1px solid skyblue;
            }
        }
    }

    .item_info {
        text-align: left;
        li {
            margin-bottom: @margin20 / 2;
             &:last-child {
                margin-bottom: 0;
            }
        }
        .number span {
            margin-left: @margin20 / 2;
        }
        .article_title {
            font-size: 26px;
            font-weight: bold;
            color: skyblue;
        }
        .article_summary {
            height: 50px;
            span {
                white-space:pre-wrap;
                word-break: break-all;
            }
        }
        .category {
            color: rgba(0, 0, 0, 0.5);
            span {
                margin-right: 10px;
                &:last-child {
                    margin-right: 0;
                }
                i {
                    color: rgba(81, 204, 70, 0.794);
                }
            }
        }
        .article_info {
            overflow: hidden;
            >div {
                float: left;
                line-height: 30px;
                color: rgba(0, 0, 0, 0.5);
            }
            .user-info {
                margin-right: @margin20;
                .el-avatar{
                    vertical-align:middle;
                    width: 25px;
                    height: 25px;
                }
            }
        }
        
        .top-right {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

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
    data() {
      return {
        src: require("@/assets/images/1.jpg"),
        src2: require("@/assets/images/2.jpg"),
      }
    }
  }
</script>