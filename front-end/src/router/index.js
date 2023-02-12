import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import HomePage from '../views/HomePage.vue';
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  }, {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  }, {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  }, {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  }, {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  }, {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  }, {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
