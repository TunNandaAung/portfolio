import Vue from 'vue';
import NavDrawer from './components/NavigationDrawer.vue'
import ScrollLink from './components/ScrollLink.vue'
import inViewport from 'in-viewport'
import TransformContent from './components/TransformContent'

window.Vue = Vue;


const app = new Vue({
    el: '#app',

    components: {
        NavDrawer,
        ScrollLink,
        TransformContent
    },
    mounted() {
        let indicator = document.querySelector('#indicator')
        let contactTitle = document.querySelector('#contact-title')

        window.addEventListener('scroll', () => {
            !inViewport(
                document.querySelector('#home')
            ) ? indicator.classList.add('is-floating') : indicator.classList.remove('is-floating');

            // inViewport(
            //     document.querySelector('#contact')
            // ) ? console.log('transform') : contactTitle.classList.remove('transform');

        }, { passive: true });
    }
})
