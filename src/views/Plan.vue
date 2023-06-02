<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import PlanServices from "../services/PlanServices.js";
import { ref } from "vue";
import { getImageUrl } from "../utils.js";
import Loader from "../components/Loader.vue";

const router = useRouter();
const plan = ref();
const loader = ref(true); 

const getPlaceUrl = (id)=>{
    return "/travel-frontend/place/"+id
}

onMounted(async () => {
  await getItinerary();
  loader.value = false;
});

async function getItinerary() {
  await PlanServices.getPlan(router.currentRoute.value.params.planId)
    .then((response) => {
      plan.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

</script>

<template>
  <v-container>
        <Loader v-if="loader" />
      <div class="container col-md-12" v-else>
            <h2>{{ plan.name }}</h2>
            <div class="row">
                <div class="col-md-6">
                    <img :src="getImageUrl(plan.image)" class="large-image"/>
                </div>
                <div class="col-md-6">
                <p class="col-md-12">{{ plan.description }}</p>
                <h5>Starting date is <strong>{{ plan.starts_on.slice(0,10) }}</strong></h5>
                <h5>Ending date is <strong>{{ plan.ends_on.slice(0,10) }} </strong></h5>
                <h5>Total cost is <strong>${{ plan.cost }} </strong></h5>
                <h5>Rating is <strong>{{ plan.rating }}/10 </strong></h5>
                <div v-for="(day,index) in plan.day" :key="index" class="days">
                    <div class="day">
                    <h5>Day {{ day.day}}</h5>
                    <p> {{ day.description }} </p>
                    <a class="btn btn-primary btn-sm" :href="getPlaceUrl(day.placeId)" v-if="day.placeId"> Show place </a>
                    </div>
                </div>
                </div>
            </div>
      </div>
  </v-container>
</template>

<style scoped>
.container {
    margin-top:20px;
    background-color:white;
    padding:50px;
}
.large-image {
    width:100%;max-height:500px;
}
.day-title {
    display:flex;
    padding:20px;
    border:1px black solid;
    border-radius:5px;
}
.showall {
    color:white;
    margin-left:auto;
    width:100%;
}
.days {
  margin-top: 30px;
}
.day {
  margin-bottom: 30px;
}
</style>