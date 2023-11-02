<template>
    <v-container fluid>
      <v-row>
        <v-col>
          <h1>Edgaras Uchinas</h1>
          <h3>Software Developer</h3>
          <p>Fusce vitae mi quis neque porttitor ornare eu sit amet ex. Fusce rutrum vestibulum nisi vel ornare.</p>
        </v-col>
        <v-col>
          <v-img></v-img>
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
