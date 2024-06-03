<template>
  <div>
    <div class="title">
      <span class="title_icon"></span>
      <span class="title_text">我的收藏</span>
    </div>
    <div class="container">
      <div class="wrap">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top" v-for="o in 3">
            <el-card class="card" shadow="hover">
              <div class="info">
                <div class="info_img">
                  <el-image style="width: 160px; height: 100px"/>
                </div>
                <div class="info_text">
                  <div class="info_title">
                    小区名
                  </div>
                  <div>
                    户型
                  </div>
                </div>
              </div>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.title{
  height: 50px;
  padding-left: 30px;
  border-bottom: 1px solid rgb(221, 221, 221);
}
.title_text{
  float: left;
  margin: 15px 0 0 5px;
  color: rgb(0, 161, 214);
  font-size: 14px;
  cursor: default;
}
.title_icon{
  float: left;
  width: 4px;
  height: 16px;
  margin-top: 18px;
  background-color: rgb(0, 161, 214);
  border-radius: 4px;
}
.container{
  min-height: 300px;
}
.wrap{
  margin-top: 50px;
}
.card{
  width: 500px;
  cursor: pointer;
}
.info{
  display: flex;
}
.info_text{
  margin-left: 30px;
}
.info_title{
  color: #222;
  font-weight: 700;
}

</style>