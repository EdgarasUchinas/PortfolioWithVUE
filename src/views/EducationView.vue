<template>
    <v-container fluid>
      <v-row justify="center" style="text-align: center; margin-bottom: 25px;">
        <v-col cols="8">
          <div>
            <h1>Education</h1>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-timeline align="start" justify="center">
            <v-timeline-item
              v-for="(educationObject, i) in educationList"
              :key="i"
              :dot-color="educationObject.color"
              size="small"
            >
              <template v-slot:opposite>
                <div
                  :class="`pt-1 headline font-weight-bold text-${educationObject.color}`"
                  v-text="educationObject.time_frame"
                ></div>
              </template>
              <div style="text-align: center;">
                <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${educationObject.color}`">
                  {{ educationObject.school_name }}
                </h2>
                <div style="text-align: center;">
                  {{ educationObject.degree  }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
</template>



<script setup>
    import { useGeneralStore } from '@/stores/generalStore.js';
    import { onMounted, ref } from 'vue';

    const educationList = ref([]);

    onMounted(async () => {
        const generalStore = useGeneralStore();
        const result = await generalStore.getEducationFromDB();
        educationList.value = result.data;
    });
</script>






<style scoped>

</style>