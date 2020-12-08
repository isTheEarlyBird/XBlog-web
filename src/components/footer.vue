<template>
    <el-footer class="footer">
        <el-row type="flex">
            <el-col :span="3" :xs="0"></el-col>
            <el-col :span="6" :xs="0">
                <div class="grid-content">
                    <el-image :src="src"></el-image>
                </div>
            </el-col>
            <el-col :span="4" :xs="8">
                <div class="grid-content">
                    <div class="content">
                        <ul>
                            <li>
                                <p class="content-title">友情连接</p>
                            </li>
                            <li>
                                <a href="">我的博客</a>
                            </li>
                            <li>
                                <a href="https://github.com/isTheEarlyBird">我的github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="4" :xs="8">
                <div class="grid-content">
                    <div class="content">
                        <ul>
                            <li>
                                <p class="content-title">联系我</p>
                            </li>
                            <li>
                                <span>没有联系方式</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="4" :xs="7">
                <div class="grid-content">
                    <div class="content">
                        <ul>
                            <li>
                                <p class="content-title">博客</p>
                            </li>
                            <li>
                                <span>我将会在这分享我的java相关的学习笔记</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="2" :xs="0"></el-col>
        </el-row>
    </el-footer>
</template>

<style scoped lang="less">
    @height: 200px;
    .el-footer.footer {
        background-color: #fff;
        padding: 0;
        min-height: @height;
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }

    .grid-content {
        border-radius: 4px;
        min-height: @height;
        position: relative;
        >div {
            min-width: 80px;
            position: absolute;
            top: 25%;
            left: 25%;
        }
        .el-image {
            width: 50%;
            height: 50%;
            
        }
        .content {
            ul {
                margin: 0 auto;
                li {
                    //height: @height/2/3;
                    line-height: @height/2/3;
                    color: rgba(0, 0, 0, 0.411);
                    .content-title {
                        font-size: 20px;
                        font-weight: bold;
                        color: skyblue;
                    }
                }
            }
        }
    }
    
</style>
<script>
  export default {
    data() {
      return {
        src: require("@/assets/images/2.jpg"),
      }
    }
  }
</script>