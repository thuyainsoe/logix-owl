import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Create from '../components/Create.vue'
import SignIn  from '../components/SignIn.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/create',
        component: Create
    },
    {
        path: '/signin',
        component: SignIn
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router

