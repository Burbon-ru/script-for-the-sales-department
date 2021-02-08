import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:'/scripts/edit/:id',
        name: 'EditScript',
        component: () => import('../views/EditScript.vue')
    },
    {
        path:'/scripts/variables/:id',
        name: 'Variables',
        component: () => import('../views/Variables.vue')
    },
    {
        path:'/scripts/run/:id',
        name: 'RunScript',
        component: () => import('../views/RunScript.vue')
    },
    {
        path:'/running',
        name: 'RunningScript',
        component: () => import('../views/RunningScript.vue')
    },
    {
        path:'/running/:id',
        name: 'runningScriptItem',
        component: () => import('../components/RunningScript/item.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
