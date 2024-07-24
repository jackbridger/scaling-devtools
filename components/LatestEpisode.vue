<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p class="text-base font-semibold leading-7 text-green-600">Podcast</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Episode</h1>
      <iframe class="mt-6 text-xl leading-8" width="100%" height="180" frameborder="no" scrolling="no" seamless="" src="https://share.transistor.fm/e/scaling-devtools/latest"></iframe>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/20/solid'
</script>