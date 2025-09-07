<template>
    <Hero @openSubscribeModal="showSubscribeModal = true"></Hero>
    <LatestEpisode />
    <Testimonial />
    <Logos />
    <Testimonials />
    <SubscribeModal :is-open="showSubscribeModal" @close="showSubscribeModal = false" />
</template>

<script setup>
import Hero from '~/components/Hero.vue'
import Testimonials from '~/components/Testimonials.vue'
import Testimonial from '~/components/Testimonial.vue'
import LatestEpisode from '~/components/LatestEpisode.vue'
import Logos from '~/components/Logos.vue'
import SubscribeModal from '~/components/SubscribeModal.vue'
import { ref } from 'vue'

const site = useSiteConfig()
const showSubscribeModal = ref(false)

useSeoMeta({
    title: site.name,
    description: site.description,
})
</script>