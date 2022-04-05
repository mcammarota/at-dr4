import { createRouter, createWebHistory} from "vue-router";

import Loja from '../components/Loja.vue'
import AT from '../components/AT.vue'

const routes = [
    {
        path: '/',
        name: 'at',
        component: AT
    },
    {
        path: '/loja',
        name: 'loja',
        component: Loja
    },
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    base: 'http://localhost:8080',
    routes
})

export default router
