<template>
  <CardList v-for="item in data" :linkData="item"/>
</template>

<script setup lang="ts">
import CardList from "@/components/home/main/CardList.vue";
const data = [
  {title:'二手房',title_msg:'为你而选',msg:'好房源那么多，我们为你精选'},
  {title:'新房',title_msg:'新起航',msg:'真实信息准确同步，楼盘动态一手掌握'},
  {title:'租房',title_msg:'为您推荐',msg:'高品质租房体验'},
]
</script>


<style scoped>

</style>