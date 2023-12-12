<template>
    <v-container fluid>
      <v-row justify="center" style="text-align: center; margin-bottom: 25px;">
        <v-col cols="8">
          <div>
            <h1>Contact Form</h1>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" style="margin-bottom: 20px;">
        <v-col cols="auto">
            <v-sheet class="formContainer">
                <v-form @submit.prevent style="padding: 25px;">
                    <v-text-field label="First Name"></v-text-field>
                    <v-text-field label="Email"></v-text-field>
                    <v-textarea label="Message"></v-textarea>
                    <v-btn type="submit" block class="mt-2">Submit</v-btn>
                </v-form>
            </v-sheet>
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
        const result = await generalStore.getExperienceFromDB();
        educationList.value = result;
    });
</script>






<style scoped>

@media (max-width: 800px) {
    .formContainer {
        width: 360px !important;
    }
    
}



.formContainer {
    width: 600px;
}





</style>