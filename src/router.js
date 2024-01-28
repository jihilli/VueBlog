import { createWebHistory, createRouter } from "vue-router";
import ListVue from "./components/ListVue";

const routes = [
    {
        path: "/list",
        component: ListVue,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
