<script setup>
import { onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import PlaceServices from "../services/PlaceServices.js";
import { ref } from "vue";
import { getImageUrl } from "../utils.js";
import Loader from "../components/Loader.vue";

const loader = ref(true);
const router = useRouter();
const place = ref({});

async function getPlace() {
  await PlaceServices.getPlace(router.currentRoute.value.params.placeId)
    .then((response) => {
      place.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(async () => {
  await getPlace();
  loader.value = false;
});

const getPlanUrl = (id)=>{
    return "/travel-frontend/plan/"+id
}

</script>

<template>
  <v-container>
       <PageLoader v-if="loader" />
      <div class="container col-md-12" v-else>
            <h2>{{place.title}}</h2>
            <div class="row">
                <div class="col-md-6">
                    <img :src="getImageUrl(place.image)" class="image"/>
                </div>
                <div class="col-md-6">
                  <p class="col-md-12">{{ place.description}}</p>
                  <p class="col-md-12"> <strong>Rating </strong> {{ place.rating}}/10</p>
                  <a class="btn btn-primary btn-sm" :href="getPlanUrl(place.planId)" v-if="place.planId != null"> Show plan </a>
                </div>
            </div>
      </div>
  </v-container>
</template>

<style scoped>
.image {
  max-height:600px;
  width:100%;
}

.container {
  padding:70px;
}
</style>