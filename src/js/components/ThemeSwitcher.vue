<template>
  <div class="flex items-center">
    <toggle-button v-model:toggled="enablesDarkTheme"></toggle-button>
  </div>
</template>

<script>
import ToggleButton from "./ToggleButton";

export default {
  components: {
    ToggleButton,
  },
  data() {
    return {
      themes: {
        "theme-light": "#f5f6f9",
        "theme-dark": "#222",
      },
      selectedTheme: "theme-dark",
      enablesDarkTheme: true,
    };
  },

  mounted() {
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
    },
  },
};
</script>
