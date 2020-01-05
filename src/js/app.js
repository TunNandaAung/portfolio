import Vue from 'vue';
import NavDrawer from './components/NavigationDrawer.vue'
import ScrollLink from './components/ScrollLink.vue'
import inViewport from 'in-viewport'

window.Vue = Vue;


const app = new Vue({
    el: '#app',

    components: {
        NavDrawer,
        ScrollLink
    },
    mounted() {
        let indicator = document.querySelector('#indicator')
        console.log(indicator)
        window.addEventListener('scroll', () => {
            !inViewport(
                document.querySelector('#home')
            ) ? indicator.classList.add('is-floating') : indicator.classList.remove('is-floating');

        }, { passive: true });
    }
})
