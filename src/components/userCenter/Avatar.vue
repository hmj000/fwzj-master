<template>
  <div style="text-align: center">
    <div class="title">
      <span class="title_icon"></span>
      <span class="title_text">我的头像</span>
    </div>
    <div class="container">
      <div class="upload">
        <el-upload
            v-model:file-list="fileList"
            class="avatar-uploader "
            action="http://localhost:8080/upload/houseImg"
            :show-file-list="false"
            accept="image/jpg,image/png,image/jpeg"
            :on-success="handleAvatarSuccess"
            :disabled="fileList.length>0"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </div>
      <div class="current">
        <div class="current_avatar">
          <div>
            <el-avatar :size="100" :src="userStore.avatar"/>
            <div>
              当前头像
            </div>
          </div>
        </div>
      </div>

    </div>
    <div style="height: 90px">
      <el-button size="large" type="primary" :disabled="fileList.length<=0" @click="update">
        更新
      </el-button>
    </div>

  </div>
</template>

<script setup lang="ts">


import {UploadProps, UploadUserFile} from "element-plus";
import {ref} from "vue";
import {Plus} from "@element-plus/icons-vue";
import {UserStore} from "@/stores/userStore";

const userStore = UserStore()

const imageUrl = ref('')
const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}
const fileList = ref<UploadUserFile[]>([])

const update = ()=>{

}

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
  /*min-height: 300px;*/
  display: inline-block;
  padding: 80px 20px 56px;
}
.upload{
  float: left;
  border: 2px dashed var(--el-border-color);
  height: 180px;
  width: 180px;
  border-radius: 5px;
}
.upload:hover{
  border-color: var(--el-color-primary);
}
.current{
  float: left;
  width: 180px;
  height: 180px;
  margin-left: 20px;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.current_avatar{
  width: 180px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>