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
                <h2>Places</h2>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 mb-4 mb-md-0 place">
                    <a href="/place">
                        <img class="card-img" src="a1.jpg" alt="">
                        <h4 class="card-title">Arizona</h4>
                        <p>Arizona, a southwestern U.S. state, is best known for the Grand Canyon, the mile-deep chasm carved by the Colorado River. Flagstaff, a ponderosa pine–covered mountain town.</p>
                        <button type="button" class="btn btn-warning">View Details</button>
                    </a>    
                </div>

                 <div class="col-md-6 col-lg-4 mb-4 mb-md-0 place">
                    <a href="/place">
                        <img class="card-img" src="c1.jpg" alt="">
                        <h4 class="card-title">Chicago</h4>
                        <p>Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers.</p>
                        <button type="button" class="btn btn-warning">View Details</button>
                    </a>    
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-md-0 place">
                    <a href="/place">
                        <img class="card-img" src="g1.jpg" alt="">
                        <h4 class="card-title">Georgia</h4>
                        <p>Georgia is a southeastern U.S. state whose terrain spans coastal beaches, farmland and mountains. Capital city Atlanta is home of the Georgia Aquarium and the Martin Luther King Jr.</p>
                        <button type="button" class="btn btn-warning">View Details</button>
                    </a>    
                </div>
                <div class="col-md-6 col-lg-4 mb-4 mb-md-0 place">
                    <a href="/place">
                        <img class="card-img" src="ny2.jpg" alt="">
                        <h4 class="card-title">New York</h4>
                        <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial.</p>
                        <button type="button" class="btn btn-warning">View Details</button>
                    </a>    
                </div>
                   <div class="col-md-6 col-lg-4 mb-4 mb-md-0 place">
                    <a href="/place">
                        <img class="card-img" src="m1.jpg" alt="">
                        <h4 class="card-title">Miami</h4>
                        <p>Miami, officially the City of Miami, is a coastal metropolis and the seat of Miami-Dade County in South Florida. With a population of 442,241 as of the 2020 census, it is the second-most populous city.</p>
                        <button type="button" class="btn btn-warning">View Details</button>
                    </a>    
                </div>
                  <div class="col-md-6 col-lg-4 mb-4 mb-md-0 place">
                    <a href="/place">
                        <img class="card-img" src="g2.jpg" alt="">
                        <h4 class="card-title">California</h4>
                        <p>California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles. Its terrain includes cliff-lined beaches, redwood forest, the Sierra Nevada Mountains</p>
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