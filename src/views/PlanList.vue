<script setup>
import { onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import PlanServices from "../services/PlanServices.js";
import { ref } from "vue";
import Loader from "../components/Loader.vue";
import { getImageUrl } from "../utils.js";

const router = useRouter();
const plans = ref([]);
const loader = ref(true);
const search = ref(router.currentRoute.value.query.search);
const from = ref(router.currentRoute.value.query.from);
const to = ref(router.currentRoute.value.query.to);
const startDate = ref(router.currentRoute.value.query.startDate);
const endDate = ref(router.currentRoute.value.query.endDate);


onMounted(async () => {
  await getPlans();
  loader.value = false;
});

async function getPlans() {
  await PlanServices.getPlans({ search:search.value,from:from.value,to:to.value,startDate:startDate.value,endDate:endDate.value})
    .then((response) => {
      plans.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

watch(
  () => router.currentRoute.value.query,
  async () => {
    search.value = router.currentRoute.value.query.search || null;
    from.value = router.currentRoute.value.query.from || null;
    to.value = router.currentRoute.value.query.to || null;
    startDate.value = router.currentRoute.value.query.startDate || null;
    endDate.value = router.currentRoute.value.query.endDate || null;
    await getPlans();
  }
);
const getPlanUrl = (id)=>{
    return "/travel-frontend/plan/"+id
}

</script>

<template>
  <v-container>
      <div class="container" style="margin-top:20px">
       <section class="section-margin">
            <div class="container">
                <h2>Plans</h2>
            </div>
            <Loader v-if="loader" />
            <div class="alert alert-warning"  v-if="!loader && plans.length == 0" role="alert" style="margin-top:30px;">
                No Plans Available Now!
            </div>
            <div class="row">
                <div v-for="plan in plans" :key="plan.id" class="col-md-6 col-lg-4 mb-4 mb-md-0 place">
                    <a :href="getPlanUrl(plan.id)">
                        <img class="card-img" :src="getImageUrl(plan.image)" alt="">
                        <h4 class="card-title">{{ plan.name }}</h4>
                        <p>{{ plan.description.slice(0,240) }}</p>
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