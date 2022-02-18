import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ProductList from "../components/ProductList.vue"
import ProductForm from "../components/ProductForm.vue"
import UpdateProduct from "../components/UpdateProduct.vue"
import Permissions from "../components/Permissions.vue"
import PointOfSale  from "../components/PointOfSale.vue"


const routes: Array<RouteRecordRaw> = [
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/permissions',
    name: 'Permissions',
    component: Permissions
  },
  {
    path: '/product-form',
    name: 'ProductForm',
    component: ProductForm
  },
  {
    path: '/update/:id',
    name: 'UpdateProduct',
    component: UpdateProduct
  },
  {
    path: '/pointofsale',
    name: 'pointofsale',
    component: PointOfSale
  },
  
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
