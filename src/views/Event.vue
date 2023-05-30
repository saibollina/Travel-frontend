<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "../utils.js";

const router = useRouter();
const eventId = ref(router.currentRoute.value.params.eventId);

onMounted(async () => {

});

</script>

<template>
  <v-container>
     <h1>Event {{ eventId }}</h1>
  </v-container>
</template>

<style scoped>

</style>
