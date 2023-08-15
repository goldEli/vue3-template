<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { title: "List item", subtitle: "aaaa" },
  { title: "List item", subtitle: "aaaa" },
]);
const id = ref('123123');
</script>
<template>
  <div class="container">
    <v-list lines="one">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :subtitle="item.subtitle"
      ></v-list-item>
    </v-list>
    <router-link :to="`/publish/${id}`">
      <v-btn> 发布 </v-btn>
    </router-link>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
