import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'

const pinia = createPinia();
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    }
});

createApp(App).use(router).use(vuetify).use(pinia).mount('#app');
