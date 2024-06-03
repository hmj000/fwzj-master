<template>
  <div class="housing_overview">
    <div style="display:flex;justify-content: space-between;width: 70%">
      <PicturePresentation/>
      <HouseOverviewInformation/>
    </div>

  </div>
<!--
  1. 图片展示
  2. 概括信息
-->

</template>

<script setup lang="ts">

import PicturePresentation from "@/components/house/housingOverview/PicturePresentation.vue";
import HouseOverviewInformation from "@/components/house/housingOverview/HouseOverviewInformation.vue";
</script>

<style scoped>
.housing_overview{
  display: flex;
  justify-content: center;
}

</style>