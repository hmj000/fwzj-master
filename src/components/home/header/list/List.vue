<template>
  <el-link @click="jump(item)" class="link">
    <span>
      {{item.name}}
    </span>
  </el-link>
</template>

<script setup lang="ts">
  import router from "@/router";
  import {inject} from "vue";

  const props:any = defineProps({
  item:{}
})
  const reload = inject["reload"]
  const jump = (item)=>{
    if (item.link != '/'){
      console.log(item.type)
      router.push({
        path:"/search",
        query:{
          type:item.type
        }
      })
    }else {
      router.push(item.link)
    }

  }

</script>

<style scoped>

@keyframes jump {
  0% {
    transform: translateY(0)
  }

  50% {
    transform: translateY(-3px)
  }

  to {
    transform: translateY(0)
  }
}
.link{
  display: inline-block;
  margin-right:20px;
  height: 64px;
  line-height: 64px;
}
.link:hover{
  animation: jump .3s;
}
a{
  color: #18191c;
}


</style>