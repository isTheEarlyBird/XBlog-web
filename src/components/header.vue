<template>
    <el-header class="header">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        :mode="mode"
        :background-color="bgc"
        text-color="#fff"
        active-text-color="#fff"
        router
         >
        <el-menu-item class="logo hidden-xs-only" index="/"><el-image :src="src"></el-image></el-menu-item>
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item class="hidden-xs-only" index="/category/0">分类</el-menu-item>
        <el-menu-item class="hidden-xs-only" index="/timeline">时间线</el-menu-item>
        <el-menu-item class="hidden-xs-only" index="/messageboard">留言板</el-menu-item>
        <el-menu-item index="/writeArticle">写博客</el-menu-item>

        <el-menu-item class="hidden-xs-only right">
          <div class="user-info">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <span class="margin-left-10">username</span>
          </div>
        </el-menu-item>
        <div class="hidden-sm-and-up right fold">
          <span class="el-icon-s-fold"  @click="dialog = true"></span>
        </div>

        <div class="search-item hidden-xs-only right">
          <input class="search" placeholder="搜索" >
          <el-button class="el-icon-search" size="medium"></el-button>
        </div>
        </el-menu>
      <!-- elementUI drawer -->
      <el-drawer
          :visible.sync="dialog"
          direction="rtl"
          custom-class="demo-drawer"
          ref="drawer"
          >
        <div class="drawer-content">
          <el-menu
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          @select="drawerSelect"
          active-text-color="#ffd04b"
          router
          >
            <el-menu-item index="/category/1">分类</el-menu-item>
            <el-menu-item index="/timeline">时间线</el-menu-item>
            <el-menu-item index="/messageboard">留言板</el-menu-item>
            <div class="drawer-search">
              <el-form>
                <input class="drawer-search-input" placeholder="搜索" >
                <el-button class="el-icon-search drawer-search-button" size="medium"></el-button>
              </el-form>
            </div>
          </el-menu>
        </div>
      </el-drawer>
    </el-header>
    
</template>
<style scoped lang="less">
  // 去除导航栏下划线
  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
  }


   #app .header {
    height: 60px;
    line-height: 60px;
    padding: 0;
  }
  .header .el-row {
    height: 100%;
    margin-bottom: 20px;
  }
  .header .el-row:last-child {
    margin-bottom: 0;
  }
  .header .el-menu-item {
    font-size: 16px;
  }
  .header .bg-purple {
    background: #d3dce6;
  }
  
  .header .grid-content {
    height: 100%;
    border-radius: 4px;
    min-height: 36px;
  }
  
  .header .search .el-input__inner {
    height: 30px;
  }
  .header .logo {
    overflow: hidden;
    width: 80px;
  }
  .header .logo .el-image {
    width: 100%;
    height: 100%;
  }
  .header li.right {
    float: right;
  }
  .header .el-icon-search[data-v-29e8c3c6]:visited:active,
  .header .el-icon-search[data-v-29e8c3c6]:hover {
    background-color: #000;
  }
  
  @search-input: 30px;
  .header .search-item {
    display: inline-block;
    position: relative;
    cursor: default;
    height: 100%;
    .search {
      height: @search-input;
      border-radius: 5px;
      outline: none;
      padding-left: 10px;
    }
    &:focus {
      border: none;
    }
  }
  .header .search-item .el-icon-search {
    width: @search-input;
    height: @search-input;
    padding: 0;
    border: none;
    position: absolute;
    right: 1%;
    top: 25%;
    color: #000;
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
  }
  
  .fold {
    padding: 0;
    width: 70px;
    color: #fff;
    font-size: 22px;
  }

  .drawer-content {
    li {
      
      a {
        display: block;
        width: 100%;
      }
    }
    .click-color {
      border-bottom: 1px solid;
      &:hover {
        background-color: rgba(248, 168, 19, 0.205);
      }
    }
  }
  .drawer-search {
    position: relative;
    .drawer-search-input {
      width: 90%;
      height: 100%;
    }
    .drawer-search-button {
      position: absolute;
      top: 30%;
      right: 3%;
      border: none;
      background: none;
      padding: 5px;
    }
  }
</style>
<script>
export default {
    data() {
      return {
        search: "",
        src: require("@/assets/images/XBlog.png"),
        activeIndex: "/index",
        mode: "horizontal",
        bgc: "#000",
        dialog: false,
      }
    },
    created(){
    },
    mounted () {
    },
    methods: {
      //点击垂直导航栏
      drawerSelect(key, keyPath) {
        this.dialog = false
        this.activeIndex = ""
      }
    }
}
</script>