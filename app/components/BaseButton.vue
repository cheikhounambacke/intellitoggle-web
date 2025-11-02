<template>
  <button
    :class="[
      'bg-accent text-primary font-semibold px-4 py-2 rounded-lg hover:bg-accent/80 transition-colors',
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
