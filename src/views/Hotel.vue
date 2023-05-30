<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const hotelId = ref(router.currentRoute.value.params.hotelId);

onMounted(async () => {

});

</script>

<template>
  <v-container>
     <h1>Hotel {{ hotelId }}</h1>
  </v-container>
</template>

<style scoped>

</style>
