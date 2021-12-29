import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'
import { store } from './store'
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})
createApp(App).use(router).use(store).mount('#app')
