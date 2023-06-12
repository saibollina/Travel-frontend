<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import PlanServices from "../services/PlanServices.js";
import Loader from "../components/Loader.vue";

const router = useRouter();
const snackbar = ref({
  value: false,
  color: "",
  text: "",
});
const plan = ref({
  name: "",
  description: "",
  image: "",
  from_place: "",
  to_place:"",
  starts_on: "",
  ends_on: "",
  cost: ""
});
const loader = ref(false);

function closeSnackBar() {
  snackbar.value.value = false;
}

onMounted(async () => {
   await getPlan();
   plan.value = {...plan.value,ends_on:plan.value.ends_on.slice(0,10),starts_on:plan.value.starts_on.slice(0,10)}
   loader.value = false
});

async function getPlan() {
    loader.value = true
    await PlanServices.getPlan(router.currentRoute.value.params.id)
        .then((response) => {
            plan.value = response.data
            loader.value = false
        })
        .catch((error) => {
            loader.value = false
        });
}

async function addPlan() {
  if(plan.value.name === "") {
        showErrorMessage("name is required!")

  }
  else if(plan.value.description === "") {
        showErrorMessage("description is required!")

  }
  else if(plan.value.from_place === "") {
        showErrorMessage("from place is required!")

  }
  else if(plan.value.to_place === "") {
        showErrorMessage("to place is required!")

  }
  else if(plan.value.starts_on === "") {
        showErrorMessage("start date is required!")

  }
  else if(plan.value.ends_on === "") {
        showErrorMessage("end date is required!")

  }
  else if(plan.value.cost === "") {
        showErrorMessage("cost is required!")

  }
  else if(plan.value.image === "") {
        showErrorMessage("image url is required!")
  }
  else {
    loader.value = true
    await PlanServices.updatePlan({ ...plan.value,rating: 5,id:router.currentRoute.value.params.id})
        .then((response) => {
            loader.value = false
            snackbar.value.value = true;
            snackbar.value.color = "green";
            snackbar.value.text = "Trip is updated successfully!";
        })
        .catch((error) => {
            loader.value = false
            console.log(error);
            showErrorMessage(error?.response?.data?.message || "Error Updating Trip!")
        });
  }
}
const showErrorMessage = (message) => {
    snackbar.value.value = true;
    snackbar.value.color = "error";
    snackbar.value.text = message;
}
</script>

<template>
  <v-container>
    <div id="body">
      <v-card class="rounded-lg elevation-5">
        <v-card-name class="headline mb-2">Edit Trip </v-card-name>
        <Loader v-if="loader" />
        <v-card-text v-else>
             <v-text-field
            v-model="plan.name"
            label="name"
            required
          ></v-text-field>  
            <v-textarea
            v-model="plan.description"
            label="Description"
            required
          ></v-textarea> 
        <v-text-field
            v-model="plan.from_place"
            label="From place"
            required
          ></v-text-field> 
        <v-text-field
            v-model="plan.to_place"
            label="Destination"
            required
          ></v-text-field> 
        <v-text-field
            v-model="plan.starts_on"
            label="Start Date"
            type="date"
            required
          ></v-text-field> 
        <v-text-field
            v-model="plan.ends_on"
            label="End Date"
            type="date"
            required
          ></v-text-field> 
        <v-text-field
            v-model="plan.cost"
            label="Cost"
            required
          ></v-text-field> 
        <v-text-field
            v-model="plan.image"
            label="Image path"
            required
          ></v-text-field> 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="flat" color="primary" @click="addPlan()">Update</v-btn>
        </v-card-actions>
      </v-card>
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
    </div>
  </v-container>
</template>

<style scoped>
.body {
    padding: 20px;
}
</style>