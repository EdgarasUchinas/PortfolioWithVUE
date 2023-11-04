<template>
  <v-layout>
    <v-main style="background-color: #21252b; height: 100vh">
      <v-container fluid>
        <router-view v-slot="{ Component }">
          <Transition name="page-slide" mode="out-in">
            <component :is="Component" />
          </Transition>
        </router-view>
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


body {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll; 
}

body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}



.page-slide-enter-from,
.page-slide-leave-to {
  opacity: 0;
  transform: translateX(60px);
}

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
