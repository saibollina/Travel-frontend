<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import PlaceServices from "../services/PlaceServices.js";
import { ref } from "vue";
import Loader from "../components/Loader.vue";
import { getImageUrl } from "../utils.js";

const places = ref([]);
const loader = ref(true);
onMounted(async () => {
  await getPlaces();
  loader.value = false;
});

async function getPlaces() {
  await PlaceServices.getPlaces()
    .then((response) => {
      places.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

const getPlaceUrl = (id)=>{
    return "./place/"+id
}

</script>

<template>
  <v-container>
      <div class="container" style="margin-top:20px">
       <section class="section-margin">
            <div class="container">
                <h2>Places</h2>
            </div>
            <Loader v-if="loader" />
            <div class="alert alert-warning"  v-if="!loader && places.length == 0" role="alert" style="margin-top:30px;">
                No Places Available Now!
            </div>
            <div class="row">
                <div v-for="place in places" :key="place.id" class="col-md-6 col-lg-4 mb-4 mb-md-0 place">
                    <a :href="getPlaceUrl(place.id)">
                        <img class="card-img" :src="getImageUrl(place.image)" alt="">
                        <h4 class="card-title">{{ place.name }}</h4>
                        <p>{{ place.description }}</p>
                        <button type="button" class="btn btn-warning">View Details</button>
                    </a>    
                </div>
            </div>
    </section><br/>
      </div>
  </v-container>
</template>

<style scoped>
.centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.card-img {
    border-radius: 7px;
    margin-top: 10px;
}
.card-title {
    margin-top: 10px;
}
a:hover {
    color:black;
}
.place {
    cursor: pointer;
    margin-top: 20px;
}
.btn {
    color: white;
    background-color: #FE7A15;
}
</style>