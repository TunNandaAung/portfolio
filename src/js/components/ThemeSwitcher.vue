<template>
  <div class="flex items-center">
    <toggle-button v-model:toggled="enablesDarkTheme"></toggle-button>
  </div>
</template>

<script>
import { onMounted, watch, ref } from "vue";
import ToggleButton from "./ToggleButton";

export default {
  components: {
    ToggleButton,
  },
  setup(props) {
    const color = ref("red");
    const themes = ref({
      "theme-light": "#f5f6f9",
      "theme-dark": "#222",
    });
    const selectedTheme = ref("theme-dark");
    const enablesDarkTheme = ref(true);

    onMounted(() => {
      selectedTheme.value = localStorage.getItem("theme") || "theme-dark";
      enablesDarkTheme.value = selectedTheme.value === "theme-dark";
    });

    watch(
      () => enablesDarkTheme.value,
      () => {
        selectedTheme.value = enablesDarkTheme.value
          ? "theme-dark"
          : "theme-light";
        document.body.className = document.body.className.replace(
          /theme-\w+/,
          selectedTheme.value
        );

        localStorage.setItem("theme", selectedTheme.value);
      }
    );

    return {
      selectedTheme,
      enablesDarkTheme,
    };
  },
};
</script>
