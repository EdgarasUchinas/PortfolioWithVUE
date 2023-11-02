<template>
  <v-layout>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
    <BottomNavigation/>
  </v-layout>
</template>


<script setup>
  import { defineComponent } from 'vue';
  import BottomNavigation from './components/BottomNavigation.vue';

  defineComponent({
    name: 'App',
  });



</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
