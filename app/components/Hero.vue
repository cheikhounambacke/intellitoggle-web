<template>
  <section
    class="relative mt-[64px] min-h-[calc(100vh-64px)] flex flex-col text-white overflow-hidden"
  >
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/hero-bg.svg')"
    ></div>

    <!-- Hero -->
    <div
      class="leading-relaxed relative z-10 flex flex-col flex-1 gap-12 pt-12 px-6 text-center"
    >
      <div class="max-w-3xl mx-auto flex flex-col items-center gap-4 leading-6">
        <h1 class="tracking-widest text-2xl md:text-3xl font-bold">
          The First
          <span class="rounded-lg text-primary bg-accent mx-2 px-3 py-1.5">
            Dart-Native
          </span>
          Feature Flag With DartCode Ai
        </h1>

        <p
          class="max-w-sm sm:max-w-md text-center text-sm sm:text-base leading-snug"
        >
          Feature flags built for Dart, ship faster, roll back safely, and scale
          with Ai-powered delivery
          <span class="w-full text-accent">starting at just $1/month</span>
        </p>

        <!-- Buttons -->
        <div class="mt-4 flex flex-col sm:flex-row gap-4">
          <div class="text-left flex flex-col gap-2">
            <p class="text-xs text-white/80">Valid until September, 2025</p>
            <BaseButton class="sm:w-full">Get Access</BaseButton>
          </div>
          <SecondaryButton
            customClass=" bg-transparent border-accent border self-end "
          >
            Join Ai Early Access
          </SecondaryButton>
        </div>
      </div>

      <!-- GIF -->
      <div class="max-w-4xl mx-auto flex justify-center flex-1 shrink">
        <img
          class="h-full w-full object-contain"
          src="/dashboard.gif"
          alt="Animated dashboard preview"
        />
      </div>
    </div>
  </section>
</template>
