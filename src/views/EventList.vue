<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(async () => {
 
});
</script>

<template>
  <v-container>
      <div class="container" style="margin-top:20px">
       <section class="section-margin">
            <div class="container">
                <h2>Events</h2>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 mb-4 mb-md-0 event">
                    <a href="./event">
                        <img class="card-img" src="/museum.jpg" alt="">
                        <h4 class="card-title">Museum</h4>
                        <p>The Metropolitan Museum of Art. Opened in 1880 and situated on Central Park, this iconic New York institution contains 5,000 years of art – from prehistory to the latest in contemporary works</p>
                        <button type="button" class="btn btn-warning">View Details</button>
                    </a>    
                </div>

                 <div class="col-md-6 col-lg-4 mb-4 mb-md-0 event">
                    <a href="./event">
                        <img class="card-img" src="/edge.jpg" alt="">
                        <h4 class="card-title">Edge</h4>
                        <p>Protruding 100-stories-high observation deck, with a glass floor, bar & 360-degree NYC views.</p>
                        <button type="button" class="btn btn-warning">View Details</button>
                    </a>    
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-md-0 event">
                    <a href="./event">
                        <img class="card-img" src="/statue.jpg" alt="">
                        <h4 class="card-title">The Statue of Liberty</h4>
                        <p>The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue</p>
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
.event {
    cursor: pointer;
    margin-top: 20px;
}
.btn {
    color: white;
    background-color: #FE7A15;
}
</style>