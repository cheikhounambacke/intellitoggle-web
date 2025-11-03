<template>
  <section class="flex relative mt-[64px] min-h-[calc(100vh-64px)] text-white">
    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/hero-bg.svg')"
    ></div>

    <div
      class="w-full h-full absolute z-10 flex flex-col justify-between gap-12 pt-12"
    >
      <!-- content -->
      <div
        class="max-w-2xl mx-auto text-center flex flex-col items-center gap-4"
      >
        <h1 class="leading-normal tracking-widest text-3xl font-bold">
          The First
          <span class="rounded-lg text-primary bg-accent px-4 py-2"
            >Dart-Native</span
          >
          Feature Flag With DartCode Ai
        </h1>
        <p class="max-w-xs text-center text-md tracking-tighter leading-tight">
          Feature flags built for Dart, ship faster, roll back safely, and scale
          with Ai-powered delivery
          <span class="text-accent">starting at just $1/month</span>
        </p>

        <div class="mt-4">
          <div class="flex justify-between items-center gap-4">
            <div class="text-left flex flex-col gap-2">
              <p class="text-xs text-white/80">Valid until September,2025</p>
              <BaseButton>Get Access</BaseButton>
            </div>
            <SecondaryButton customClass="self-end border-accent border"
              >Join Ai Early Access
            </SecondaryButton>
          </div>
        </div>
      </div>

      <!-- gif image-->
      <div class="max-w-5xl mx-auto">
        <img class="w-full h-auto" src="/dashboard.gif" />
      </div>
    </div>
  </section>
</template>
