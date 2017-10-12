<template>
  <div class="Stu">
    <el-form
    ref="c1"
    v-for="(StuForm,index) in StuForms"
    :model="StuForm"
    :key=StuForm.key
    label-position="left"
    >
      <el-form-item :label="'任务'+(index+1)+'名字'">
        <el-input v-model="StuForm.misname"></el-input>
     </el-form-item>

     <el-form-item :label="'比例'">
       <el-select v-model="StuForm.misper" placeholder="请选择任务比例">
         <el-option
          v-for="item in peroptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
      </el-select>
    </el-form-item>

    <el-form-item  :label="'组长'">
      <el-select v-model="StuForm.mispeo" placeholder="请选择组长">
        <el-option
         v-for="item in peoptions"
         :key="item"
         :label="item"
         :value="item">
         </el-option>
     </el-select>
   </el-form-item>

   <el-form-item  :label="'任务状态'">
     <el-radio-group v-model="StuForm.miscon">
       <el-radio label="完成">完成</el-radio>
       <el-radio label="未完成">未完成</el-radio>
     </el-radio-group>
  </el-form-item>

  <el-form-item  :label="'截止时间'"  >
    <el-date-picker  v-model="StuForm.misend" type="date" placeholder="选择日期"  :picker-options="pickerOptions0">
   </el-date-picker>
 </el-form-item>


    <el-form-item label="任务描述">
      <el-input type="textarea" v-model="StuForm.misdetail"></el-input>
   </el-form-item>

   <el-form-item>
      <el-button @click="resetForm(StuForm)">重置任务</el-button>
      <el-button  @click.prevent="removeMission(StuForm)">删除任务</el-button>
   </el-form-item>
  </el-form>

  <el-button type="primary" @click="submitForm('c1')">提交</el-button>
  <el-button @click="addDomain()">新增任务</el-button>
  <p id="test">我是改变之前</p>
  </div>
</template>

<script>
export default{
  data(){
    return{
      StuForms:[{
         misname:"",
         misper:'',
         mispeo:'',
         miscon:'未完成',
         misend:'',
         misdetail:''
      }],
      StuForm:{
        misname:"",
        misper:'',
        mispeo:'',
        miscon:'未完成',
        misend:'',
        misdetail:''
      },
      peroptions:[{
        value:'5',
        label:"5%"
      },
      {
        value:'10',
        label:"10%"
      },
      {
        value:'15',
        label:"15%"
      },
      {
        value:'20',
        label:"20%"
      },
      {
        value:'25',
        label:"25%"
      },
      {
        value:'30',
        label:"30%"
      },
      {
        value:'35',
        label:"35%"
      },
      {
        value:'40',
        label:"40%"
      },
      {
        value:'45',
        label:"45%"
      },{
        value:'50',
        label:"50%"
      },
      {
        value:'55',
        label:"55%"
      },{
        value:'60',
        label:"60%"
      },{
        value:'65',
        label:"65%"
      },
      {
        value:'70',
        label:"70%"
      },{
        value:'75',
        label:"75%"
      },{
        value:'80',
        label:"80%"
      },{
        value: '85',
        label:"85%"
      },{
        value:'90',
        label:"90%"
      },
      {
        value:'95',
        label:"95%"
      }],
      peoptions:["刘文健","周桐","彭一","陈飞坤","姜金霖","吴炜锋","王心雨","兰子宁","江宇川"],
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
      }
   }
 },
 methods: {
   //清空任务
   resetForm(formName) {
       formName.misname="";
       formName.misper='';
       formName.mispeo='',
       formName.miscon='未完成';
       formName.misend='';
       formName.misdetail='';
   },

     submitForm(formName) {
       console.log(this.$refs[formName]);
      //显示定位过来是一个表单的数组。需要取出来表单组的每个表单进行验证(弄了三天终于哈哈哈哈哈开心到转圈圈，这个办法是网上没有的我要写博客哈哈哈哈)
        var fir=this.$refs[formName][0];
        console.log(fir);

       fir.validate((valid) => {
         if (valid) {
           alert('submit!');
         } else {
           console.log('error submit!!');
           return false;
         }
     })
   },

   //配置到每个表单中，选择性的删除某一个表单
   removeMission(item) {
      var index = this.StuForms.indexOf(item)
      if (index !== -1) {
       this.StuForms.splice(index,1);
     }
   },
   //新增信息
   addDomain() {
     //新增之前对之前的一个表单进行验证

     this.StuForms.push({
       misname:"",
       misper:'',
       mispeo:'',
       miscon:'未完成',
       misend:'',
       misdetail:'',
       key: Date.now()
     });
  }
 }
}

</script>
