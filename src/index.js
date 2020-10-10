import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import '../assets/favicon.ico';

import 'bootstrap';

import Vue from 'vue';
import App from './App.vue';
import AboutMe from './AboutMe.vue';
//import AboutVonnegut from './AboutVonnegut.vue';
//import Article from './Article.vue';

import VueResource from 'vue-resource';
import VueTimers from 'vue-timers';
import VueRouter from 'vue-router'; 
import VueGtag from "vue-gtag";



Vue.use(VueResource);
Vue.use(VueTimers);
Vue.use(VueRouter);


// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ './views/help/About.vue')

const routes = [
  { path: '/', component: AboutMe },
  { path: '/vonnegut', component: () => import(/* webpackChunkName: "aboutVonnegut" */ './AboutVonnegut.vue') },
  { path: '/articles/:article', component: () => import(/* webpackChunkName: "article" */ './Article.vue') }
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
  mode: 'history',
  routes // short for `routes: routes`
})

Vue.use(VueGtag, {
  config: { id: "UA-171585960-1", 
    params: {
      send_page_view: true
    } 
  }}, router
);

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