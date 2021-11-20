import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Informasi from '../views/Informasi.vue'
import Kontak from '../views/Kontak.vue'

const routes = [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/kontak',
        name: 'Kontak',
        component: Kontak
      },
      {
        path: '/info',
        name: 'Informasi',
        component: Informasi,
      },
      {
        path: '/info2',
        name: 'Informasi2',
        component: () => import(/* webpackChunkName: "informasi" */ '../views/Informasi2.vue'),
      },
      {
        path: '/info3',
        name: 'Informasi3',
        component: () => import(/* webpackChunkName: "informasi" */ '../views/Informasi3.vue'),
      },
      {
        path: '/pre',
        name: 'Presensi',
        component: () => import(/* webpackChunkName: "informasi" */ '../layout/Presensi.vue'),
      },
      {
        path: '/pre2',
        name: 'Presensi2',
        component: () => import(/* webpackChunkName: "informasi" */ '../layout/Presensi2.vue'),
      },
      {
        path: '/stat',
        name: 'Statistika',
        component: () => import(/* webpackChunkName: "informasi" */ '../layout/Statistika.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ '../layout/Siswa.vue')
      },
      {
        path: '/profile2',
        name: 'Profile2',
        component: () => import(/* webpackChunkName: "profile" */ '../layout/Dosen.vue')
      },{
        path: '/profile3',
        name: 'Profile3',
        component: () => import(/* webpackChunkName: "profile" */ '../layout/Admin.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
