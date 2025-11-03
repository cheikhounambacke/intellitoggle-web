<template>
  <section class="bg-white py-12 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-semibold text-center mb-8">
        Trusted by various engineering teams
      </h2>

      <Swiper
        :modules="[Autoplay]"
        :slides-per-view="5"
        :space-between="30"
        :loop="true"
        :free-mode="true"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }"
        speed="6000"
        class="cursor-grab"
      >
        <!-- Duplicate slides for seamless loop -->
        <SwiperSlide
          v-for="(brand, index) in repeatedBrands"
          :key="index"
          class="flex justify-center items-center"
        >
          <img
            :src="brand"
            :alt="`Brand ${index + 1}`"
            class="h-12 w-auto object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
// Swiper Vue components
import { Swiper, SwiperSlide } from "swiper/vue";
// Swiper modules
import { Autoplay } from "swiper/modules";
// Swiper styles
import "swiper/css";

// Original brands
const brands = ref(
  Array.from({ length: 5 }, (_, i) => `/brands/brand-${i + 1}.png`)
);

// Duplicate brands to make loop seamless
const repeatedBrands = computed(() => [...brands.value, ...brands.value]);
</script>
