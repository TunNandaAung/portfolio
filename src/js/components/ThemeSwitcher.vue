<template>
  <div class="flex items-center">
    <button
      v-for="(color, theme) in themes"
      :key="theme"
      class="rounded-full w-6 h-6 lg:w-8 lg:h-8 bg-default border-4 focus:outline-none mr-2"
      :class="{ 'border-accent': selectedTheme == theme }"
      :style="{ backgroundColor: color }"
      @click="selectedTheme = theme"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: {
        "theme-light": "#f5f6f9",
        "theme-dark": "#222"
      },
      selectedTheme: "theme-dark"
    };
  },

  created() {
    this.selectedTheme = localStorage.getItem("theme") || "theme-dark";
  },

  watch: {
    selectedTheme() {
      document.body.className = document.body.className.replace(
        /theme-\w+/,
        this.selectedTheme
      );

      localStorage.setItem("theme", this.selectedTheme);
    }
  }
};
</script>
