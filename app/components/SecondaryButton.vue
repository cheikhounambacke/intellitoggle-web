<template>
  <button
    :class="[
      'border border-accent text-accent font-semibold px-3 py-1.5 rounded-md hover:bg-accent/10 transition-all text-xs sm:text-sm shadow-sm',
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
