<template>
  <div class="H_O_I">
    <div style="margin: 25px 0">
<!--   价格   -->
      <div class="price-container">
        <div class="price">
          <span class="total">980</span>
          <span class="unit">万</span>
        </div>
        <div class="unitPrice">
          <span class="unitPrice_total">109583</span>
          <span>元/平米</span>
        </div>
      </div>

    </div>
    <el-divider />
    <div class="houseInfo">
      <div class="room">
        房型
      </div>
      <div class="type">
        朝向
      </div>
      <div class="area">
        面积
      </div>
    </div>
    <el-divider />
    <div>
      <el-descriptions :column="1" size="large">
        <el-descriptions-item label="小区名称" width="56" align="left" label-class-name="label" class-name="info">科学园南里五区</el-descriptions-item>
        <el-descriptions-item label="所在区域" width="56" align="left" label-class-name="label" class-name="info">市名+县区名+小区</el-descriptions-item>
        <el-descriptions-item label="看房时间" width="56" align="left" label-class-name="label" class-name="info">提前预约随时可看</el-descriptions-item>
        <el-descriptions-item label="房屋编号" width="56" align="left" label-class-name="label" class-name="info">1s34sl3r32we</el-descriptions-item>
      </el-descriptions>
    </div>
    <div style="text-align: center">
      <el-button size="large" type="primary">预约看房</el-button>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.H_O_I{
  width: 420px;
}
.price-container{
  display: flex;
}
.total{
  font-size: 46px;
  line-height: 46px;
  color: #e4393c;
  font-weight: bold;
  letter-spacing: -1px;
  max-width: 180px;
  overflow: hidden;
}
.unit{
  font-size: 16px;
  color: #e4393c;
  margin-top: 9px;
}
.unitPrice{
  margin-left: 15px;
}
.unitPrice_total{
  font-weight: bold;
  color: #394043;
  white-space: nowrap;
}
.houseInfo{
  display: flex;
  width: 100%;
}
.room,.type,.area{
  width: 33.3%;
}
/deep/ .label{
  color: #aeb0b1;
  font-size: 14px;
}
/deep/ .info{
  color: #333333;
  font-size: 14px;
}

</style>