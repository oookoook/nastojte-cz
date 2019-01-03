import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import '../assets/favicon.ico';

import 'bootstrap';

import Vue from 'vue';
import App from './App.vue';
import AboutMe from './AboutMe.vue';
import AboutVonnegut from './AboutVonnegut.vue';

import VueResource from 'vue-resource';
import VueTimers from 'vue-timers';
import VueRouter from 'vue-router'; 

Vue.use(VueResource);
Vue.use(VueTimers);
Vue.use(VueRouter);

const routes = [
  { path: '/about', component: AboutMe },
  { path: '/vonnegut', component: AboutVonnegut }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

var app = new Vue({
  el: '#app',
  render: h => h(App),
  router
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
