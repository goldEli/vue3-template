<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import Vditor from "vditor";
import "vditor/dist/index.css";

const vditor = ref<Vditor | null>(null);

onMounted(() => {
  vditor.value = new Vditor("vditor", {
    after: () => {
      // vditor.value is a instance of Vditor now and thus can be safely used here
      vditor.value!.setValue(
        "Vue Composition API + Vditor + TypeScript Minimal Example"
      );
    },
  });
});

const loading = ref(false);
const userName = ref("");

const submit = async (event: any) => {
  loading.value = true;
  await event;
  loading.value = false;

  const editorValue = vditor.value!.getValue();
  const formData = {
    userName: userName.value,
  };

  const data = JSON.stringify({ editorValue, formData });

  // api
  fetch("https://example.com/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      // 处理返回的数据
      console.log(data);
    })
    .catch((error) => {
      // 处理请求错误
      console.error(error);
    });
};

const route = useRoute();
const id = route.params.id;
const htmlStr = ref(
  `
  <p style="color:red;">
    123123213
  </p>

`
);
</script>
<template>
  <div class="container">
    <div v-html="htmlStr"></div>
    <div>获取的id为: {{ id }}</div>
    <v-sheet max-width="300" class="mx-auto">
      <v-form validate-on="submit lazy" @submit.prevent="submit">
        <v-text-field v-model="userName" label="User name"></v-text-field>
      </v-form>
    </v-sheet>
    <div id="vditor" />
    <v-btn :loading="loading" @click="submit" block class="mt-2">提交</v-btn>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
