<template>
  <div class="flex items-center">
    <!-- <button
      v-for="(color, theme) in themes"
      :key="theme"
      class="rounded-full w-8 h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 bg-default border-4 focus:outline-none mr-2"
      :class="{ 'border-accent': selectedTheme == theme }"
      :style="{ backgroundColor: color }"
      @click="selectedTheme = theme"
    ></button>-->
    <toggle-button v-model="enablesDarkTheme"></toggle-button>
  </div>
</template>

<script>
import ToggleButton from "./ToggleButton";

export default {
  components: {
    ToggleButton
  },
  data() {
    return {
      themes: {
        "theme-light": "#f5f6f9",
        "theme-dark": "#222"
      },
      selectedTheme: "theme-dark",
      enablesDarkTheme: true
    };
  },

  created() {
    this.selectedTheme = localStorage.getItem("theme") || "theme-dark";
    this.enablesDarkTheme = this.selectedTheme === "theme-dark";
  },

  watch: {
    enablesDarkTheme() {
      this.selectedTheme = this.enablesDarkTheme ? "theme-dark" : "theme-light";

      document.body.className = document.body.className.replace(
        /theme-\w+/,
        this.selectedTheme
      );

      localStorage.setItem("theme", this.selectedTheme);
    }
  }
};
</script>
