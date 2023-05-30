<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const planId = ref(router.currentRoute.value.params.planId);

onMounted(async () => {

});

</script>

<template>
  <v-container>
     <h1>Plan {{ planId }}</h1>
  </v-container>
</template>

<style scoped>

</style>
