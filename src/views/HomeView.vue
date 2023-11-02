<template>
    <v-container fluid id="container">
      <v-row style="margin: 5%">
        <v-col class="verticalCenterColText">
          <h1>Edgaras Uchinas</h1>
          <h3>Software Developer</h3>
          <p>Fusce vitae mi quis neque porttitor ornare eu sit amet ex. Fusce rutrum vestibulum nisi vel ornare.</p>
        </v-col>
        <v-col>
          <img src="../assets/me.png" alt="">
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
