<template>
<!--
  1. 小区所在城市
  2. 小区名称
  3. 房屋地址
  4. 联系电话
-->
  <div class="address">
    <div style="width: 600px;">
      <el-form ref="formRef" :model="form" label-width="150px" :rules="rules" size="large">
        <el-form-item label="小区所在城市">
          <AddressSelection/>
        </el-form-item>
        <el-form-item label="小区名称" prop="communityName">
          <el-input size="large" placeholder="请输入小区名称" v-model="form.communityName" class="input" />
        </el-form-item>
        <el-form-item label="房屋地址">
          <el-form-item prop="towerNumber">
            <el-input  v-model="form.towerNumber" placeholder="楼栋号"  size="large" class="house-address"/>
          </el-form-item>
          <el-form-item prop="unitNumber">
            <el-input  v-model="form.unitNumber" placeholder="单元号" size="large" class="house-address"/>
          </el-form-item>
          <el-form-item prop="houseNumber">
            <el-input  v-model="form.houseNumber" placeholder="门牌号" size="large" class="house-address"/>
          </el-form-item>
        </el-form-item>
        <el-form-item label="手机号码" prop="tel">
          <el-input v-model="form.tel" maxlength="11" placeholder="请输入手机号" class="input" size="large" />
        </el-form-item>
        <el-form-item label="房屋面积" prop="area">
          <el-input v-model="form.area"  class="input" placeholder="请输入房屋面积">
            <template #suffix>
              平方米
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="出售类型" prop="typeOfSale">
          <el-select placeholder="请选择" v-model="form.typeOfSale" class="input">
            <el-option
                v-for="item in typeOfSale"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="房屋单价" prop="unitPrice" v-if="form.typeOfSale !=='出租' ">
          <el-input v-model="form.unitPrice"   class="input" placeholder="请输入房屋单价">
            <template #suffix >
              元
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="房屋总价" prop="price" v-if="form.typeOfSale !== '出租'">
          <el-input v-model="form.price" class="input"  placeholder="请输入房屋总价">
            <template #suffix>
              万元
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="rent" label="租金" v-if="form.typeOfSale === '出租'">
          <el-input class="input" v-model="form.rent">
            <template #suffix>
              元/每月
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <div style="margin-left: 300px">
              <el-button type="primary" size="large" @click="changeValue(formRef)">下一步</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import AddressSelection from "@/components/home/header/AddressSelection.vue";
import {FormInstance, FormRules} from "element-plus";

const props = defineProps({
  next:Function,
  addressForm:Object
})


const form = reactive(props.addressForm)

watch(
    ()=>form.unitPrice,
    ()=>{
      if (form.area!==0){
        form.price = (form.area * form.unitPrice)/10000
      }
    }
)

watch(
    ()=>form.area,
    ()=>{
      if (form.unitPrice!==0){
        form.price = (form.area * form.unitPrice)/10000
      }
    }
)

const emit = defineEmits(['addressForm'])

const changeValue = (formRef:FormInstance)=>{

  if (!formRef) return
  formRef.validate((valid:any) => {
    if (valid) {
      emit("addressForm",form)
      props.next()
    } else {
      return false
    }
  })
}

const formRef = ref<FormInstance>()

const validatePhone = (rule:any, value:any, callback:any) => {
  if (value === '') {
    callback(new Error('请输入电话号码'))
  }
  if (value.length !== 11) {
    callback(new Error('请输入正确电话号码'))
  }
  if (value.length !== 11) {
    callback(new Error('请输入正确电话号码'))
  }
  // 验证电话号码手机号码，包含至今所有号段? ?
  const ab = /^[1][3,4,5,7,8,9][0-9]{9}$/
  if (!ab.test(value)) {
    callback(new Error('请输入正确电话号码'))
  }
  callback()
}

const validateUnitPrice = (rule:any, value:any, callback:any)=>{
  const str = /^[0-9]+(\.[0-9]{1,5})?$/
  if (!str.test(value)){
    callback(new Error("请输入数字"))
  }
  callback()
}

const rules:FormRules = {
  communityName:[{required:true,message:'请输入小区名称',trigger: 'blur'}],
  tel:[{required:true,message:'请输入电话号码',trigger: 'blur'},  { validator: validatePhone, trigger: 'blur' }],
  towerNumber:[{required:true,message:'请输入楼栋号',trigger: 'blur'}],
  unitNumber:[{required:true,message:'请输入单元号',trigger: 'blur'}],
  houseNumber:[{required:true,message:'请输入门牌号',trigger: 'blur'}],
  area:[ {required:true,message:'请输入房屋面积',trigger: 'blur'}, { validator: validateUnitPrice,trigger: 'blur' }],
  unitPrice:[{required:true,message:'请输入房屋单价',trigger: 'blur'}, { validator: validateUnitPrice,trigger: 'blur' }],
  price:[{required:true,message:'请输入房屋总价',trigger: 'blur'}, { validator: validateUnitPrice,trigger: 'blur' }],
  typeOfSale:[{required:true,message:'请选择出售类型',trigger: 'blur'}],
  rent: [{required:true,message:'请输入租金',trigger: 'blur'}, { validator: validateUnitPrice,trigger: 'blur' }]
}

const  typeOfSale = [
  {value:'出租',label:'出租'},
  {value:'二手房',label:'二手房'},
  {value:'新房',label:'新房'},
  {value:'商铺',label:'商铺'}
]

</script>

<style scoped>
.house-address{
  width: 100px;
  margin-right: 30px;
}
.input{
  width: 300px;
}
.address{
  display: flex;
  justify-content: center;
}

</style>