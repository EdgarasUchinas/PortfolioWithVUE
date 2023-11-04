<template>
  <v-container fluid id="container">
    <v-row style="margin: 5%">
      <v-col lg="7" sm="12" class="verticalCenterColText">
        <h1 class="mainTitle">Edgaras Uchinas</h1>
        <h2 style="color: rgb(228, 226, 255)">Software Developer</h2>

      <v-sheet max-width="400" style="background-color: #21252b;">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item>
            <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
              <div class="d-flex fill-height align-center justify-center">
                  <img class="imgCard" src="../assets/vue.png" />
              </div>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
              <div class="d-flex fill-height align-center justify-center">
                  <img class="imgCard" src="../assets/react.png" />
              </div>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
              <div class="d-flex fill-height align-center justify-center">
                  <img class="imgCard" src="../assets/php.png" />
              </div>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
              <div class="d-flex fill-height align-center justify-center">
                  <img class="imgCard" src="../assets/bootstrap.png" />
              </div>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
              <div class="d-flex fill-height align-center justify-center">
                  <img class="imgCard" src="../assets/js.png" />
              </div>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
              <div class="d-flex fill-height align-center justify-center">
                  <img class="imgCard" src="../assets/nodejs.png" />
              </div>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
              <div class="d-flex fill-height align-center justify-center">
                  <img class="imgCard" src="../assets/aws.png" />
              </div>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
              <div class="d-flex fill-height align-center justify-center">
                  <img class="imgCard" src="../assets/gcp.png" />
              </div>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item>
            <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
              <div class="d-flex fill-height align-center justify-center">
                  <img class="imgCard" src="../assets/mysql.png" />
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>

      </v-col>
      <v-col class="verticalCenterColText">
        <img width="400" src="../assets/me.png" alt="">
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { defineComponent, onMounted } from 'vue';
import { useGeneralStore } from '@/stores/generalStore.js';

defineComponent({
  name: 'HomeView',
});






onMounted(async () => {
  const generalStore = useGeneralStore();
  const result = await generalStore.fetchSkills();
  console.log(result);
});
</script>


<style scoped>
.mainTitle {
  font-size: 3em;
  color: rgb(228, 226, 255);

}

#container {
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.imgCard {
  object-fit: scale-down;
  width: 75px;
}


.verticalCenterColText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
