<template>
  <div class="search" @mouseover="over" @mouseleave="leave">
    <div class="input" >
        <el-input size="large" @focus="focus"  clearable v-model="input">
          <template #prepend>
            <el-select size="large" style="width: 115px;" v-model="select">
              <el-option label="地址" value="0" />
              <el-option label="出售类型" value="1" />
              <el-option label="户型结构" value="2" />
              <el-option label="房屋朝向" value="3" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" type="primary" id="button" @click="searchClick" />
          </template>
        </el-input>
    </div>
    <div class="history" v-show="showHistory">
      <div class="history_header" id="history_header">
        <div class="title" id="title">
          搜索历史
        </div>
        <div class="clear" @click="clear">
          清空
        </div>
      </div>
      <div class="history_body" id="history_body">
        <el-tag
            v-for="(tag,index) in tags.tags"
            class="tag"
            :key="index"
            closable
            @click="click"
            @close="tagsClose(index)"
        >
          {{tag.length>10?tag.substring(0,9)+'...':tag}}
        </el-tag>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import {computed, onMounted, reactive, ref} from "vue";
import {Search} from "@element-plus/icons-vue";
import {HistoryStore} from "@/stores/history"
import router from "@/router";

  const historyStore = HistoryStore()

const select = ref("0")

  const showHistory  = computed(()=>{
    let flag = false
    if (history.value){
      if (tags.tags.length === 0){
        return flag
      }else {
        return !flag
      }
    }else {
      return flag
    }
})

  onMounted(()=>{
    loadTags()
  })

  const loadTags = ()=>{
    tags.tags = historyStore.history
  }

  const focus = ()=>{
    console.log(123)
    history.value = true
  }

  const searchClick = ()=>{
    console.log("search")
    if (input.value !== null && input.value.trim() !==""){
      historyStore.unshift(input.value)
      router.push({
        path:'/search',
        query:{
          value:input.value,
          select:select.value
        }
      })




    }
  }

  const clear = ()=>{
    historyStore.clear()
    loadTags()
  }

  const click = ()=>{
    console.log(123)
  }


  const leave = ()=>{
    history.value = false
  }

  const tagsClose = (index)=>{
    historyStore.splice(index)
  }

  const over = ()=>{
    history.value = true
  }

  const history = ref(false)

  const input = ref()

  const tags = reactive({tags:[]})

</script>

<style scoped>
  .search{
    width: 500px;
  }
  .history{
    width: 500px;
    position: absolute;
    background-color: #fff;
    padding-top: 13px;
    border-radius: 0 0 5px 5px;
    border: 1px solid #e3e5e7;
  }
  .title{
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
  .history_header{
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .clear{
    font-size: 12px;
    line-height: 15px;
    height: 15px;
    color: #9499A0;
    cursor: pointer;
  }
  .clear:hover{
    color: #00AEEC;
  }
  .history_body{
    padding: 13px 16px;
  }
  .tag{
    margin: 7px 10px 8px;
    cursor: pointer;
  }
</style>