import Vue from 'vue';
import NavDrawer from './components/NavigationDrawer.vue'
import ScrollLink from './components/ScrollLink.vue'
import inViewport from 'in-viewport'
import TransformContent from './components/TransformContent'
import ThemeSwitcher from './components/ThemeSwitcher'
import VueScrollReveal from 'vue-scroll-reveal'


window.Vue = Vue

Vue.use(VueScrollReveal)


const app = new Vue({
    el: '#app',

    components: {
        NavDrawer,
        ScrollLink,
        TransformContent,
        ThemeSwitcher
    },
    mounted() {
        let indicator = document.querySelector('#indicator')
        let contactTitle = document.querySelector('#contact-title')

        window.addEventListener('scroll', () => {
            !inViewport(
                document.querySelector('#home')
            ) ? (indicator.classList.contains('is-hiding')
                ? indicator.classList.replace('is-hiding', 'is-floating')
                : indicator.classList.add('is-floating')
                )
                : indicator.classList.replace('is-floating', 'is-hiding');

            // inViewport(
            //     document.querySelector('#contact')
            // ) ? console.log('transform') : contactTitle.classList.remove('transform');

        }, { passive: true });
        this.loadSVG("img/landing-bg.svg");
    },

    methods: {
        loadSVG(img) {
            let url = `${img}?r=` + Math.random()
            document.querySelector('#landing-bg').setAttribute("src", url);
        }
    }

})
