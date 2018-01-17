import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AdviserList from '@/components/AdviserList'
import AdviserDetail from '@/components/AdviserDetail'
import TripDetail from '@/components/TripDetail'
import AdviserVerify from '@/components/AdviserVerify'
import UserList from '@/components/UserList'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'v-active',
  routes: [
    {
      path: '/',
      redirect: '/adviserList'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/adviserList',
      name: '1',
      component: AdviserList
    },
    {
      path: '/adviserDetail/:lawId',
      name: 'adviserDetail',
      component: AdviserDetail
    },
    {
      path: '/tripDetail/:lawId/:tripNo',
      name: 'tripDetail',
      component: TripDetail
    },
    {
      path: '/adviserVerify',
      name: '2',
      component: AdviserVerify
    },
    {
      path: '/userList',
      name: '3',
      component: UserList
    }
  ]
})
