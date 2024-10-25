import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "nes.css/css/nes.min.css"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // { path: '/', component: Home },
    // { path: '/services', component: Services },
    // { path: '/about', component: About },
    // { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router)
app.mount('#app');