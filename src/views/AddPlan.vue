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

async function addPlan() {
  if(plan.value.name === "") {
        displayError("name is required!")

  }
  else if(plan.value.description === "") {
        displayError("description is required!")

  }
  else if(plan.value.from_place === "") {
        displayError("from place is required!")

  }
  else if(plan.value.to_place === "") {
        displayError("to place is required!")

  }
  else if(plan.value.starts_on === "") {
        displayError("start date is required!")

  }
  else if(plan.value.ends_on === "") {
        displayError("end date is required!")

  }
  else if(plan.value.cost === "") {
        displayError("cost is required!")

  }
  else if(plan.value.image === "") {
        displayError("image url is required!")
  }
  else {
    loader.value = true
    await PlanServices.addPlan({ ...plan.value,rating: 5})
        .then((response) => {
            loader.value = false
            snackbar.value.value = true;
            snackbar.value.color = "green";
            snackbar.value.text = "Trip is created successfully!";
        })
        .catch((error) => {
            loader.value = false
            console.log(error);
            displayError(error.response.data.message || "Error Creating Trip!")
        });
  }
}
const displayError = (message) => {
    snackbar.value.value = true;
    snackbar.value.color = "error";
    snackbar.value.text = message;
}
</script>

<template>
  <v-container>
    <div id="body">
      <v-card class="rounded-lg elevation-5">
        <v-card-name class="headline mb-2">Create Trip </v-card-name>
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
          <v-btn variant="flat" color="primary" @click="addPlan()">Create</v-btn>
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