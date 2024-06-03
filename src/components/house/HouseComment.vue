<template>
<div class="comment">
  <div style="width: 70%">
    <div>
      <span>发表评论</span>
      <AddComments/>
    </div>
    <el-divider />
    <div>
      <div v-if="false">
        <div v-for="o in 4" class="reply-list">
          <CommentsList/>
          <el-divider />
        </div>
      </div>
      <div v-else class="error">
        <span>
          暂时没有评论哦
        </span>
      </div>


    </div>
  </div>
</div>
</template>

<script setup lang="ts">

import AddComments from "@/components/house/houseComment/AddComments.vue";
import CommentsList from "@/components/house/houseComment/CommentsList.vue";
</script>

<style scoped>
.comment{
  display: flex;
  justify-content: center;
}
.error{
  text-align: center;
  font-size: 40px;
  margin:  60px 0;
}

</style>