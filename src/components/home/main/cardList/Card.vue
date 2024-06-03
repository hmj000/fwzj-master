<template>
  <el-card
      class="card"
      shadow="hover"
      :body-style="{padding:'0px'}"
      @click="jump"
  >
    <el-image
        style="width: 265px;height: 205px"
        :src="item.imageUrl"
    />
    <div style="padding: 14px">
      <div class="position">
        <span>{{item.region}}·{{item.title}}</span>
      </div>
      <div class="position">
        <span>{{item.communityName}}</span>
      </div>
      <div class="tips">
        <div >
          <span>{{item.houseType}}·{{item.area}}</span>
        </div>
        <div class="tips-price" >
          <span>{{item.price}}</span>
        </div>
      </div>
    </div>
  </el-card>

</template>

<script setup lang="ts">
import router from "@/router";

const props = defineProps({
  item:{}
})

const jump = ()=>{
  router.push({
    path:'/house',
    query:{
      id:props.item.id
    }
  })
}




</script>

<style scoped>
  .card{
    padding: 0;
    cursor: pointer;
  }
  img{
    width: 265px;
    height: 205px;
  }
  .tips{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    color: #999;
    font-size: 12px;
  }
  .position{
    font-size: 18px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
  }
  .tips-price{
    font-size: 16px;
    color: #FA5741;
  }
</style>