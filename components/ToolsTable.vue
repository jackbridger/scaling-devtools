<template>
  <div class="tools-table">
    <div class="px-4 sm:px-6 lg:px-8">

      <div class="-mx-4 mt-8 sm:-mx-0">
        <table class="divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
              <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Industry</th>
              <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Stage</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Growth strategies</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span class="sr-only">View more</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="company in companies" :key="company.stage">
              <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                {{ company.name }}
                <dl class="font-normal lg:hidden">
                  <dt class="sr-only">Industry</dt>
                  <dd class="mt-1 truncate text-gray-700">{{ company.industry }}</dd>
                  <dt class="sr-only sm:hidden">Stage</dt>
                  <dd class="mt-1 truncate text-gray-500 sm:hidden">{{ company.stage }}</dd>
                </dl>
              </td>
              <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ company.industry }}</td>
              <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ company.stage }}</td>
              <td class="px-3 py-4 text-sm text-gray-500">{{ company.strategies }}</td>
              <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a :href="`/tools/${company.slug}`" class="text-indigo-600 hover:text-indigo-900">View more<span class="sr-only">, {{ company.name }}</span></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const companies = [
  { name: 'Algolia', industry: 'Search API', stage: '$2.25bn valuation', strategies: 'search, comarketing, documentation, ambassadors, products, direct sales', slug: 'algolia' },
  { name: 'Clerk', industry: 'Auth', stage: '$29m funding', strategies: 'product, community, sponsorships', slug: 'clerk' },
  { name: 'DevCycle', industry: 'Feature flagging', stage: '$5m funding', strategies: 'developer experience, open source', slug: 'devcycle' },
  { name: 'FusionAuth', industry: 'Auth', stage: '$65m funding', strategies: 'Forums, sponsorships, open source', slug: 'fusion-auth' },
  { name: 'Polypane', industry: 'Browser', stage: 'Bootstrapped', strategies: 'email marketing, twitter, case studies', slug: 'polypane' },
  { name: 'Supabase', industry: 'Database, Auth, Storage', stage: '$116m funding', strategies: 'social media, launches, memes, open source', slug: 'supabase' },
  { name: 'StreamPot', industry: 'Video Processing API', stage: 'Early stage', strategies: 'writing, reddit, dev.to', slug: 'streampot' },
];

</script>

<style scoped>
.tools-table {
  /* You can add styles specific to the ToolsTable component here */
}
</style>
