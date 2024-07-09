<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Scaling DevTools</h2>
      <p class="mt-2 text-lg leading-8 text-gray-600">Let us know how we can help</p>
    </div>
    <div class="mx-auto mt-20 max-w-lg space-y-16">
      <div class="flex gap-x-6">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
          <ChatBubbleLeftRightIcon class="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 class="text-base font-semibold leading-7 text-gray-900">Appear on the show as a guest</h3>
          <p class="mt-2 leading-7 text-gray-600">Interested in being a guest on our show? Let me know</p>
          <p class="mt-4">
            <a href="mailto:jack@bitreach.io?subject=Appear on the Show as a Guest" class="text-sm font-semibold leading-6 text-indigo-600">Contact us <span aria-hidden="true">&rarr;</span></a>
          </p>
        </div>
      </div>
      <div class="flex gap-x-6">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
          <ChatBubbleLeftRightIcon class="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 class="text-base font-semibold leading-7 text-gray-900">Feedback</h3>
          <p class="mt-2 leading-7 text-gray-600">Any topics you'd like to hear? Things you'd like to change?</p>
          <p class="mt-4">
            <a href="mailto:jack@bitreach.io?subject=Feedback" class="text-sm font-semibold leading-6 text-indigo-600">Send Feedback <span aria-hidden="true">&rarr;</span></a>
          </p>
        </div>
      </div>
      <div class="flex gap-x-6">
        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
          <ChatBubbleLeftRightIcon class="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <h3 class="text-base font-semibold leading-7 text-gray-900">All Other Stuff</h3>
          <p class="mt-2 leading-7 text-gray-600">For all other inquiries, including sponsorship opportunities, please reach out to us.</p>
          <p class="mt-4">
            <a href="mailto:jack@bitreach.io?subject=General Inquiry" class="text-sm font-semibold leading-6 text-indigo-600">Contact us <span aria-hidden="true">&rarr;</span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
</script>
