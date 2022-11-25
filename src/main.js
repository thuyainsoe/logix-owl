import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/main.css'
import './assets/css/csform.sass'
import router from './router'

createApp(App).use(router).use(store).mount('#app')


