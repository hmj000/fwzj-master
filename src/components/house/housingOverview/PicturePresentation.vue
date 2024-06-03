<template>
<div>
  <el-carousel height="400px" style="width: 710px" interval="2000">
    <el-carousel-item v-for="item in src" :key="item">
      <img :src="item.url" alt="">
    </el-carousel-item>
  </el-carousel>
</div>


</template>

<script setup lang="ts">
const src = [
  {url:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'},
  {url:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'},
  {url:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'},
  {url:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'},
  {url:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'}
]

</script>

<style scoped>
  img{
    width: 710px;
    height: 400px;
    object-fit: cover;
  }

</style>