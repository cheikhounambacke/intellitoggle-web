<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white text-primary shadow-md' : 'bg-primary text-white',
    ]"
  >
    <nav
      class="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-4"
    >
      <!-- Left: Logo -->
      <NuxtLink class="flex items-center" to="/">
        <img
          :src="isScrolled ? '/logo-dark.png' : '/logo-white.png'"
          class="h-8 w-auto"
        />
      </NuxtLink>

      <!-- Middle: Nav Links (Desktop) -->
      <ul class="hidden md:flex space-x-8 font-medium">
        <li>
          <NuxtLink to="/" class="hover:opacity-80 transition-colors"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/about" class="hover:opacity-80 transition-colors"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/pricing" class="hover:opacity-80 transition-colors"
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
            class="h-8 w-8"
            :class="isScrolled ? 'text-primary' : 'text-white'"
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
            class="h-8 w-8"
            :class="isScrolled ? 'text-black' : 'text-accent'"
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

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden w-full transition-colors"
        :class="isScrolled ? 'bg-white text-black' : 'bg-primary text-white'"
      >
        <ul class="flex flex-col space-y-4 p-6">
          <li>
            <NuxtLink to="/" class="hover:opacity-80 transition-opacity"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="hover:opacity-80 transition-opacity"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/pricing" class="hover:opacity-80 transition-opacity"
              >Pricing</NuxtLink
            >
          </li>
          <li><BaseButton>Start Sandbox</BaseButton></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useScrollHeader } from "~/composables/useScrollHeader";

const isOpen = ref(false);
const { isScrolled } = useScrollHeader(64);
</script>
