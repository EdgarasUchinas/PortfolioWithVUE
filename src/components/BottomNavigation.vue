<template>
    <v-bottom-navigation :elevation="6" v-model="activeNavigationIndex" grow>
      <v-btn @click="handleNavigationClick('Education')">
        <v-icon>mdi-history</v-icon>
        <span>Education</span>
      </v-btn>

      <v-btn @click="handleNavigationClick('Home')">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn @click="handleNavigationClick('Experience')">
        <v-icon>mdi-map-marker</v-icon>
        <span>Experience</span>
      </v-btn>
    </v-bottom-navigation>
</template>


<script setup>
  import { defineComponent, ref, watch } from 'vue';
  import router from '@/router/index.js';

  defineComponent({
      name: 'BottomNavigation',
  });


  const activeNavigationIndex = ref(1);

  watch(() => router.currentRoute.value.name, (value) => {
    if (value === "Education") {
      activeNavigationIndex.value = 0;
    }
    else if (value === "Home") {
      activeNavigationIndex.value = 1;
    }
    else if (value === "Experience") {
      activeNavigationIndex.value = 2;
    }
    else {
      activeNavigationIndex.value = 1;
    }
  });


  function handleNavigationClick(value) {
    if (value === "Home") {
      router.push("/");
    }
    else if (value === "Education") {
      router.push("/education");
    }
    else if (value === "Experience") {
      router.push("/experience");
    }
    else {
      router.push("/");
    }
  }


</script>

<style scoped></style>