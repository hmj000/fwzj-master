<template>
<!--
  1. 头部 标题及 关注房源按钮
  2. 房屋概述  图片展示 概括信息展示
  3. 详细信息  基本信息  基本属性 交易属性
  4. 房屋评论
-->
  <div class="house">
    <div>
      <div style="width: 100%;background-color:#f5f5f6;">
        <Header/>
      </div>
      <div style="margin: 100px 0">
        <HousingOverview/>
      </div>
      <div  style="margin: 100px 0">
        <HouseDetails/>
      </div>
      <div  style="margin: 100px 0">
        <HouseComment/>
      </div>

    </div>

  </div>



</template>

<script setup lang="ts">
import Header from "@/components/house/Header.vue";
import HousingOverview from "@/components/house/HousingOverview.vue";
import HouseDetails from "@/components/house/HouseDetails.vue";
import HouseComment from "@/components/house/HouseComment.vue";

</script>

<style scoped>
/*.house{*/
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*}*/

</style>