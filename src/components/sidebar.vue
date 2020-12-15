<template>
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