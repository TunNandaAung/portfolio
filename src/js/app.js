import { createApp } from 'vue';
import NavDrawer from './components/NavigationDrawer.vue'
import ScrollLink from './components/ScrollLink.vue'
import inViewport from 'in-viewport'
import TransformContent from './components/TransformContent'
import ThemeSwitcher from './components/ThemeSwitcher'
import VueScrollReveal from 'vue-scroll-reveal'


const el = document.getElementById("app");

const app = createApp({
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
        // this.loadSVG("img/landing-bg.svg");
        this.registerWorker();
    },

    methods: {
        loadSVG(img) {
            let url = `${img}?r=` + Math.random()
            document.querySelector('#landing-bg').setAttribute("src", url);
        },
        registerWorker() {
            if (navigator.serviceWorker) {
                navigator.serviceWorker.register('/sw.js').then(registration => {
                    console.log('ServiceWorker registration successful with scope:', registration.scope);
                }).catch(error => {
                    console.log('ServiceWorker registration failed:', error);
                });
            }
        }
    }

});

app.mount('#app');

// app.use(VueScrollReveal);
