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
  { path: '/', component: AboutMe },
  { path: '/vonnegut', component: AboutVonnegut }
]

const router = new VueRouter({
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
        //alert(to.hash);
        //return { x: 0, y: 0 };
        return {selector: to.hash, offset : { x: 0, y: 50 }}
    } else {
        return { x: 0, y: 0 }
    }
},
  routes // short for `routes: routes`
})

var app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  mounted () {
    document.dispatchEvent(new Event('render-event'));
  }
});

/* moved to the AboutMe.vue component
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $('.popover-dismiss').popover({trigger: 'focus'});
})
*/