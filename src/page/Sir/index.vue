<template>
  <div id="app">
    <header1></header1>
    <!--左侧导航栏-->
    <main>
      <div class="main-left">
        <el-menu default-active="/Sir" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/Sir">实验室任务概览</el-menu-item>
          <el-menu-item index="/Sir/NewTask">任务发布</el-menu-item>
          <el-menu-item index="/Sir/ManageTask">任务管理</el-menu-item>
          <el-menu-item index="/Sir/AllPeople">人员管理</el-menu-item>
          <el-menu-item index="/Sir/OnePerson">个人管理</el-menu-item>  
        </el-menu>
      </div>

      <div　class="main-right">
        <transition name="fade">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
   import header1 from '@/components/header.vue'
   export default {
     name: 'app',
     components: {header1},
       data(){
         return{
           active:true
         }
       },
}
</script>

<style>
body{
  margin:0
}
#app{
  min-width: 1200px;
  margin:0 auto;
  font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
}

main{display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
main .main-left{text-align: center;-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px;}
main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 50px 70px; }
main .el-menu{background-color: transparent!important;}
/*  */
.router-link{display:inline-block;width:100%;height:100%;text-align:center;color:#475669;text-decoration: none; }
.is-active .router-link{color:#20a0ff; }

/* 单选框 */
  .el-form-item .el-radio+.el-radio {
    margin-left: 30px!important;
  }
  /* 路由切换动效 */
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }

/* 导航栏菜单选中效果 */
  .isActive{color: #20a0ff!important;}
   #app main .aside .is-active{color: #475669;}

  /* 卡片 */
  .el-card{overflow: visible!important;}
</style>
