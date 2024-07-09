<template>
  <div v-if="tool" class="px-8 md:flex md:items-center md:justify-between md:space-x-5">
    <div class="flex items-start space-x-5">
      <div class="flex-shrink-0">
        <div class="relative">
          <img class="h-16 w-16 rounded-full" :src="tool.image" alt="" />
          <span class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
        </div>
      </div>
      <div class="pt-1.5">
        <h1 class="text-2xl font-bold text-gray-900">{{ tool.name }}</h1>
        <p class="text-sm font-medium text-gray-500">{{ tool.description }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  tool: {
    type: Object,
    required: true
  }
})
</script>
