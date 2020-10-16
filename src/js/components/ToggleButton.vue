<template>
  <span
    class="toggle"
    role="checkbox"
    tabindex="0"
    @click="toggle"
    @keydown.space.prevent="toggle"
    :aria-checked="toggled.toString()"
  ></span>
</template>

<script>
export default {
  props: ["toggled"],
  methods: {
    toggle() {
      this.$emit("update:toggled", !this.toggled);
    },
  },
};
</script>
