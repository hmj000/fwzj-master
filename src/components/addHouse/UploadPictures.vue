<template>

  <div style="display: flex;justify-content: center">
    <div>
      <div style="width: 800px">
        <el-form>
          <el-form-item label="上传房屋照片">
            <el-upload
                v-model:file-list="fileList"
                action="http://localhost:8080/upload/houseImg"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                accept="image/jpg,image/png,image/jpeg"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <div style="display: flex;justify-content: space-between;width: 800px">
              <el-form-item>
                <el-button @click="last" size="large">
                  上一步
                </el-button>
              </el-form-item>
              <el-form-item>
                <el-button @click="accomplish(fileList)" size="large" type="primary">
                  完成
                </el-button>
              </el-form-item>
            </div>
          </el-form-item>

        </el-form>
      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import {UploadProps, UploadUserFile} from "element-plus";
import {Plus} from "@element-plus/icons-vue";

const props = defineProps({
  accomplish:Function,
  last:Function
})

const fileList = ref<UploadUserFile[]>([])



const dialogImageUrl = ref('')
const dialogVisible = ref(false)


const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
</script>

<style scoped>

</style>