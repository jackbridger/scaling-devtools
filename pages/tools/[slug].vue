<template>
  <div>
    <NavBar />
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <Header :tool="tool" v-if="tool" />
    <Stats :stats="tool.stats" v-if="tool" />
    <ToolInfo :tool="tool" v-if="tool" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '~/components/NavBar.vue'
import ToolInfo from '~/components/ToolInfo.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Stats from '~/components/Stats.vue'
import Header from '~/components/Header.vue'
import { tools } from '~/data/tools.js'

const tool = ref(null)
const breadcrumbs = ref([])
const route = useRoute()

watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    tool.value = tools.find(t => t.slug === newSlug)
    breadcrumbs.value = [
      { name: 'Tools', href: '/tools', current: false },
      { name: tool.value.name, href: `/tools/${tool.value.slug}`, current: true }
    ]
  }
}, { immediate: true })
</script>
