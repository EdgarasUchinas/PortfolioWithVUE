<template>
    <v-container fluid>
      <v-row style="margin-bottom: 25px;">
        <v-col class="verticalCenterColText">
          <h1>Education</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-timeline align="start">
            <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :dot-color="year.color"
            size="small"
            >
            <template v-slot:opposite>
                <div
                :class="`pt-1 headline font-weight-bold text-${year.color}`"
                v-text="year.time_frame"
                ></div>
            </template>
            <div>
                <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
                {{ year.school_name }}
                </h2>
                <div>
                
                </div>
            </div>
            </v-timeline-item>
        </v-timeline>
      </v-row>
    </v-container>
</template>



<script setup>

    const years = [
        {
          color: 'red',
          time_frame: 'Currently Attending',
          school_name: "New Jersey Institute of Technology",
        },
        {
          color: 'green',
          year: '1970',
        },
        {
          color: 'pink',
          year: '1980',
        },
        {
          color: 'amber',
          year: '1990',
        },
        {
          color: 'orange',
          year: '2000',
        },
      ];



</script>






<style scoped>

</style>