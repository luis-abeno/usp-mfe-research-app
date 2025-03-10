import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
import { pathMFE } from "../app.config";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Protected",
        component: () => import("../layouts/Protected.vue"),
        children: [
            {
                path: "",
                name: "Home",
                component: () => import("../pages/HomePage.vue"),
            },
            {
                path: "/about",
                name: "About",
                component: () => import("../pages/AboutPage.vue"),
            },
            {
                path: "/material",
                name: "Material",
                component: () => import("../pages/MaterialsPage.vue"),
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? `${pathMFE || ""}` : "/"),
    routes: routes,
});

export default router;
