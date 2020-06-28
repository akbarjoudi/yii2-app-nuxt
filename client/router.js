import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  { path: '/', name: 'index', component: page('index.vue') },
  { path: '/about', name: 'about', component: page('about.vue') },

]

export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  })
}