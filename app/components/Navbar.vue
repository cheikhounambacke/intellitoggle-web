<template>
  <header class="bg-primary text-white fixed top-0 left-0 right-0 z-50">
    <nav
      class="max-w-8xl mx-auto flex items-center justify-between px-6 md:px-8 py-4"
    >
      <!-- Left: Logo (SVG Inline) -->
      <NuxtLink class="flex items-center" to="/">
        <img src="/logo-white.png" class="h-8 w-auto" />
      </NuxtLink>

      <!-- Middle: Nav Links (Desktop) -->
      <ul class="hidden md:flex space-x-8 font-medium">
        <li>
          <NuxtLink to="/" class="hover:text-white/80 transition-colors"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/about" class="hover:text-white/80 transition-colors"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/pricing" class="hover:text-white/80 transition-colors"
            >Pricing</NuxtLink
          >
        </li>
      </ul>

      <!-- Right: Button (Desktop) -->
      <div class="hidden md:flex">
        <BaseButton>Start Sandbox</BaseButton>
      </div>

      <!-- Hamburger Menu (Mobile) -->
      <div class="md:hidden">
        <button @click="isOpen = !isOpen" class="focus:outline-none">
          <!-- Hamburger Icon -->
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <!-- Close Icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu with Fade + Slide -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-primary text-white w-full">
        <ul class="flex flex-col space-y-4 p-6">
          <li class="opacity-0 animate-fade-in delay-75">
            <NuxtLink to="/" class="hover:text-white/80 transition-opacity"
              >Home</NuxtLink
            >
          </li>
          <li class="opacity-0 animate-fade-in delay-150">
            <NuxtLink to="/about" class="hover:text-white/80 transition-opacity"
              >About</NuxtLink
            >
          </li>
          <li class="opacity-0 animate-fade-in delay-225">
            <NuxtLink
              to="/pricing"
              class="hover:text-white/80 transition-opacity"
              >Pricing</NuxtLink
            >
          </li>
          <li class="opacity-0 animate-fade-in delay-300">
            <BaseButton>Start Sandbox</BaseButton>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style>
/* Tailwind fade-in animation */
</style>
