<script setup lang="ts">
import { RouterView } from 'vue-router'
import {nextTick, provide, ref} from "vue";

const isRouterAlive = ref(true);


</script>

<template>
<RouterView v-if="isRouterAlive"></RouterView>

</template>

<style scoped>

</style>
