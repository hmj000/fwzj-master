<template>

  <el-row class="header">
    <el-col :span="4">
      <AddressSelection :reload="props.reload"/>
    </el-col>
    <el-col :span="5">
      <LinksList/>
    </el-col>
    <el-col :span="9">
      <Search></Search>
    </el-col>
    <el-col :span="5" :offset="1">
      <User :openLogin="openLogin" :loginInfo="loginInfo"></User>
    </el-col>
  </el-row>



</template>

<script setup lang="ts">
import AddressSelection from "@/components/home/header/AddressSelection.vue";
import LinksList from "@/components/home/header/LinksList.vue";
import Search from "@/components/home/header/Search.vue";
import User from "@/components/home/header/User.vue";
import {onBeforeMount, onMounted, ref} from "vue";
import axios from "axios";
import {UserStore} from "@/stores/userStore";

const props = defineProps({
  openLogin:Function,
  reload:Function
})

const userStore = UserStore()



</script>

<style scoped>
.header{
  background-color: #ffffff;
  align-items: center;
  padding: 0 24px;
}
.button{
  margin-left: 30px;
}

</style>