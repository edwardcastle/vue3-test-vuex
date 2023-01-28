<script setup>
import LoadingSpinner from "./components/LoadingSpinner.vue";
import { RouterView } from "vue-router";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const loading = computed(() => {
  return store.state.loading;
});

onMounted(async () => {
  await store.dispatch("checkStatus");
});
</script>

<template>
  <RouterView />
  <loading-spinner v-if="loading" />
</template>

<style scoped></style>
