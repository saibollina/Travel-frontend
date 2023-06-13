<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import PlanServices from "../services/PlanServices.js";
import { ref } from "vue";
import { getImageUrl } from "../utils.js";
import Loader from "../components/Loader.vue";
import OrderServices from "../services/OrderServices.js";

const router = useRouter();
const plan = ref();
const loader = ref(true); 
const snackbar = ref({
  value: false,
  color: "",
  text: "",
});
const getPlaceUrl = (id)=>{
    return "/travel-frontend/place/"+id
}
const user = ref(null);
onMounted(async () => {
  user.value = JSON.parse(localStorage.getItem("user"));
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

async function placeOrder() {
    loader.value = true;
    await OrderServices.addOrder({
        user_id: user.value.id,
        plan_id : router.currentRoute.value.params.planId,
    })
    .then((response) => {
        loader.value = false;
        snackbar.value.value = true;
        snackbar.value.color = "green";
        snackbar.value.text = "Order is placed successfully!";
    })
    .catch((error) => {
      console.log(error);
        loader.value = false;
        snackbar.value.value = true;
        snackbar.value.color = "error";
        snackbar.value.text = error.response.data.message;
    });
}

async function deletePlan() {
    loader.value = true;
    await PlanServices.deletePlan(router.currentRoute.value.params.planId)
    .then((response) => {
        snackbar.value.value = true;
        snackbar.value.color = "green";
        snackbar.value.text = "Trip is deleted successfully!";
        router.push({ name: "home" });
        loader.value = false;
    })
    .catch((error) => {
      console.log(error);
      snackbar.value.value = true;
      snackbar.value.color = "error";
      snackbar.value.text = error.response.data.message;
      loader.value = false;
    });
}

</script>

<template>
  <v-container>
        <Loader v-if="loader" />
      <div class="container col-md-12" v-else>
            <div style="display:flex;">
              <h2>{{ plan.name }}</h2>
              <a type="button" class="btn btn-success book" v-if="user !== null && user?.role == 0" @click="placeOrder()" >Book Now</a>
                <div class="settings"  v-if="user!= null && user?.role && user.role != 0">
                  <a class="btn btn-primary book" :href="['/travel-frontend/edit-plan/'+plan.id]">Edit</a>
                  <button class="btn btn-primary book" @click="deletePlan()" style="margin-left:10px;">
                      Delete
                  </button>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img :src="getImageUrl(plan.image)" class="large-image"/>
                </div>
                <div class="col-md-6">
                <p class="col-md-12">{{ plan.description }}</p>
                <h5>Starting date is <strong>{{ plan.starts_on.slice(0,10) }}</strong></h5>
                <h5>Ending date is <strong>{{ plan.ends_on.slice(0,10) }} </strong></h5>
                <h5>Total cost is <strong>${{ plan.cost }} </strong></h5>
                <h5>Rating is <strong>{{ plan.rating }}/5 </strong></h5>
                <div v-for="(day,index) in plan.day" :key="index" class="days">
                    <div class="day">
                    <h5>Day {{ day.day}}</h5>
                    <p> {{ day.description }} </p>
                    <a class="btn btn-primary btn-sm" :href="getPlaceUrl(day.placeId)" v-if="day.placeId"> Show More </a>
                    </div>
                </div>
                </div>
            </div>
      </div>
      <v-snackbar v-model="snackbar.value" rounded="pill">
        {{ snackbar.text }}

        <template v-slot:actions>
          <v-btn
            :color="snackbar.color"
            variant="text"
            @click="closeSnackBar()"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
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

.book {
    color: white;
    margin-left: 10px;
    height: 40px;
    background-color: #FE7A15 ;
}
</style>