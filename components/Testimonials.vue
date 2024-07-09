<template>
  <div class="relative isolate bg-white pb-32 pt-24 sm:pt-32">
    <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true">
      <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#22FF95] to-[#72FDBA]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true">
      <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#72FDBA] to-[#22FF95] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">What DevTools people are saying</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Where hundreds of DevTools find new strategies</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
        <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
          <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
            <p>{{ `“${featuredTestimonial.body}”` }}</p>
          </blockquote>
          <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
            <img class="h-10 w-10 flex-none rounded-full bg-gray-50" :src="featuredTestimonial.author.imageUrl" alt="" />
            <div class="flex-auto">
              <div class="font-semibold">{{ featuredTestimonial.author.name }}</div>
              <a :href="featuredTestimonial.author.url" ><div class="text-gray-600">{{ `${featuredTestimonial.author.handle}` }}</div></a>
            </div>
            <img class="h-10 w-auto flex-none" :src="featuredTestimonial.author.logoUrl" alt="" />
          </figcaption>
        </figure>
        <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx" class="space-y-8 xl:contents xl:space-y-0">
          <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx" :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
            <figure v-for="testimonial in column" :key="testimonial.author.handle" class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
              <blockquote class="text-gray-900">
                <p>{{ `“${testimonial.body}”` }}</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                <div>
                  <div class="font-semibold">{{ testimonial.author.name }}</div>
                  <a :href="testimonial.author.url" ><div class="text-gray-600">{{ `${testimonial.author.handle}` }}</div></a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const featuredTestimonial = {
  body: "It's now on my must listen list whenever a new episode comes out",
  author: {
    name: 'Angelo Saraceno',
    handle: 'Product Manager, Railway',
    url:'https://railway.app/',
    imageUrl:
      '/img/angelo.png',
    logoUrl: '/img/railway.svg',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Hey this was really good! Great topic, great questions, great answers',
        author: {
          name: "John O'Nolan",
          handle: 'Founder, Ghost',
          url: "https://ghost.org/",
          imageUrl:
            '/img/john.jpg',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'This was so good! A lot mirrors my experience with conference talks',
        author: {
          name: 'Kilian Valkhof',
          handle: 'Founder, Polypane',
          url:'https://polypane.app/',
          imageUrl:
            '/img/kilian.jpg',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "I just finished the PostHog one. So good.",
        author: {
          name: 'Zeno Rocha',
          handle: 'Co-Founder, Resend',
          url:'https://resend.com/',
          imageUrl:
            '/img/zeno.jpg',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Just listened to the episode this morning. It was really great! A lot of great actionable advice. Keep em coming',
        author: {
          name: 'Mark Phelps',
          url:'https://www.flipt.io/',
          handle: 'Co-Founder, Flipt',
          imageUrl:
            '/img/mark.jpg',
        },
      },
      // More testimonials...
    ],
  ],
]
</script>

    <!-- <Testimonial
      logoSrc="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
      testimonialText="'It's now my must listen list whenever a new episode comes out'"
      imageSrc="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
      name="Angelo"
      position="Product Manager, Railway"
    />
    <Testimonial
      logoSrc="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
      testimonialText="'Hey this was really good! Great topic, great questions, great answers'"
      imageSrc="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
      name="John O'Nolan"
      position="Founder, Ghost"
    />
    <Testimonial
      logoSrc="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
      testimonialText="'This was so good! A lot mirrors my experience with conference talks'"
      imageSrc="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
      name="Kilian Valkhof"
      position="Founder, Polypane"
    /> -->