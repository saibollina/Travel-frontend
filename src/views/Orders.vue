<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import OrderServices from "../services/OrderServices.js";
import { ref } from "vue";
import Loader from "../components/Loader.vue";
import { getImageUrl } from "../utils.js";


const orders = ref([]);
const loader = ref(true);
const user = ref(null);
const snackbar = ref({
  value: false,
  color: "",
  text: "",
});

onMounted(async () => {
  user.value = JSON.parse(localStorage.getItem("user"));
  await getOrders();
  loader.value = false;
});

async function getOrders() {
  await OrderServices.getOrdersForUser(user.value.id)
    .then((response) => {
      orders.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}


const cancelOrder = async(id,index) => {
    await OrderServices.deleteOrder(id)
    .then((res) => {
      orders.value.splice(index, 1);
      snackbar.value.value = true;
      snackbar.value.color = "green";
      snackbar.value.text = "Order is cancelled";
    })
    .catch((error) => {
      console.log(error);
      snackbar.value.value = true;
      snackbar.value.color = "error";
      snackbar.value.text = error.response.data.message;
    });
}


</script>

<template>
<v-container>
  <div class="container" style="margin-top: 20px">
    <div style="margin-left:30px;">
      <h3>Bookings</h3>
    </div>
    <br/>
    <Loader v-if="loader" />
    <div class="col-md-12 container orders" v-else>
      <div class="row">
      <div v-for="(order,index) in orders" class="col-md-4" :key="order.id">
        <div class="order-booking container elevation-6">
          <p> Booking id <strong> {{ order.id }} </strong></p>
          <p> Booking Date <strong> {{ order.createdAt.slice(0,10) }} </strong></p>
          <div style="display:flex;">
            <p><a class="btn btn-success" :href="['/travel-frontend/plan/'+order.planId]">Show Trip</a></p>
            <button class="btn btn-danger" @click="cancelOrder(order.id,index)">Cancel Booking</button>
          </div>
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
  <br/>
</v-container>

</template>

<style scoped>
.centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-success {
    background-color: #FE7A15;
}
.btn-danger {
  margin-left:20px;
  height: 40px;
}
.order-booking {
  margin-top: 20px;
  width:100%;
  border-bottom: 2px solid black;
  padding:20px;
}
</style>