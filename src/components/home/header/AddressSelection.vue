<template>
    <el-cascader
        :options="cityData"
        v-model="selectedOptions"
        @change="addressChange"
        @click.native="select"
        filterable
        placeholder="请选择城市"
        ref="select"
    >
    </el-cascader>

</template>

<script setup lang="ts">
import cityData from "../../../../public/city.json"
import {onMounted, reactive, ref,inject} from "vue";
import {CityStore} from "@/stores/cityStore";

const cityStore = CityStore()
const selectedOptions= reactive<String[]>([])
const select = ref()
const mainReload = inject<Function>("mainReload")

const props = defineProps({
  reload:Function
})


onMounted(()=>{
  selectedOptions.push(cityStore.province)
  selectedOptions.push(cityStore.city)
  selectedOptions.push(cityStore.county)
})

const addressChange = (CascaderValue:string[])=>{
  cityStore.province = CascaderValue[0]
  cityStore.city = CascaderValue[1]
  cityStore.county = CascaderValue[2]
  cityStore.address = select._value.getCheckedNodes()[0].pathLabels
  console.log(cityStore.address)
}

</script>

<style scoped>
</style>