<template>
  <button
    :class="[
      'bg-accent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-accent/80 transition-colors text-sm ',
      customClass,
    ]"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  customClass: {
    type: String,
    default: "",
  },
});
</script>
