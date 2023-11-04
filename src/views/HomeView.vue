<template>
  <v-container fluid id="container">
    <v-row style="margin: 5%">
      <v-col lg="7" sm="12" class="verticalCenterColText">
        <h1 class="mainTitle">Edgaras Uchinas</h1>
        <h2 style="color: rgb(228, 226, 255)">Software Developer</h2>
        <TechSliderGroup />
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
import TechSliderGroup from '@/components/TechSliderGroup.vue';

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
  font-size: 2.8em;
  color: rgb(228, 226, 255);

}

#container {
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.verticalCenterColText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
