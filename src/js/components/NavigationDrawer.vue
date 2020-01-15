<template>
  <div v-cloak>
    <div id="nav" class="bg-header">
      <div class>
        <nav class="relative flex flex-wrap items-center justify-between md:py-4">
          <div class="relative z-10 py-4 -pl-12 md:p-0">
            <a href="#">
              <img class="h-16 lg:h-24" src="/img/isolated-logo.svg" alt="Logo" />
            </a>
          </div>

          <div class="flex-shrink-0 md:hidden">
            <!-- <button
              ref="openButton"
              @click="open"
              type="button"
              class="block text-default focus:outline-none focus:text-focus"
              aria-label="Menu"
            >
              <svg class="h-8 w-8 text-default" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                />
                <path
                  d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                />
                <path
                  d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z"
                />
              </svg>
            </button>-->
            <div class="navigation">
              <input
                type="checkbox"
                class="navigation__checkbox"
                ref="navCheckBox"
                v-model="checked"
                hidden
              />
              <button
                ref="openButton"
                @click="toggle"
                type="button"
                class="block text-default focus:outline-none focus:text-focus navigation__button"
                aria-label="Menu"
              >
                <span class="navigation__icon">&nbsp;</span>
              </button>

              <!-- <transition
                enter-class="scale-0"
                enter-active-class="ease-in-out-quint transition-slowest"
                enter-to-class="w-full"
                leave-class="w-full"
                leave-active-class="ease-in-out-quint transition-slowest"
                leave-to-class="scale-0"
                appear
              >
                <div
                  class="navigation__background scale-80 transition-transform"
                  v-show="isOpen"
                >&nbsp;</div>
              </transition>-->
              <div class="navigation__background transition-transform">&nbsp;</div>

              <transition
                enter-class="opacity-0 translate-x-full"
                enter-active-class="ease-in-out-bounce transition-slowest"
                enter-to-class="opacity-100 translate-x-0"
                leave-class="opacity-100 translate-x-0"
                leave-active-class="ease-in-out-bounce translate-x-full transition-slowest"
                leave-to-class="opacity-0"
                appear
              >
                <nav class="navigation__nav transition-all" v-show="isOpen">
                  <ul class="navigation__list">
                    <li class="navigation__item" @click="close">
                      <scroll-link href="#home" class="navigation__link">Home</scroll-link>
                    </li>
                    <li class="navigation__item" @click="close">
                      <scroll-link href="#skills" class="navigation__link">Skills</scroll-link>
                    </li>
                    <li class="navigation__item" @click="close">
                      <scroll-link href="#contact" class="navigation__link">Contact</scroll-link>
                    </li>
                    <li class="navigation__item pt-2">
                      <theme-switcher></theme-switcher>
                    </li>
                  </ul>
                </nav>
              </transition>
            </div>
          </div>

          <div
            class="hidden md:block md:ml-10 md:flex md:items-baseline md:justify-between md:bg-transparent"
          >
            <div class="lg:absolute inset-0 flex items-center justify-center">
              <a href="#" class="text-xl font-bold text-default hover:text-link p-2 nav-link">Home</a>
              <scroll-link
                href="#skills"
                class="ml-10 text-xl font-bold text-default hover:text-link p-2 nav-link"
              >Skills</scroll-link>
              <scroll-link
                href="#contact"
                class="ml-10 text-xl font-bold text-default hover:text-link p-2 nav-link"
              >Contact</scroll-link>
            </div>

            <div class="ml-10 relative flex items-baseline">
              <theme-switcher></theme-switcher>
            </div>
          </div>
        </nav>
      </div>

      <!-- <div class="md:hidden">
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
          appear
        >
          <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
            <div @click="close" class="absolute inset-0 bg-black opacity-50" tabindex="-1"></div>
          </div>
        </transition>

        <transition
          enter-class="translate-x-full"
          enter-active-class="ease-out transition-slow"
          enter-to-class="translate-x-0"
          leave-class="translate-x-0"
          leave-active-class="ease-in transition-medium"
          leave-to-class="translate-x-full"
          appear
        >
          <div
            v-show="isOpen"
            class="z-10 fixed inset-y-0 right-0 max-w-xs w-full bg-header transition-transform overflow-y-auto"
          >
            <div class="relative z-10 bg-header">
              <div :class="isOpen ? 'block' : 'hidden'" class="absolute top-0 right-0 p-4">
                <button
                  ref="closeButton"
                  @click="close"
                  type="button"
                  class="text-default focus:outline-none focus:text-focus pt-4"
                  aria-label="Close"
                >
                  <svg class="h-6 w-6 text-default" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z"
                    />
                  </svg>
                </button>
              </div>

              <div class="px-4 pt-4 pb-6">
                <a href="#">
                  <img class="-px-8 h-16 lg:h-24" src="/img/isolated-logo.svg" alt="Logo" />
                </a>

                <a
                  href="#"
                  class="mt-4 block font-medium text-default hover:text-hover text-xl"
                >Home</a>
                <scroll-link
                  href="#skills"
                  class="mt-4 block font-medium text-default hover:text-hover text-xl"
                >Skills</scroll-link>
                <scroll-link
                  href="#contact"
                  class="mt-4 block font-medium text-default hover:text-hover text-xl"
                >Contact</scroll-link>
              </div>
            </div>

            <div class="relative bg-header px-4">
              <theme-switcher></theme-switcher>
            </div>
          </div>
        </transition>
      </div>-->

      <slot></slot>
    </div>
  </div>
</template>

<script>
import ScrollLink from "./ScrollLink";
import ThemeSwitcher from "./ThemeSwitcher";

export default {
  components: {
    ScrollLink,
    ThemeSwitcher
  },
  data() {
    return {
      isOpen: false,
      checked: false
    };
  },

  methods: {
    toggle() {
      this.isOpen ? this.close() : this.open();
    },
    open() {
      this.isOpen = true;
      this.checked = true;
      // this.$nextTick(() => {
      //   this.$refs.closeButton.focus();
      // });
    },
    close() {
      this.isOpen = false;
      this.checked = false;
      this.$refs.navCheckBox.checked = false;
      // this.$nextTick(() => {
      //   this.$refs.openButton.focus();
      // });
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (isOpen) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      }
    }
  }
};
</script>
