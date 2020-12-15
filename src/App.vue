<template>
  <div id="app">
    <Header></Header>
    <div class="body">
        <el-row type="flex" justify="center">
            <el-col :span="16" :xs="24">
              <router-view v-if="isReload"/>
            </el-col>
        </el-row>
    </div>
    <Footer></Footer>
  </div>
</template>

<style>
  @import './assets/css/base.css';
  @import './assets/css/App.css';
</style>
<script>
  import Header from '@/components/header'
  import Footer from '@/components/footer'
  export default {
    data() {
      return {
        isReload: true
      }
    },
    
    provide() {
      return {
        reload: this.reload
      }
    },
    components:{
      Header,
      Footer
    },
    methods: {
      //reload
      reload(){
        this.isReload = false;
        this.$nextTick(function(){
          this.isReload = true;
        })
      },
    }
  }
</script>