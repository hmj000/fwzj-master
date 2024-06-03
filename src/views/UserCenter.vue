<template>
  <div class="userCenter">
      <div class="menu">
<!--   菜单     -->
        <span class="title">个人中心</span>
        <el-menu
            background-color="#fafafa"
            style="border-bottom: 1px solid #e1e2e5;"
            router
        >
          <el-menu-item index="/userCenter/home">
            我的信息
          </el-menu-item>
          <el-menu-item index="/userCenter/avatar">
            我的头像
          </el-menu-item>
          <el-menu-item index="/userCenter/collect">
            我的收藏
          </el-menu-item>
          <el-menu-item index="/userCenter/release">
            我的发布
          </el-menu-item>
          <el-menu-item index="/userCenter/history">
            我的历史
          </el-menu-item>
        </el-menu>

      </div>
      <div class="right">
        <router-view />
      </div>

  </div>

</template>

<script setup lang="ts">
</script>

<style scoped>
.menu{
  float: left;
  width: 150px;
  height: 100%;
  overflow: hidden;
}
.userCenter{
  width: 980px;
  margin: 30px auto;
  background: #fafafa;
  box-shadow: 0 2px 4px rgba(0,0,0,.14);
  border-radius: 4px;
  border: 1px solid #e1e2e5;
  overflow: hidden;
}
.title{
  display: block;
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #99a2aa;
  cursor: default;
  border-bottom: 1px solid rgb(225, 226, 229);
}
.right{
  float: left;
  width: 829px;
  border-left: 1px solid #ddd;
  background: #fff;
}

</style>