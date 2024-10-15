<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <Header :tool="tool" v-if="tool" />
    <Stats :stats="tool.stats" v-if="tool" />
    <ToolInfo :tool="tool" v-if="tool" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import NavBar from '~/components/NavBar.vue'
import ToolInfo from '~/components/ToolInfo.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Stats from '~/components/Stats.vue'
import Header from '~/components/Header.vue'
import { tools } from '~/data/tools.js'

const route = useRoute()
const tool = tools.find(t => t.slug === route.params.slug)
const breadcrumbs = [
  { name: 'Tools', href: '/tools', current: false },
  { name: tool.name, href: `/tools/${tool.slug}`, current: true }
]

useSeoMeta({
  titleTemplate: '%s · Scaling Devtools',
  title: tool.name,
  description: tool.description,
})

useSchemaOrg([
  defineOrganization({
    name: tool.name,
    description: tool.description,
    url: `https://scalingdevtools.com/tools/${tool.slug}`,
    logo: `https://scalingdevtools.com${tool.image}`,
    sameAs: tool.links.map(link => link.url),
  }),
  defineBreadcrumb({
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://scalingdevtools.com${crumb.href}`,
    })),
  }),
])
</script>
