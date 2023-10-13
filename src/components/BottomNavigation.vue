<template>
    <v-bottom-navigation :elevation="6" grow>
      <v-btn value="recent">
        <v-icon>mdi-history</v-icon>
        <span>Recent</span>
      </v-btn>

      <v-btn value="home">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-map-marker</v-icon>
        <span>Nearby</span>
      </v-btn>
    </v-bottom-navigation>
</template>


<script setup>
import { defineComponent } from 'vue';

    defineComponent({
        name: 'BottomNavigation',
    });
</script>

<style scoped></style>