import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  { path: '/', name: 'index', component: page('index.vue') },
  { path: '/about', name: 'about', component: page('about.vue') },
  { path: '/contact', name: 'about', component: page('contact.vue') },
  { path: '/login', name: 'about', component: page('login.vue') },

]

export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  })
}