<template>
  <div class="flex items-center">
    <toggle-button v-model:toggled="enablesDarkTheme"></toggle-button>
  </div>
</template>

<script setup>
import { onMounted, watch, ref, computed } from "vue";
import ToggleButton from "./ToggleButton";

const enablesDarkTheme = ref(true);

onMounted(() => {
  selectedTheme.value = localStorage.getItem("theme") || systemTheme.value;
  enablesDarkTheme.value = selectedTheme.value === "theme-dark";
});

const systemTheme = computed(() =>
  localStorage.getItem("theme") === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? "dark"
    : "light"
);

watch(
  () => enablesDarkTheme.value,
  () => {
    selectedTheme.value = enablesDarkTheme.value ? "dark" : "light";

    const themeToRemove = enablesDarkTheme.value ? "light" : "dark";

    document.documentElement.classList.add(selectedTheme.value);
    document.documentElement.classList.remove(themeToRemove);

    localStorage.setItem("theme", selectedTheme.value);
  }
);
</script>
