<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const placeId = ref(router.currentRoute.value.params.placeId);

onMounted(async () => {

});

</script>

<template>
  <v-container>
     <h1>Place {{ placeId }}</h1> 
  </v-container>
</template>

<style scoped>

</style>
