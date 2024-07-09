<template>
  <nav class="flex px-4 py-4" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li v-for="page in breadcrumbs" :key="page.name">
        <div class="flex items-center">
          <div v-if="page.name !== 'Tools'">
            <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          </div>
          <a :href="page.href" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import { defineProps } from 'vue'

const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }
})
</script>
