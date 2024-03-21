import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';

import SingleProject from "./pages/SingleProject.vue";

import AboutPage from "./pages/AboutPage.vue";

import ProjectsPage from "./pages/ProjectsPage.vue";

import ContactPage from "./pages/ContactPage.vue";

import NotFoundPage from "./pages/NotFoundPage.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: HomePage,
        },
        {
            path: '/about',
            name:'About',
            component: AboutPage,
        },
        {
            path: '/Projects',
            name:'Projects',
            component: ProjectsPage,
        },
        {
            path: '/Contact',
            name:'Contact',
            component: ContactPage,
        },
        {
            path: '/project/:slug',
            name:'singleProject',
            component: SingleProject,
        },
        {
            path:'/:pathMatch(.*)*',
            name:'not-found',
            component:NotFoundPage
        }
    ]
});

export { router };