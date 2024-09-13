<template>
  <NavBar />
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-left">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold text-gray-900">Upcoming DevTools events</h1>
        <p class="mt-2 text-sm text-gray-700">Email jack@scalingdevtools.com and I'll add your DevTools event to the list.</p>
      </div>
    </div>
    <div class="px-2 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-12 lg:gap-x-16">
            <ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
              <li v-for="event in events" :key="event.id" class="relative flex space-x-6 py-6 xl:static">
        
                <div class="flex-auto">
                  <h3 class="pr-10 font-semibold text-gray-900 xl:pr-0"><a :href="event.url">{{ event.name }}</a></h3>
                  <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                    <div class="flex items-start space-x-3">
                      <dt class="mt-0.5">
                        <span class="sr-only">Date</span>
                        <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd>
                        <time :datetime="event.datetime">{{ formatDateTime(event.datetime) }} ({{ event.timezone }})</time>
                      </dd>
                    </div>
                    <div class="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                      <dt class="mt-0.5">
                        <span class="sr-only">Location</span>
                        <MapPinIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd>{{ event.location }}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import NavBar from '~/components/NavBar.vue';
import { ref, onMounted } from 'vue';
import {
  CalendarIcon,
  MapPinIcon,
} from '@heroicons/vue/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { format, parseISO } from 'date-fns'
const events = ref([])
async function fetchEvents() {
    try {
        const response = await fetch('/api/get-events')
        if (!response.ok) throw new Error('Network response was not ok')
        const data = await response.json()
        console.log(data)
        events.value = data
    } catch(error) {
        console.error("Error fetching events ", error)
    }
}
onMounted(() => {
    fetchEvents()
})

function formatDateTime(datetime) {
  const date = parseISO(datetime)
  return format(date, "MMMM d'th', yyyy 'at' h:mm a")
}

useSeoMeta({
  titleTemplate: '%s · Scaling Devtools',
  title: 'Events',
})
</script>