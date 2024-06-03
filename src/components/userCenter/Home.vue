<template>
  <div>
    <div class="title">
      <span class="title_icon"></span>
      <span class="title_text">我的信息</span>
    </div>
    <div >
      <div class="user-setting-warp">

        <el-form
            size="large"
            label-width="95"
            :model="form"
            :rules="rules"
            ref="formRef"
        >
          <el-form-item label="ID">
            <el-input v-model="form.userId" class="input" disabled />
          </el-form-item>
          <el-form-item label="昵称" prop="name">
            <el-input v-model="form.name" class="input" />
          </el-form-item>
          <el-form-item label="邮箱" >
            <el-input v-model="form.email" class="input" disabled/>
          </el-form-item>
          <el-form-item label="手机号" prop="tel">
            <el-input v-model="form.tel" maxlength="11" class="input" />
          </el-form-item>
        </el-form>

        <el-divider />
        <div style="text-align: center;padding-bottom: 60px">
          <el-button size="large" type="primary" class="button" @click="update(formRef)">
            保存
          </el-button>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import {UserStore} from "@/stores/userStore";
import {Close} from "@element-plus/icons-vue";
import {onBeforeMount, reactive,ref} from "vue";
import {ElMessage, FormInstance, FormRules} from "element-plus";
import axios from "axios";
import {onBeforeRouteLeave} from "vue-router";
import router from "@/router";

const userStore = UserStore();

onBeforeMount(()=>{
  form.userId = userStore.id
  form.name = userStore.name
  form.email = userStore.email
  form.tel = userStore.tel
})


const form = reactive({
  userId:'',
  name:'',
  email:'',
  tel:''
})

const formRef = ref<FormInstance>()

const validatePhone = (rule:any, value:any, callback:any) => {
  // 验证电话号码手机号码，包含至今所有号段? ?
  const ab = /^[1][3,4,5,7,8,9][0-9]{9}$/
  if (!ab.test(value)) {
    callback(new Error('请输入正确电话号码'))
  }
  callback()
}

const rules:FormRules = {
  name:[{required:true,message:'请输入昵称',trigger: 'blur'},
    { min:2,message:'昵称最短为2个字符',trigger:'blur'},
    { max:10,message:'昵称最长为10个字符',trigger:'blur'}],
  tel:[{required:true,message:'请输入手机号',trigger: 'blur'},
    {validator:validatePhone,trigger:'blur'}]
}

const update = async (formRef:FormInstance)=>{
  console.log(formRef)
  if (!formRef) return
  await formRef.validate(async (valid:any) => {
    if (valid) {
      await axios({
        method:'put',
        url:`/user/alter/${form.userId}`,
        data:{
          name:form.name,
          tel:form.tel
        }
      }).then((res)=>{
        if (res.data.code === 200){
          userStore.name = form.name
          userStore.tel = form.tel
          ElMessage({
            message: '修改成功',
            type: 'success',
          })
        }else {
          ElMessage.error('修改失败')
        }
      })
    }
  })
}

onBeforeRouteLeave(async (to,from,next)=>{
  if (!formRef) return
   await formRef.value.validate((valid:any) => {
    if (valid) {
      // 判断
      if (userStore.name != null){
        next()
      }
      else {
        ElMessage.error('请保存')
      }
    }else {
      ElMessage.error('请输入昵称和手机号')
    }
  })
})

</script>

<style scoped>
.title{
  height: 50px;
  padding-left: 30px;
  border-bottom: 1px solid rgb(221, 221, 221);
}
.title_text{
  float: left;
  margin: 15px 0 0 5px;
  color: rgb(0, 161, 214);
  font-size: 14px;
  cursor: default;
}
.title_icon{
  float: left;
  width: 4px;
  height: 16px;
  margin-top: 18px;
  background-color: rgb(0, 161, 214);
  border-radius: 4px;
}
.input{
  width: 225px;
}
.button{
  width: 110px;
}
.user-setting-warp{
  padding: 20px 20px 0;
  position: relative;
}
</style>