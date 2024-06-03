<template>
  <div class="step">
    <el-steps :active="active" finish-status="success" :space="200" align-center style="width: 100%;">
      <el-step title="房屋基本信息">
      </el-step>
      <el-step title="房屋详细信息" />
      <el-step title="房屋图片" />
    </el-steps>
  </div>
  <Address v-show="active === 0" :next="next" :addressForm="addressForm" />
  <DetailedInformation v-show="active === 1" :next="next" :last="last" :informationForm="informationForm" />
  <UploadPictures v-show="active === 2" :accomplish="accomplish" :last="last" />

</template>

<script setup lang="ts">

import Address from "@/components/addHouse/Address.vue";
import {reactive, ref} from "vue";
import DetailedInformation from "@/components/addHouse/DetailedInformation.vue";
import UploadPictures from "@/components/addHouse/UploadPictures.vue";
import {UploadUserFile} from "element-plus";
import axios from "axios";
import {UserStore} from "@/stores/userStore";
import {CityStore} from "@/stores/cityStore";

const active = ref(0)
const userStore = UserStore()
const cityStore = CityStore()

const next = () => {
  if (active.value++ > 2) active.value = 0
}

const last = () =>{
  if (active.value-- <0) active.value = 0
}


const addressForm = reactive({
  communityName:'',
  tel:'',
  towerNumber:'',
  unitNumber:'',
  houseNumber:'',
  area:'',
  unitPrice:'',
  price:'',
  typeOfSale:'',
  rent:''
})

const informationForm = reactive({
  room:'',
  livingRoom:'',
  kitchen:'',
  restRoom:'',
  floor:'',
  houseTypeStructure:'',
  insideSpace:'',
  buildingType:'',
  orientation:'',
  architecturalStructure:'',
  decorateSituation:'',
  stairs:'',
  portal:'',
  heatingMethod:'',
  elevator:'',
})

const fileArr = ref<UploadUserFile[]>([])

const accomplish = async (files:any[])=>{
  console.log(files)
  fileArr.value = files
  active.value++
  // 发送请求
  const houseUrl = reactive<String[]>([])
  files.forEach((item)=>{
    houseUrl.push(item.response.data)
  })

  await axios({
    method:'post',
    url:'/house/addHouse',
    data:{
      province:cityStore.address[0],
      city:cityStore.address[1],
      county:cityStore.address[2],
      communityName:addressForm.communityName,
      tel:addressForm.tel,
      towerNumber:addressForm.towerNumber,
      unitNumber:addressForm.unitNumber,
      houseNumber:addressForm.houseNumber,
      area:addressForm.area,
      unitPrice:addressForm.unitPrice,
      price:addressForm.price,
      typeOfSale:addressForm.typeOfSale,
      rent:addressForm.rent,
      room:informationForm.room,
      livingRoom:informationForm.livingRoom,
      kitchen:informationForm.kitchen,
      restRoom:informationForm.restRoom,
      floor:informationForm.floor,
      houseTypeStructure:informationForm.houseTypeStructure,
      insideSpace:informationForm.insideSpace,
      buildingType:informationForm.buildingType,
      orientation:informationForm.orientation,
      architecturalStructure:informationForm.architecturalStructure,
      decorateSituation:informationForm.decorateSituation,
      stairs:informationForm.stairs,
      portal:informationForm.portal,
      heatingMethod:informationForm.heatingMethod,
      elevator:informationForm.elevator,
      userId:userStore.id
    }
  })





  // 返回首页
  // router.push("/index")
}


</script>

<style scoped>
.step{
  width: 700px;
  margin: 50px auto;
}
</style>