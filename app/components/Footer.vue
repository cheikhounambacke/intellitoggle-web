<template>
  <footer class="bg-[#EDECF6] text-[#0E121B] py-12 px-6">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
    >
      <!-- 🏢 About Section -->
      <div>
        <img src="/logo-dark.png" alt="IntelliToggle Logo" class="h-10 mb-4" />
        <p class="text-sm text-[#0E121B]/50 leading-relaxed">
          IntelliToggle helps developers ship features faster with precise
          control and visibility. Manage flags, experiments, and releases with
          ease.
        </p>
      </div>

      <!-- 🔗 Resources + Company -->
      <div class="flex justify-between md:justify-around gap-10">
        <!-- Resources -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-[#0E121B]/50">
            Resources
          </h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="/terms" class="hover:underline">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy" class="hover:underline">Privacy Policy</a>
            </li>
            <li><a href="/security" class="hover:underline">Security</a></li>
            <li><a href="/support" class="hover:underline">Support</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-[#0E121B]/50">Company</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/" class="hover:underline">Pricing</NuxtLink></li>
            <li>
              <NuxtLink to="/" class="hover:underline">Documentation</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/" class="hover:underline">About Us</NuxtLink>
            </li>
            <li><NuxtLink to="/" class="hover:underline">Careers</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- 📨 Newsletter -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
        <p class="text-sm text-gray-500 mb-4">
          Get the latest updates, insights, and feature releases directly in
          your inbox.
        </p>
        <form class="flex flex-row items-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            class="shrink w-full px-3 py-2 rounded-md text-[#0E121B] focus:outline-none"
          />
          <button
            type="submit"
            class="shrink bg-accent hover:bg-accent/80 px-4 py-2 rounded-md text-[#0E121B] font-semibold transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
