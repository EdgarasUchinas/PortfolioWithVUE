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


.navigation_bar {
  background-color: #1d2126;
  color: #ffffff;
  height: 60px;
}

.p-menuitem-text {
  color: #ffffff;
  margin: 10px 10px 10px 10px;
  font-size: 1.2em;
}

.p-menubar-button {
  margin-left: 25px;
}

html {
  background: #21252b;
}

body {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll; 
}

body::-webkit-scrollbar {
  display: none;
}

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 400ms ease all;
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
