// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [

        // New

        {
          path: '',
          name: 'Accueil',
          component: () => import('@/views/Accueil.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },
        {
          path: 'services',
          name: 'Nos services',
          component: () => import('@/views/Services.vue'),
          meta: { src: require('@/assets/contact.jpg') },
        },
        {
          path: 'about',
          name: 'À propos',
          component: () => import('@/views/About.vue'),
          meta: { src: require('@/assets/about.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },
      ],
    },

  ],
})

export default router
