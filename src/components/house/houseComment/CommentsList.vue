<template>
  <div class="reply-item">
    <div class="avatar">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
    </div>
    <div class="content-warp">
      <div class="user-name">
        用户名
      </div>
      <div class="root-reply">
        <div class="reply-content-container">
          <span class="reply-content">评论内容</span>
        </div>
        <div class="reply-time">
          <span>2023-06-07 00:20</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.reply-item{
  display: flex;
}
.avatar{
  width: 48px;
  height: 48px;
}
img{
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
}
.user-name{
  font-weight: 500;
  margin-right: 5px;
  color: #61666d;
  cursor: pointer;
  margin-bottom: 5px;
}
.reply-content-container{
  font-size: 16px;
  line-height: 26px;
  padding: 2px 0;
}
.reply-time{
  margin-top: 2px;
  font-size: 13px;
  color: #9499A0;
}
.content-warp{
  margin-left: 30px;
}

</style>