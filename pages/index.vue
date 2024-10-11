<template>
    <Hero></Hero>
    <LatestEpisode />
    <Testimonial />
    <Logos />
    <Testimonials />
    <Footer />
</template>

<script setup>
import Hero from '/components/Hero.vue'
import Testimonials from '/components/Testimonials.vue'
import Testimonial from '/components/Testimonial.vue'
import LatestEpisode from '/components/LatestEpisode.vue'
import Logos from '/components/Logos.vue'
import Footer from '/components/Footer.vue'
const site = useSiteConfig()

useSeoMeta({
    title: site.name,
    description: site.description,
})
</script>