<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const from = ref('');
const to = ref('');
const startDate = ref('');
const endDate = ref('');

onMounted(async () => {
  
  
});

const searchPackage = () => {
  return './plans?from='+from.value.toString()+'&to='+to.value.toString()+'&startDate='+startDate.value.toString()+'&endDate='+endDate.value.toString()
}
</script>
<template>  
          <div class="row">
            <img class="col-md-6" src="/home.png" />
            <div class="col-md-6 left-nav">
              <h2 class="display-3 text-1000 fw-normal title">Let’s make a tour</h2>
              <h2 class="display-3 text-primary fw-bold">Discover the beauty</h2>
              <div class="pt-5">
                <nav>
                  <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <form class="row g-4 mt-5">
                        <div class="col-sm-6 col-md-6 col-xl-5">
                          <div class="input-group-icon">
                            <label class="form-label visually-hidden" for="inputAddress1">From Address</label>
                            <input class="form-control input-box form-voyage-control" id="inputAddress1" type="text" placeholder="From where" v-model="from" /><span class="nav-link-icon text-800 fs--1 input-box-icon"></span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-xl-5">
                          <div class="input-group-icon">
                            <label class="form-label visually-hidden" for="inputAddress2">To Address</label>
                            <input class="form-control input-box form-voyage-control" id="inputAddress2" type="text" placeholder="To where" v-model="to" /><span class="nav-link-icon text-800 fs--1 input-box-icon"></span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-xl-5">
                          <div class="input-group-icon">
                            <input class="form-control input-box form-voyage-control" id="inputdateOne" type="date" v-model="startDate" /><span class="nav-link-icon text-800 fs--1 input-box-icon"></span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-xl-5">
                          <div class="input-group-icon">
                            <input class="form-control input-box form-voyage-control" id="inputDateTwo" type="date" v-model="endDate" /><span class="nav-link-icon text-800 fs--1 input-box-icon"></span>
                          </div>
                        </div>
                         <div class="col-9 d-grid mt-6" style="display:flex;justify-content:center;">
                          <a class="btn btn-secondary" type="submit" :href="searchPackage()">Search Packages</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        <!-- Image Showcases-->
        <section class="showcase">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('images/it2.jpg')"></div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text" style="padding-left:30px;">
                        <h2>What we do?</h2>
                        <p class="lead mb-0">we strive to provide you with a comprehensive and dynamic online experience. Whether you're seeking information, entertainment, or connectivity, our platform is designed to meet your needs.</p>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-lg-6 text-white showcase-img" style="background-image: url('images/it3.jpg')"></div>
                    <div class="col-lg-6 my-auto showcase-text"  style="padding-right:30px;padding-left:10px;">
                        <h2>How we do?</h2>
                        <p class="lead mb-0">Our homepage features a clean and intuitive interface, making it easy for you to explore the various sections of our website. We believe in a seamless user experience, ensuring that you can quickly find what you're looking for.</p>
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>

.section {
  background-color: white;
}
.btn {
  color: white;
  background-color: #FE7A15;
  width:300px;
}
.g-0 {
  height:500px;
}
.title {
  margin-top:20px;
}

</style>