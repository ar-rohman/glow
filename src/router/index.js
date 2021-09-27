import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '@/views/Search.vue'),
    },
    {
        path: '/setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/Setting.vue'),
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/Detail.vue'),
    },
    {
        path: '/hourly',
        name: 'Hourly',
        component: () => import(/* webpackChunkName: "hourly" */ '@/views/Hourly.vue'),
    },
    {
        path: '/daily',
        name: 'Daily',
        component: () => import(/* webpackChunkName: "daily" */ '@/views/Daily.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
