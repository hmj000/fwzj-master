<template>

    <div style="display: flex;justify-content: center">
      <el-form ref="formRef" :model="form" size="large" :rules="rules">
        <el-form-item label="房屋户型">
          <el-form-item prop="room">
            <el-input class="houseTypeInput" maxlength="1" v-model="form.room" placeholder="室">
              <template #append>
                室
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="livingRoom">
            <el-input class="houseTypeInput" maxlength="1" v-model="form.livingRoom" placeholder="厅">
              <template #append>
                厅
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="kitchen">
            <el-input class="houseTypeInput" maxlength="1" v-model="form.kitchen" placeholder="厨">
              <template #append>
                厨
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="restRoom">
            <el-input class="houseTypeInput" maxlength="1" v-model="form.restRoom" placeholder="卫">
              <template #append>
                卫
              </template>
            </el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item label="所在楼层" prop="floor">
          <el-input placeholder="请输入所在楼层" class="input" v-model="form.floor">
            <template #suffix>
              楼
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="户型结构" prop="houseTypeStructure">
          <el-select placeholder="请选择" class="input" v-model="form.houseTypeStructure">
            <el-option
                v-for="item in houseTypeStructure"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="套内面积" prop="insideSpace">
          <el-input  placeholder="请输入套内面积" class="input" v-model="form.insideSpace">
            <template #append>
              平方米
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="建筑类型" prop="buildingType">
          <el-select placeholder="请选择" class="input" v-model="form.buildingType">
            <el-option
                v-for="item in buildingType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="房屋朝向" prop="orientation">
          <el-select placeholder="请选择" class="input" v-model="form.orientation">
            <el-option
                v-for="item in orientation"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="建筑结构" prop="architecturalStructure">
          <el-select placeholder="请选择" class="input" v-model="form.architecturalStructure">
            <el-option
                v-for="item in architecturalStructure"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="装修情况" prop="decorateSituation">
          <el-select placeholder="请选择" class="input" v-model="form.decorateSituation">
            <el-option
                v-for="item in decorateSituation"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="梯户比例">
          <el-form-item prop="stairs">
            <el-input class="houseTypeInput" placeholder="梯" v-model="form.stairs">
              <template #append>
                梯
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="portal">
            <el-input class="houseTypeInput" placeholder="户" v-model="form.portal">
              <template #append>
                户
              </template>
            </el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item label="供暖方式" prop="heatingMethod">
          <el-select placeholder="请选择" class="input" v-model="form.heatingMethod">
            <el-option
                v-for="item in heatingMethod"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="配备电梯" prop="elevator">
          <el-select placeholder="请选择" class="input" v-model="form.elevator">
            <el-option value="配备电梯">
              配备电梯
            </el-option>
            <el-option value="暂无数据">
              暂无数据
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <div>
            <el-button @click="last">上一步</el-button>
          </div>
          <div style="margin-left: 480px">
            <el-button type="primary" @click="nextStep(formRef)">下一步</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
</template>

<script setup lang="ts">

import {FormInstance, FormRules} from "element-plus";
import {reactive, ref} from "vue";

const props  =defineProps({
  next:Function,
  last:Function,
  informationForm:Object
})

const form = reactive(props.informationForm)

const emit = defineEmits(['informationForm'])

const formRef = ref<FormInstance>()


const validateNumber = (rule:any, value:any, callback:any)=>{
  const str = /^[0-9]+(\.[0-9]{1,5})?$/
  if (!str.test(value)){
    callback(new Error("请输入数字"))
  }
  callback()
}

const nextStep = (formRef:FormInstance)=>{
  if (!formRef) return
  formRef.validate((valid:any) => {
    if (valid) {
      emit("informationForm",form)
      props.next()
    } else {
      return false
    }
  })
}


const rules:FormRules = {
  room: [{ validator:validateNumber,trigger:'blur'}],
  livingRoom: [{ validator:validateNumber,trigger:'blur'}],
  kitchen: [{ validator:validateNumber,trigger:'blur'}],
  restRoom: [{ validator:validateNumber,trigger:'blur'}],
  floor: [{ required:true,message:'请输入所在楼层',trigger: 'blur'}],
  insideSpace:[{ validator:validateNumber,trigger:'blur'}],
  stairs:[{ validator:validateNumber,trigger:'blur'}],
  portal:[{ validator:validateNumber,trigger:'blur'}],
  houseTypeStructure: [{ required:true,message:'请选择户型结构',trigger: 'blur'}],
  buildingType: [{ required:true,message:'请选择建筑类型',trigger: 'blur'}],
  orientation: [{ required:true,message:'请选择房屋朝向',trigger: 'blur'}],
  architecturalStructure: [{ required:true,message:'请选择建筑结构',trigger: 'blur'}],
  decorateSituation: [{ required:true,message:'请选择装修情况',trigger: 'blur'}],
  heatingMethod: [{ required:true,message:'请选择供暖方式',trigger: 'blur'}],
  elevator: [{ required:true,message:'请选择是否配备电梯',trigger: 'blur'}],
}

const houseTypeStructure =[
  {value:'平层',label:'平层'},
  {value:'跃层',label:'跃层'},
  {value:'错层',label:'错层'},
  {value:'复式',label:'复式'},
]

const buildingType = [
  {value:'低层',label:''},
  {value:'多层',label:''},
  {value:'中高层',label:''},
  {value:'高层',label:''},
  {value:'超高层',label:''}
]

const orientation = [
  {value:'南',label:'南'},
  {value:'北',label:'北'},
  {value:'东',label:'东'},
  {value:'西',label:'西'},
  {value:'东南',label:'东南'},
  {value:'东北',label:'东北'},
  {value:'西南',label:'西南'},
  {value:'西北',label:'西北'}
]

const architecturalStructure = [
  {value:'混凝土结构',label:''},
  {value:'砌体结构',label:''},
  {value:'钢结构',label:''},
  {value:'木结构',label:''}
]

const decorateSituation = [
  {value:'精装',label:'精装'},
  {value:'简装',label:'简装'},
  {value:'毛坯',label:'毛坯'}
]

const heatingMethod = [
  {value:'集中供暖',label:''},
  {value:'地板辐射供暖',label:''},
  {value:'燃气供暖',label:''},
  {value:'暂无供暖',label:''}
]

</script>

<style scoped>
  .houseTypeInput{
    width: 100px;
    margin-right: 40px;
  }
  .input{
    width: 300px;
  }
</style>