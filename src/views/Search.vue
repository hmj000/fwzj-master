<template>
  <div style="background: #fafafa">
    <div class="container">

      <div class="form">
        <el-form :model="form" :label-width="100" label-position="left">
          <el-form-item label="出售类型">
            <el-checkbox-group v-model="form.typeOfSale">
              <el-checkbox label="二手房" />
              <el-checkbox label="租房" />
              <el-checkbox label="新房" />
              <el-checkbox label="商铺" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="">
          </el-form-item>
        </el-form>
      </div>

      <div class="total">
        共有xxx条数据
      </div>

      <div>
        <div v-for="o in 10" class="card">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div style="display: flex;margin: 30px 30px">
              <div>
                <el-image style="width: 270px;height: 180px"/>
              </div>
              <div class="info">
                <div class="info_title">
                  标题
                </div>
                <div class="info_address">
                  地址
                </div>
                <div class="info_info">
                  房屋户型+房屋面积+房屋朝向+房屋装修
                </div>
                <div class="info_price">
                <span class="price">
                  141
                </span><span class="unit">
                  万
                </span>
                </div>
                <div>
                <span>
                  11480
                </span>
                  <span>
                  元/平米
                </span>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="page">
        <el-pagination background layout="prev, pager, next" :total="1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {onMounted, reactive, watch} from "vue";
import router from "@/router";
import {onBeforeRouteUpdate, useRoute, useRouter} from "vue-router";
const route = useRoute()
const router1 = useRouter()
const data = reactive([])

const init = (type,value="",select="")=>{
  if (type){
    form.typeOfSale = []
    form.typeOfSale.push(type)
  }else {
    console.log(value,select)
  }
  // 发送请求
}

onMounted(()=>{
  init(route.query.type,route.query.value,route.query.select)
})

const form = reactive({
  typeOfSale:[]
})

onBeforeRouteUpdate((to,from,next)=>{
  console.log(to)
  if (to.query.type){
    init(to.query.type)
  } else{
    init(null,to.query.value,to.query.select)
  }
  next()
})

</script>

<style scoped>
.container{
  width: 980px;
  margin: 0 auto;
  background: #ffffff;
}
.info{
  margin-left: 30px;
}
.info_title{
  max-width: 420px;
  text-decoration: none;
  font-size: 22px;
  color: #394043;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
}
.info_address{
  margin-top: 18px;
}
.info_info{
  margin-top: 20px;
}
.info_price{
  margin-top: 20px;
}
.price{
  font-weight: bold;
  font-size: 26px;
  color: #db4c3f;
}
.unit{
  color: #db4c3f;
  font-size: 18px;
}
.card{
  margin: 10px 0;
  cursor: pointer;
}
.page{
  margin: 50px 0;
  display: flex;
  justify-content: center;
}
.form{
  margin-left: 20px;
  padding: 30px;
}
.total{
  line-height: 22px;
  font-weight: bold;
  font-size: 22px;
  color: #394043;
  margin-left: 20px;
  margin-bottom: 30px;
}

</style>