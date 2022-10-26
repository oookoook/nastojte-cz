import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './style.css';
import '../assets/favicon.ico';

//import 'bootstrap';

import Vue from 'vue';
//import { BootstrapVue } from 'bootstrap-vue'

import { ButtonPlugin, LayoutPlugin, CarouselPlugin, NavbarPlugin, 
  DropdownPlugin, BadgePlugin, PopoverPlugin, TooltipPlugin, CardPlugin, ImagePlugin, BIcon, BIconChevronDown } from 'bootstrap-vue'


import App from './App.vue';
import AboutMe from './AboutMe.vue';
//import AboutVonnegut from './AboutVonnegut.vue';
//import Article from './Article.vue';

//import VueResource from 'vue-resource';
//import VueTimers from 'vue-timers';
import VueRouter from 'vue-router'; 
import VueGtag from "vue-gtag";


// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue);
Vue.use(ButtonPlugin);
Vue.use(LayoutPlugin); 
Vue.use(CarouselPlugin);
Vue.use(NavbarPlugin);
Vue.use(DropdownPlugin);
Vue.use(BadgePlugin);
Vue.use(PopoverPlugin);
Vue.use(TooltipPlugin);
Vue.use(CardPlugin);
Vue.use(ImagePlugin);

Vue.component('BIcon', BIcon)
Vue.component('BIconChevronDown', BIconChevronDown)

//Vue.use(VueResource);
//Vue.use(VueTimers);
Vue.use(VueRouter);


// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ './views/help/About.vue')

const routes = [
  { path: '/', component: AboutMe },
  { path: '/vonnegut', component: () => import(/* webpackChunkName: "aboutVonnegut" */ './AboutVonnegut.vue') },
  { path: '/references', component: () => import(/* webpackChunkName: "references" */ './References.vue') },
  { path: '/tech', component: () => import(/* webpackChunkName: "tech" */ './Tech.vue') },
  { path: '/attributions', component: () => import(/* webpackChunkName: "attributions" */ './Attributions.vue') },
  { path: '/articles/:article', component: () => import(/* webpackChunkName: "article" */ './Article.vue'), meta: { waitForScroll: 200 } }
]

const router = new VueRouter({
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
        //alert(to.hash);
        //return { x: 0, y: 0 };
        let output = {selector: decodeURI(to.hash), behavior: 'smooth' };
        //console.debug('Analyzing path', to.path, from?.path, to.meta?.waitForScroll, savedPosition);
        if(to.meta?.waitForScroll) {
          //console.debug('Waiting for scroll');
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(output)
            }, to.meta?.waitForScroll)});
        }
        return output;
    } else {
        return { x: 0, y: 0 }
    }
  },
  mode: 'history',
  routes
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
