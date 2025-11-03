<template>
  <section class="bg-white py-12 px-6 text-[#0E121B]">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-2xl font-semibold text-center mb-10">
        Control & Power-focused
      </h1>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
      >
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col gap-3 bg-white w-full max-w-[420px]"
        >
          <img :src="step.img" class="w-full object-contain mx-auto" />
          <h2 class="text-xl font-medium text-center md:text-left">
            {{ step.title }}
          </h2>
          <p
            class="text-sm font-normal text-[#0E121B]/50 text-center md:text-left"
          >
            {{ step.description }}
          </p>
          <BaseButton
            customClass="bg-transparent border border-accent text-yellow-400 hover:bg-accent hover:text-primary w-fit mx-auto md:mx-0"
          >
            View Documentation
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    img: "/step-1.png",
    title: "Connect",
    description: "Install SDK in your Dart project in 2 mins.",
  },
  {
    img: "/step-2.png",
    title: "Create Flags",
    description: "Define features in IntelliToggle dashboard.",
  },
  {
    img: "/step-3.png",
    title: "Ship & Control",
    description: "Flip switches anytime, see instant results.",
  },
];
</script>
