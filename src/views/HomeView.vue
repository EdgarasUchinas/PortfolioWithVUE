<template>
  <h2>Hello</h2>
</template>

<script setup>
import { defineComponent } from 'vue';
import { useGeneralStore } from '@/stores/generalStore.js';

defineComponent({
  name: 'HomeView',
});


const generalStore = useGeneralStore();

const result = await generalStore.fetchSkills();
console.log(result);


</script>
