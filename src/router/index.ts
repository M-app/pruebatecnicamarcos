import {createRouter, createWebHistory, RouteRecordRaw, RouterOptions} from "vue-router";
import MainLayout from "../layout/MainLayout.vue"
import Products from "../page/Products.vue"
const routes: Array<RouteRecordRaw> = ([
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        component: Products
      },
      {
        name: 'product-detail',
        path: "/product/:id",
        component: "<div>hola</div>"
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => "<div>404</div>"
  }
] as Array<RouteRecordRaw>)

const router = createRouter({
  history: createWebHistory(),
  routes: routes as Array<RouteRecordRaw>
} as RouterOptions);

export default router

