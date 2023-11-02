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
    const educationList = [
        {
          color: 'red',
          time_frame: 'Currently Attending',
          school_name: "New Jersey Institute of Technology",
          degree: "Bachelors Degree in Web and Information Systems",
          timestamp: 1698889308
        },
        {
          color: 'pink',
          time_frame: '2017-2020',
          school_name: "Union County College",
          degree: "Associates Degree in Computer Science",
          timestamp: 1509601308
        },
      ];
</script>






<style scoped>

</style>