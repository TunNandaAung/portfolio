<template>
  <div :id="id">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["id", "observe"],

  mounted() {
    let section = document.querySelector(`#${this.id}`);

    let observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          section.classList.add("transform");
        } else {
          section.classList.remove("transform");
        }
      },
      {
        threshold: 0.25
      }
    );
    observer.observe(document.querySelector(`#${this.observe}`));
  }
};
</script>

<style>
</style>