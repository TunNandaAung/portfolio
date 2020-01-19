<template>
  <div :id="id" v-show="shouldDisplay">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["id", "observe"],
  data() {
    return {
      shouldDisplay: false
    };
  },
  mounted() {
    let section = document.querySelector(`#${this.id}`);

    let observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.shouldDisplay = true;
          section.classList.add("transform");
        } else {
          section.classList.remove("transform");
        }
      },
      {
        threshold: 0.75
      }
    );
    observer.observe(document.querySelector(`#${this.observe}`));
  }
};
</script>

<style>
</style>