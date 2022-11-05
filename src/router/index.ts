import { defineAsyncComponent } from "vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
// Static components
import Main from "../views/Main.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/verify/',
        name: 'Verify',
        component: defineAsyncComponent(() => import('../views/Verify.vue'))
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
