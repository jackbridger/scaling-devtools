<template>
    <Hero></Hero>
    <Logos />
    <Testimonials />
    <LatestEpisode />
    <Newsletter />
    <!-- <Footer /> -->
</template>

<script>
import Hero from './Hero.vue'
import Testimonial from './Testimonial.vue'
import Testimonials from './Testimonials.vue'
import LatestEpisode from './LatestEpisode.vue'
import Newsletter from './Newsletter.vue'
import Logos from './Logos.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Hero,
    Testimonial,
    Testimonials,
    LatestEpisode,
    Newsletter,
    Logos, 
    Footer
  }
}
</script>