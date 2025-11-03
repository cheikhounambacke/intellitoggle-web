<template>
  <button
    :class="[
      'bg-transparent text-accent font-semibold px-4 py-2 rounded-lg hover:bg-primary/80  transition-colors text-xs',
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
