<template>
  <button
    :class="[
      'bg-accent text-primary font-semibold px-3 py-1.5 rounded-md hover:bg-accent/90 transition-all text-xs sm:text-sm shadow-sm',
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
