<template>
    <v-sheet max-width="400" style="background-color: #21252b;">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
            <v-slide-group-item>
                <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
                    <div class="d-flex fill-height align-center justify-center">
                        <img class="imgCard" src="../assets/vue.png" />
                    </div>
                </v-card>
            </v-slide-group-item>
            <v-slide-group-item>
                <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
                    <div class="d-flex fill-height align-center justify-center">
                        <img class="imgCard" src="../assets/react.png" />
                    </div>
                </v-card>
            </v-slide-group-item>
            <v-slide-group-item>
                <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
                    <div class="d-flex fill-height align-center justify-center">
                        <img class="imgCard" src="../assets/php.png" />
                    </div>
                </v-card>
            </v-slide-group-item>
            <v-slide-group-item>
                <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
                    <div class="d-flex fill-height align-center justify-center">
                        <img class="imgCard" src="../assets/bootstrap.png" />
                    </div>
                </v-card>
            </v-slide-group-item>
            <v-slide-group-item>
                <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
                    <div class="d-flex fill-height align-center justify-center">
                        <img class="imgCard" src="../assets/js.png" />
                    </div>
                </v-card>
            </v-slide-group-item>
            <v-slide-group-item>
                <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
                    <div class="d-flex fill-height align-center justify-center">
                        <img class="imgCard" src="../assets/nodejs.png" />
                    </div>
                </v-card>
            </v-slide-group-item>
            <v-slide-group-item>
                <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
                    <div class="d-flex fill-height align-center justify-center">
                        <img class="imgCard" src="../assets/aws.png" />
                    </div>
                </v-card>
            </v-slide-group-item>
            <v-slide-group-item>
                <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
                    <div class="d-flex fill-height align-center justify-center">
                        <img class="imgCard" src="../assets/gcp.png" />
                    </div>
                </v-card>
            </v-slide-group-item>
            <v-slide-group-item>
                <v-card color="#1d2126" :class="['ma-4']" height="100" width="100">
                    <div class="d-flex fill-height align-center justify-center">
                        <img class="imgCard" src="../assets/mysql.png" />
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>





<script setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'TechSliderGroup',
});





</script>



<style scoped>

.imgCard {
  object-fit: scale-down;
  width: 75px;
}

</style>