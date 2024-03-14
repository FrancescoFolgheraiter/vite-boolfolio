import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js';
//importazione bootstrap
import * as bootstrap from 'bootstrap'

createApp(App).use(router).mount('#app')
