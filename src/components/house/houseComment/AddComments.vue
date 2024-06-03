<template>
  <div class="reply-box">
    <div class="noLogin" v-show="false">
      你还没有登录，请先登录
    </div>
    <div v-show="true" class="box-normal">
      <div >
        <el-form :inline="true">
          <el-form-item>
            <el-input
                :rows="4"
                placeholder="请输入评论"
                class="input"
                size="large"
            />
          </el-form-item>
          <el-form-item>
              <el-button size="large" type="primary">
                发表评论
              </el-button>
          </el-form-item>

        </el-form>

      </div>

    </div>

  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.input{
  width: 800px;
}
.noLogin{
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
}
.reply-box{
  display: flex;
  justify-content: center;
}
.box-normal{
  margin:  20px 0;
}

</style>