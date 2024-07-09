<template>
    <Hero></Hero>
    <LatestEpisode />
    <Testimonial />
    <Logos />
    <Testimonials />
    <Newsletter />
    <Footer />
</template>

<script>
import Hero from '/components/Hero.vue'
import Testimonials from '/components/Testimonials.vue'
import Testimonial from '/components/Testimonial.vue'
import LatestEpisode from '/components/LatestEpisode.vue'
import Newsletter from '/components/Newsletter.vue'
import Logos from '/components/Logos.vue'
import Footer from '/components/Footer.vue'

export default {
  components: {
    Hero,

    Testimonials,
    LatestEpisode,
    Newsletter,
    Logos, 
    Footer
  }
}
</script>