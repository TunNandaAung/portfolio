import Vue from 'vue';
import NavDrawer from './components/NavigationDrawer.vue'

window.Vue = Vue;


const app = new Vue({
    el: '#app',

    components: {
        NavDrawer
    }
});
