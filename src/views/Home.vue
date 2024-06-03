<template>
<el-container>
    <el-header height="64" class="header">
      <el-affix :offset="0">
        <Header :openLogin="openLogin" :reload="reload" />
      </el-affix>
    </el-header>
  <el-main class="el-main">
    <router-view v-if="isRouterAlive" />
  </el-main>
</el-container>
  <Login v-if="showLogin" :closeLogin="closeLogin" :showLogin="showLogin" @close="showLogin= false" />
</template>

<script setup lang="ts">
import Header from "@/components/home/Header.vue";
import Login from "@/views/Login.vue";
import { onMounted, ref,nextTick,provide} from "vue";
import {UserStore} from "@/stores/userStore";
import {onBeforeRouteLeave} from "vue-router";
const showLogin = ref(false)

const userStore = UserStore()
const isRouterAlive = ref(true);

const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
}

const openLogin = ()=>{
  showLogin.value = true
}

const closeLogin = ()=>{
  showLogin.value = false
}

onBeforeRouteLeave((to,from,next)=>{
  console.log("to",to)
  console.log("next",next)
  console.log("form",from)
})

</script>

<style scoped>
.header{
  height: 64px;
  box-shadow: inset 0 -1px 0 #e3e5e7!important;
}
header,.el-main{
  padding: 0;
}

</style>