<template>
  <div v-if="tool" class="px-8">
    <div class="mt-6">
      <dl class="grid grid-cols-1 sm:grid-cols-2">
        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Key Growth Strategies</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
            <ul class="list-disc pl-5">
              <li v-for="strategy in tool.strategies" :key="strategy">{{ strategy }}</li>
            </ul>
          </dd>
        </div>
        <div v-for="interview in tool.interviews" :key="interview.title" class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">{{ interview.title }}</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
            <div class="flex justify-center">
              <iframe class="w-full max-w-lg h-48" frameborder="no" scrolling="no" seamless :src="interview.src"></iframe>
            </div>
            <ul class="list-disc pl-5 mt-4">
              <li v-for="point in interview.points" :key="point">{{ point }}</li>
            </ul>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">More on {{ tool.name }}</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
            <ul class="list-disc pl-5">
              <li v-for="moreItem in tool.more" :key="moreItem.title">
                <a :href="moreItem.url">{{ moreItem.title }}</a>
              </li>
            </ul>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Official Links</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
            <ul class="list-disc pl-5">
              <li v-for="link in tool.links" :key="link.name">
                <a :href="link.url">{{ link.name }}</a>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
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

<style scoped>
a {
  color: #2563EB; 
  text-decoration: underline;
}

a:hover {
  color: #1E40AF; 
}

iframe {
  width: 100%;
  max-width: 100%;
  height: 180px;
}
</style>
