import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import NovaReserva from '@/components/NovaReserva'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/nova-reserva',
      name: 'NovaReserva',
      component: NovaReserva
    }
  ]
})
