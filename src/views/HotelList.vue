<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import PlaceServices from "../services/PlaceServices.js";
import { ref } from "vue";
import Loader from "../components/Loader.vue";
import { getImageUrl } from "../utils.js";

const hotels = ref([]);
const loader = ref(true);
onMounted(async () => {
  await getHotels();
  loader.value = false;
});

async function getHotels() {
  await PlaceServices.getHotels()
    .then((response) => {
      hotels.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

const getHotelUrl = (id)=>{
    return "./place/"+id
}

</script>

<template>
  <v-container>
      <div class="container" style="margin-top:20px">
       <section class="section-margin">
            <div class="container">
                <h2>Hotel</h2>
            </div>
            <Loader v-if="loader" />
            <div class="alert alert-warning"  v-if="!loader && hotels.length == 0" role="alert" style="margin-top:30px;">
                No Hotels Available Now!
            </div>
            <div class="row">
                <div v-for="hotel in hotels" :key="hotel.id" class="col-md-6 col-lg-4 mb-4 mb-md-0 place">
                    <a :href="getHotelUrl(hotel.id)">
                        <img class="card-img" :src="getImageUrl(hotel.image)" alt="">
                        <h4 class="card-title">{{ hotel.name }}</h4>
                        <p>{{ hotel.description.slice(0,300) }}...</p>
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