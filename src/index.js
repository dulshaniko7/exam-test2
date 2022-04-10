import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Details from "@/views/Details.vue";
import Error from "@/views/Error.vue";
import Login from "@/views/Login.vue";
import Index from "@/views/Index.vue";
import PlayerDetails from "@/views/PlayerDetails.vue";
import Add from '@/views/AddNewPlayers'
import Emit from "@/components/Emit";

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/add",
        name: "Add",
        component: Add,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/contact/:id",
        name: "JobDetails",
        component: Details,
        props: true
    },
    {
        path: "/player/:id",
        name: "PlayerDetails",
        component: PlayerDetails,
        props: true
    },
    {
        path: "/login",
        name: "Login",
        component: Login,

    },
    {
        path: "/emit",
        name: "Emit",
        component: Emit,

    },

    {
        path: "/:catchAll(.*)",
        name: "Error",
        component: Error,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;