<template>
    <v-bottom-navigation :elevation="6" v-model="activeNavigationIndex" grow style="background-color: #1d2126;">
      <v-btn @click="handleNavigationClick('Education')">
        <v-icon style="color: #8e9093">mdi-history</v-icon>
        <span style="color: #8e9093">Education</span>
      </v-btn>

      <v-btn @click="handleNavigationClick('Home')">
        <v-icon style="color:#8e9093">mdi-home</v-icon>
        <span style="color:#8e9093">Home</span>
      </v-btn>

      <v-btn @click="handleNavigationClick('Experience')">
        <v-icon style="color:#8e9093">mdi-map-marker</v-icon>
        <span style="color: #8e9093">Experience</span>
      </v-btn>
      <v-btn @click="handleNavigationClick('Resume')">
        <v-icon style="color:#8e9093">mdi-map-marker</v-icon>
        <span style="color: #8e9093">Resume</span>
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
    else if (value === "Resume") {
      activeNavigationIndex.value = 3;
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
    else if (value === "Resume") {
      router.push("/resume");
    }
    else {
      router.push("/");
    }
  }


</script>

<style scoped></style>