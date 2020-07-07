import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')
const LayoutsFront = () => import('@/containers/Layouts')

// Views
const Home = () => import('@/views/pages/home/Home')
const Product = () => import('@/views/pages/product/Index')
const Aboutus = () => import('@/views/pages/aboutus/Index')


const Welcome = () => import('@/views/pages/Welcome')
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes() {
  return [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: LayoutsFront,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/product',
          name: 'Product',
          component: Product
        },
        {
          path: '/aboutus',
          name: 'Aboutus',
          component: Aboutus
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: TheContainer,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'Welcome',
          component: Welcome
        },
        // {
        //   path: '/',
        //   redirect: '/',
        //   name: 'Theme',
        //   component: {
        //     render(c) { return c('router-view') }
        //   },
        //   children: [
        //     {
        //       path: '/',
        //       name: 'Home',
        //       component: Home
        //     },
        //   ]
        // },
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: '*',
          name: 'Page-404',
          component: Page404
        },
      ]
    },
  ]
}

