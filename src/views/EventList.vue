<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import PlaceServices from "../services/PlaceServices.js";
import { ref } from "vue";
import Loader from "../components/Loader.vue";
import { getImageUrl } from "../utils.js";


const events = ref([]);
const loader = ref(true);

onMounted(async () => {
  await getEvents();
  loader.value = false;
});


async function getEvents() {
  await PlaceServices.getEvents()
    .then((response) => {
      events.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

const getEventUrl = (id)=>{
    return "/travel-frontend/place/"+id
}


</script>

<template>
  <v-container>
      <div class="container" style="margin-top:20px">
       <section class="section-margin">
            <div class="container">
                <h2>Events</h2>
            </div>
            <Loader v-if="loader" />
            <div class="alert alert-warning"  v-if="!loader && events.length == 0" role="alert" style="margin-top:30px;">
                No Events Available Now!
            </div>
            <div class="row">
                <div v-for="event in events" :key="event.id" class="col-md-6 col-lg-4 mb-4 mb-md-0 place">
                    <a :href="getEventUrl(event.id)">
                        <img class="card-img" :src="getImageUrl(event.image)" alt="">
                        <h4 class="card-title">{{ event.name }}</h4>
                        <p>{{ event.description.slice(0,240) }}</p>
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