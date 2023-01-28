<script setup>
import CartItems from "../components/CartItems.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const countItems = computed(() => {
  return store.getters.cartLength;
});
</script>
<template>
  <div class="container mx-auto px-4 py-16">
    <button
      type="button"
      class="font-medium text-green-600 hover:text-green-500"
      @click="$router.push({ name: 'home' })"
    >
      Go back
    </button>
    <p class="mt-10 text-center text-5xl">Cart ({{ countItems }})</p>
    <cart-items />
  </div>
</template>
