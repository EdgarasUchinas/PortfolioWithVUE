<template>
  <v-container fluid id="container">
    <v-row style="margin: 5%">
      <v-col lg="7" sm="12" class="verticalCenterColText">
        <h1 class="mainTitle">Edgaras Uchinas</h1>
        <h2 style="color: rgb(228, 226, 255)">Software Developer</h2>
        <TechSliderGroup />
      </v-col>
      <v-col class="verticalCenterColText">
        <img class="profileImage" src="../assets/me.png" alt="">
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

.profileImage {
  border-radius: 5px;
  border-bottom: 15px;
  border-right: 15px;
  border-top: 15px;
  border-left: 15px;
  border-style: solid;
  border-color: #1d2126;
  width: 400px;
}


@media only screen and (max-width: 600px) {
  .profileImage {
    width: 300px;
  }

  #container {
    height: "auto"
  }

  .mainTitle {
    font-size: 2em;
  }
}



.mainTitle {
  font-size: 2.6em;
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
