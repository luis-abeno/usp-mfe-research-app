import { type RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
import { pathMFE, baseURL } from "../app.config";

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
        ]
    },
];

const router = createRouter({
    history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? `${pathMFE || ""}` : baseURL),
    routes: routes,
});

export default router;
