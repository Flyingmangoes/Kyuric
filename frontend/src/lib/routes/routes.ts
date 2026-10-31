import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/LandingPage.vue'),
  },
  {
    path: '/products',
    name: 'product-search',
    component: () => import('@/components/placeholder_page.vue'),
    props: { title: 'Search' },
  },
  {
    path: '/products/:id',
    name: 'product-detail',
    component: () => import('@/components/placeholder_page.vue'),
    props: { title: 'Product' },
  },
  {
    path: '/catalog',
    name: 'product-catalog',
    component: () => import('@/app/products_service/pages/CatalogPage.vue'),
    props: { title: 'Catalog'}
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/components/placeholder_page.vue'),
    props: { title: 'Cart' },
  },
  {
    path: '/orders',
    name: 'order',
    component: () => import('@/components/placeholder_page.vue'),
    props: { title: 'Orders' },
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/app/auth_service/SignInView.vue'),
    props: { title: 'Login' },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/app/auth_service/RegisterView.vue'),
    props: { title: 'Register' },
  },
  {
    path: '/auth',
    redirect: '/signin'
  },
  {
    path: '/employee',
    name: 'employee',
    component: () => import('@/components/placeholder_page.vue'),
    props: { title: 'Employee' },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/components/placeholder_page.vue'),
    props: { title: 'Admin' },
  },
  {
    path: '/health',
    name: 'health',
    component: () => import('@/components/placeholder_page.vue'),
    props: { title: 'Health' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/components/placeholder_page.vue'),
    props: { title: '404 — Page Not Found' },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
