<template>
  <div>
    <div class="user" v-if="loginInfo">
      <div class="head-portrait">
        <div style="position: absolute;top: 15px">
          <div>
            <el-popover :width="300" popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
              <template #reference>
                <el-avatar :src="avatar" @click="userCenter" />
              </template>
              <template #default>
                <div style="display: flex; gap: 16px; flex-direction: column">
                  <el-avatar :size="60" :src="avatar" style="margin-bottom: 8px"/>
                  <div>
                    <p style="margin: 0; font-weight: 500">
                      {{name ? name : '新用户'}}
                    </p>
                    <p style="margin: 0; font-size: 14px; color: var(--el-color-info)">
                      {{email}}
                    </p>
                  </div>

                  <div>
                    <div>
                      <div class="menu-item" @click="userCenter">
                        <div class="text">
                          个人中心
                        </div>
                        <div class="icon">
                          <el-icon><ArrowRightBold /></el-icon>
                        </div>
                      </div>
                      <div class="menu-item" @click="logout">
                        <div class="text">
                          退出登录
                        </div>
                        <div class="icon">
                          <el-icon><ArrowRightBold /></el-icon>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </template>
            </el-popover>
          </div>
        </div>

      </div>
      <div class="link" v-for="link in linkList" >
        <el-link @click="jump(link.link)">
          <span>{{ link.name }}</span>
        </el-link>
      </div>
      <div style="display:flex;align-items: center;margin-left: 20px">
        <el-button  type="primary" size="large" @click="addHouse">发布房源</el-button>
      </div>
    </div>
    <div v-else>
      <el-button size="large" type="primary" @click="openLogin">登录\注册</el-button>
    </div>
  </div>


</template>

<script setup lang="ts">
import router from "@/router";
import {UserStore} from "@/stores/userStore";
import {ref, inject, onMounted, onBeforeMount, watch} from "vue";
import {ArrowRightBold, UserFilled} from "@element-plus/icons-vue";
import axios, {post} from "axios";
import {storeToRefs} from "pinia";

const linkList = [
  {name:'我的',link:'/userCenter/home'},
  {name:'收藏',link:'/userCenter/collect'},
  {name:'历史',link:'/userCenter/history'},
]
const userStore = UserStore()

// 在这请求用户数据
// 1. 将userStore数据导出
// 2. 请求数据
// 3. 清空userStore or 更新userStore

onBeforeMount(async ()=>{
  // 2.请求数据
  await postInfo()
})

const user = storeToRefs(userStore)
const avatar = ref(user.avatar)
const name = ref(user.name)
const email = ref(user.email)
const loginInfo = ref(false)

watch(user.token,(newValue)=>{
  console.log(1)
  if (newValue !== ""){
    postInfo()
  }
})


const p = defineProps({
  openLogin:Function
})

const addHouse = ()=>{
  router.push("/addHouse")
}

const logout = async ()=>{
  await axios({
    method:'post',
    url:'/user/logout'
  }).then((res)=>{
    if (res.data.code === 200){
      userStore.$reset()
      router.push("/")
    }
    loginInfo.value = false
  })
}
const userCenter = ()=>{
  router.push("/userCenter/home")
}

const jump = (link:string)=>{
  router.push(link)
}

const postInfo = async ()=>{
  if (userStore.token !== "") loginInfo.value = true
  await axios({
    method:'post',
    url:'/user/info'
  }).then((res)=>{
    if (res.data.code === 200){
      userStore.update(res.data.data.id,res.data.data.name,res.data.data.email,res.data.data.tel,res.data.data.avatar)
      if (res.data.data.name === null || res.data.data.name === ""){
        router.push("/userCenter/home")
      }
    }else {
      userStore.$reset()
      loginInfo.value = false
    }
  }).catch(()=>{
    loginInfo.value = false
  })
}


</script>

<style scoped>
@keyframes jump {
  0% {
    transform: translateY(0)
  }

  50% {
    transform: translateY(-3px)
  }

  to {
    transform: translateY(0)
  }
}
.user{
  display: flex;
}
.head-portrait{
  padding-right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  line-height: 50px;
}
.link{
  min-width: 50px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
}
.link:hover{
  animation: jump .3s;
}
a{
  color: #18191c;
  height: 64px;
  line-height: 64px;
  display: inline-block;
}
.menu-item {
  height: 50px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  line-height: 50px;
  margin: 10px auto;
  border-radius: 10px;
  cursor: pointer;
}
.menu-item:hover{
  background-color: #e3e5e7;
}
.text{
  margin-left: 10px;
}
.icon{
  margin-right: 10px
}

</style>