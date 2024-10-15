<template>
  <div>
    <NavBar @openSubscribeModal="showSubscribeModal = true" />
    <NuxtPage />
    <Footer />
    <SubscribeModal :is-open="showSubscribeModal" @close="showSubscribeModal = false" />
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
import SubscribeModal from '~/components/SubscribeModal.vue'
import { ref } from 'vue'

const showSubscribeModal = ref(false)
</script>
