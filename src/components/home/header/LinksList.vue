<template>
  <div class="linkList">
    <List v-for="item in linkList" :item="item"></List>
  </div>

</template>

<script setup lang="ts">
import List from "@/components/home/header/list/List.vue";


const linkList:any = [
  {name:'首页', link:'/',type:''},
  {name:'二手房', link:'/search',type:'二手房'},
  {name:'租房', link:'/search',type:'租房'},
  {name:'新房', link:'/search',type:'新房'},
  {name:'商铺', link:'/search',type:'商铺'}
]
</script>

<style scoped>
  .linkList{
    align-items: center;
    overflow:hidden;
  }
</style>