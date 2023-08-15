<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute();
const id = route.params.id;
</script>
<template>
  <div class="container">
    <div>获取的id为: {{ id }}</div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
