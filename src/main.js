import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

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
});

createApp(App).use(router).use(vuetify).use(pinia).mount('#app');
