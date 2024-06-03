<template>

  <div class="mina_cardList">
    <div style="flex-direction: column;min-width: 1500px;">

      <div class="cardList_title">
        <div>
          <span class="text_title">{{ linkData.title }}</span>
          <span class="text">{{linkData.title_msg}}</span>
        </div>
      </div>
      <div class="cardList_msg">
        <div class="msg">
          {{linkData.msg}}
        </div>
        <div class="cardList_link">
          <el-link href="#" type="primary" :disabled="data.length === 0">
            <span>
              更多{{address[1]}}{{linkData.title}}
            </span>
          </el-link>
        </div>
      </div>
      <div v-if="data.length === 0" class="error">
        <span>该地区暂无{{linkData.title}}房源</span>
      </div>
      <div v-else class="cardList">
        <div v-for="item in data" class="card">
          <Card :item="item" />
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

// 1. 加载时请求数据，最多4条数据

import Card from "@/components/home/main/cardList/Card.vue";
import {CityStore} from "@/stores/cityStore";
import {reactive, ref, watch} from "vue";
import {storeToRefs} from "pinia";

const  props = defineProps({
  linkData:{}
})
const cityStore = CityStore()
const {address} = storeToRefs(cityStore)

const data = reactive([
  {id:'123',title:'行政中心商圈',region:'广信区',communityName:'公园道1号',houseType:'4室2厅',area:'146.64平米',price:'148万',imageUrl:''},
  {id:'123',title:'行政中心商圈',region:'广信区',communityName:'公园道1号',houseType:'4室2厅',area:'146.64平米',price:'148万',imageUrl:''},
  {id:'123',title:'行政中心商圈',region:'广信区',communityName:'公园道1号',houseType:'4室2厅',area:'146.64平米',price:'148万',imageUrl:''},
  {id:'123',title:'行政中心商圈',region:'广信区',communityName:'公园道1号',houseType:'4室2厅',area:'146.64平米',price:'148万',imageUrl:''}
])


watch(address,()=>{

  // 重新加载
})


</script>

<style scoped>
  .mina_cardList{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 500px;
    align-items: center;
    box-shadow: inset 0 -1px 0 #e3e5e7!important;
  }
  .cardList{
    display: flex;
    justify-content: center;
  }
  .cardList_title{
    margin-left: 40px;
    display: flex;
    justify-content: space-between;
    margin-right: 40px;
    margin-bottom: 5px;
  }
  .card{
    margin: 0 20px;
  }
  .text_title{
    font-size: 28px;
    font-weight: 600;
  }
  .text{
    font-size: 28px;
    font-weight: 1;
    padding-left: 10px;
  }
  .cardList_link{
    padding-bottom: 20px;
    margin-right: 40px;
  }
  .error{
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }
  .cardList_msg{
    display: flex;
    justify-content: space-between;
  }
  .msg{
    margin-left: 40px;
    color: #888;
    font-size: 14px;
  }
</style>