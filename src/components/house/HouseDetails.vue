<template>
<div class="houseDetails">
  <div style="width: 70%">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="基本属性" name="1">
        <div>
          <el-descriptions :column="2">
            <el-descriptions-item label="房屋户型" align="left" width="150px">3室1厅1厨一卫</el-descriptions-item>
            <el-descriptions-item label="所在楼层" align="left" width="150px">底层</el-descriptions-item>
            <el-descriptions-item label="建筑面积" align="left" width="150px">89.43平方米</el-descriptions-item>
            <el-descriptions-item label="户型结构" align="left" width="150px">平层</el-descriptions-item>
            <el-descriptions-item label="套内面积" align="left" width="150px">暂无数据</el-descriptions-item>
            <el-descriptions-item label="建筑类型" align="left" width="150px">板楼</el-descriptions-item>
            <el-descriptions-item label="房屋朝向" align="left" width="150px">南 北</el-descriptions-item>
            <el-descriptions-item label="建筑结构" align="left" width="150px">框架结构</el-descriptions-item>
            <el-descriptions-item label="装修情况" align="left" width="150px">简装</el-descriptions-item>
            <el-descriptions-item label="梯户比例" align="left" width="150px">一梯两户</el-descriptions-item>
            <el-descriptions-item label="供暖方式" align="left" width="150px">集中供暖</el-descriptions-item>
            <el-descriptions-item label="配备电梯" align="left" width="150px">暂无数据</el-descriptions-item>
          </el-descriptions>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const activeNames = ref('1')

</script>

<style scoped>
.houseDetails{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>