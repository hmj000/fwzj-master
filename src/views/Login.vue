<template>

  <el-dialog :modelValue="showLogin" width="600" @closed="close" :before-close="beforeClose">
    <div>
      <div class="login-tab-wp">
        <div>
          <el-link class="login-tab-item" :type="disabled?'primary':'default'" :disabled="disabled" @click="show">密码登录</el-link>
        </div>
        <div class="login-tab-line">
        </div>
        <div>
          <el-link class="login-tab-item" :type="!disabled?'primary':'default'" :disabled="!disabled" @click="show">邮箱登录</el-link>
        </div>
      </div>
      <div class="login-pwd-wp" v-show="loginOrRegister" >
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
          <el-form-item prop="email">
            <el-input size="large" v-model="loginForm.email" placeholder="请输入邮箱" class="input">
              <template #prepend>
                账号
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input size="large" v-model="loginForm.password" placeholder="请输入密码" show-password type="password" class="input" :maxlength="16">
              <template #prepend style="background-color:#fff;">
                  密码
              </template>
              <template #append>
                <el-link>
                  忘记密码
                </el-link>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item class="item">
            <div style="width: 100%; text-align: center">
              <el-button size="large" class="button" @click="register">注册</el-button>
              <el-button size="large" type="primary" class="button" @click="login(loginFormRef)">登录</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-sms-wp" v-show="!loginOrRegister">
        <el-form ref="registerFormRef" :model="registerForm" :rules="registerRules">
          <el-form-item prop="email">
            <el-input v-model="registerForm.email" class="input" size="large" placeholder="请输入邮箱">
              <template #prepend>
                邮箱号
              </template>
              <template #append>
                <el-button @click="sendCode(registerFormRef)" :disabled="sendCodeDisabled">
                  {{buttonText}}
                </el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="registerForm.code" size="large" placeholder="请输入验证码" class="input">
              <template #prepend>
                验证码
              </template>
            </el-input>
          </el-form-item>
          <el-form-item class="item">
            <div style="width: 100%; text-align: center">
              <el-button size="large" type="primary" class="button" @click="registerClick(registerFormRef)">
                登录/注册
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-dialog>


</template>

<script setup lang="ts">

import {computed, inject, reactive, ref} from "vue";
import axios from "axios";
import {ElMessage, FormInstance, FormRules} from "element-plus";
import {UserStore} from "@/stores/userStore";
import router from "@/router";

const userStore = UserStore()

const a = true

const props = defineProps({
  showLogin:{
    type:Boolean,
    default:false
  },
  closeLogin:{
    type:Function
  }
})

const loginOrRegister = ref(true)
const disabled = ref(true)

const beforeClose = ()=>{
  props.closeLogin()
}

const show = ()=>{
  disabled.value = !disabled.value
  loginOrRegister.value = !loginOrRegister.value
}

const loginForm = reactive({
  email:"",
  password:""
})

const registerForm = reactive({
  email:'',
  code:''
})

const loginRules:FormRules = {
  email:[{required:true,message:'请输入邮箱地址',trigger: 'blur'},
    {type:"email",message:'请输入正确的邮箱地址',trigger:'blur'}],
  password:[{required:true,message:'请输入密码',trigger:'blur'},
    {min:8,max:16,message:'密码长度不匹配',trigger:'blur'}]
}

const registerRules:FormRules = {
  email:[{required:true,message:'请输入邮箱地址',trigger: 'blur'},
    {type:"email",message:'请输入正确的邮箱地址',trigger:'blur'}],
  code:[{required:true,message:'请输入验证码',trigger:'blur'},
    {min:4,max:4,message:'验证码长度不匹配',trigger:'blur'}]
}

const loginFormRef = ref<FormInstance>()

const registerFormRef = ref<FormInstance>()
const  login = async (loginFormRef:FormInstance)=>{
  // 表单验证
  if (!loginFormRef) return
  await loginFormRef.validate(async (valid:any) => {
    if (valid) {
      await axios({
        method:'post',
        url:'/user/login',
        data:{
          email:loginForm.email,
          password:loginForm.password
        }
      }).then((res)=>{
        if (res.data.code === 200){
          ElMessage({
            message: '登陆成功',
            type: 'success',
          })
          userStore.token = res.data.data.token
          props.closeLogin()
        }else {
          ElMessage.error(res.data.msg)
        }
      }).catch(()=>{
        ElMessage.error('请求失败')
      })
    }

  })
}

const register = ()=>{
  loginOrRegister.value = false
  disabled.value = false
}

const sendCodeDisabled = ref(false)

const totalTime = ref(60)

const buttonText = computed(()=>{
  if (totalTime.value === 60){
    return '获取验证码'
  }else{
    return totalTime.value + 's秒后重新获取'
  }
})

const sendCode = async (registerFormRef:FormInstance)=>{
  await registerFormRef.validateField("email", (msg) => {
    if (msg) {
      // 请求发送验证码
      sendCodeDisabled.value = true
      const clock =  window.setInterval(()=>{
        totalTime.value--
        if (totalTime.value === 0){
          sendCodeDisabled.value = false
          totalTime.value = 60
          window.clearInterval(clock)
        }
      },1000)
      axios({
        method: 'post',
        url: '/mail/sendMail',
        data: {
          email: registerForm.email
        }
      }).then((res) => {
        if (res.data.code === 200) {
          ElMessage({
            message: '发送成功',
            type: 'success',
          })
        }
      }).catch(() => {
        ElMessage.error('请求失败')
      })
    }
  })
}

const registerClick = async (registerFormRef:FormInstance)=>{
  console.log(registerFormRef)
  if (!registerFormRef) return
  await registerFormRef.validate((valid, fields) => {
    if (valid) {
      axios({
        method:'post',
        url:'/user/loginAndRegister',
        data:{
          code: registerForm.code,
          email:registerForm.email
        }
      }).then((res)=>{
        if (res.data.code === 200){
          userStore.token = res.data.data.token
          props.closeLogin()
        }else {
          ElMessage.error(res.data.msg)
        }
      }).catch(()=>{
        ElMessage.error('请求失败')
      })

    } else {
      console.log('error submit!', fields)
    }
  })
}


</script>

<style scoped>

  .login-tab-wp{
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }
  .login-tab-item{
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
  }
  .login-tab-line{
    width: 1px;
    height: 20px;
    background: #e3e5e7;
    border-radius: 8px;
    margin: 0 21px;
  }
.input{
  background-color: #fff;
  width: 400px;
}
.login-pwd-wp,.login-sms-wp{
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.item{
  width: 100%;
}
.button{
  width: 190px;
}

</style>