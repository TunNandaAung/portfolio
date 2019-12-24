import Vue from 'vue';
import NavDrawer from './components/NavigationDrawer.vue'
import ScrollLink from './components/ScrollLink.vue'

window.Vue = Vue;


const app = new Vue({
    el: '#app',

    components: {
        NavDrawer,
        ScrollLink
    }
});
