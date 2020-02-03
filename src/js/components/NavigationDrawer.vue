<template>
  <div v-cloak>
    <div>
      <div id="nav" class="bg-header">
        <nav class="relative flex flex-wrap items-center justify-between md:py-4">
          <div class="relative z-10 py-4 -pl-12 md:p-0 logo">
            <a href="#">
              <img class="h-16 lg:h-24 logo-icon" src="/img/isolated-logo.svg" alt="Logo" />
            </a>
          </div>

          <div
            class="hidden md:block md:ml-10 md:flex md:items-baseline md:justify-between md:bg-transparent"
          >
            <div class="lg:absolute inset-0 flex items-center justify-center">
              <div class="nav-lg-list nav-lg">
                <scroll-link href="#" class="font-bold text-2xl nav-lg-item">
                  Home
                  <span class="mask">
                    <span>Home</span>
                  </span>
                  <span class="mask">
                    <span>Home</span>
                  </span>
                </scroll-link>

                <scroll-link href="#skills" class="ml-10 text-2xl font-bold nav-lg-item">
                  Skills
                  <span class="mask">
                    <span>Skills</span>
                  </span>
                  <span class="mask">
                    <span>Skills</span>
                  </span>
                </scroll-link>
                <scroll-link href="#contact" class="ml-10 text-2xl font-bold nav-lg-item">
                  Contact
                  <span class="mask">
                    <span>Contact</span>
                  </span>
                  <span class="mask">
                    <span>Contact</span>
                  </span>
                </scroll-link>
              </div>
            </div>

            <div class="ml-10 relative flex items-baseline">
              <theme-switcher v-if="!isOpen"></theme-switcher>
            </div>
          </div>
        </nav>
      </div>

      <slot></slot>
    </div>
    <div class="flex-shrink-0 md:hidden">
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
                <scroll-link href="#home" class="navigation__link">
                  Home
                  <span class="mask">
                    <span>Home</span>
                  </span>
                  <span class="mask">
                    <span>Home</span>
                  </span>
                </scroll-link>
              </li>
              <li class="navigation__item" @click="close">
                <scroll-link href="#skills" class="navigation__link">
                  Skills
                  <span class="mask">
                    <span>Skills</span>
                  </span>
                  <span class="mask">
                    <span>Skills</span>
                  </span>
                </scroll-link>
              </li>
              <li class="navigation__item" @click="close">
                <scroll-link href="#contact" class="navigation__link">
                  Contact
                  <span class="mask">
                    <span>Contact</span>
                  </span>
                  <span class="mask">
                    <span>Contact</span>
                  </span>
                </scroll-link>
              </li>
              <li class="navigation__item pt-4">
                <theme-switcher v-if="isOpen"></theme-switcher>
              </li>
            </ul>
          </nav>
        </transition>
      </div>
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
