<template>
<div class="mytask">
  <el-row :gutter="40" justify>
    <el-col :span="5" :offset="6">
      <p>{{username}}</p>
    </el-col>
    <el-col :span="8">
      <p>任务量累计：{{percent}}</p>
    </el-col>
  </el-row>

  <el-row style="margin-top:30px">
    <el-col :span="22" :offset="1">
      <el-table :data="MyTask" height="600" border style="width:100%">
       <el-table-column label="任务名" prop="project"></el-table-column>
       <el-table-column label="角色" prop="actor"></el-table-column>
       <el-table-column label="所占比例" prop="OnePer"></el-table-column>
     </el-table>
    </el-col>
  </el-row>
</div>
</template>

<script>
import Axios from 'axios'
export default{
  data(){
    return{
      username:"",
      percent:"",
      MyTask:[/*{
        project:"实验室任务管理",
        actor:"组长",
        OnePer:"60%"
    }*/],
  }},
  mounted(){
    //do something after mounting vue instance
    var user=JSON.parse(sessionStorage.getItem('user'));
    Axios.get('./mock/MyTask.json')
   // Axios.get('http://10.246.19.47:8009/Stu/MyTask?name='+user.username)
   .then(function(res){
       //成功获取json数据信息的话
      // console.log(res.data.percent);
      this.percent=res.data.percent;
      this.username=user.username;
       var tem=[];
       var len=res.data.MyTask.length;
       for (var i = 0; i < len; i++)
        {
          tem.push({
            project:res.data.MyTask[i].project,
            actor:res.data.MyTask[i].actor,
            OnePer:res.data.MyTask[i].OnePer
          })
       }
       this.MyTask=tem;
     }.bind(this)
    ).catch(function(){
      cosole.log("出现错误");
    })
   }
  }
</script>
<style>
body{margin: 0}
.demo-table-expand {
   font-size: 0;
 }
 .demo-table-expand label {
   width: 90px;
   color: #99a9bf;
 }
 .demo-table-expand .el-form-item {
   margin-right: 0;
   margin-bottom: 0;
   width: 100%;
 }
</style>
