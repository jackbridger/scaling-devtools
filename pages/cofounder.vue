<template>
    <NavBar />
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">People looking for DevTools co-founders</h1>
          <p class="mt-2 text-sm text-gray-700">Add your name to the list or reach out directly (but bear in mind devs are lurkers so I recommend not being shy).</p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button type="button" class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" @click="addMeToTheList">Add me to the list</button>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Headline (one sentence)</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">GitHub</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Twitter (or LinkedIn/personal site)</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">How to contact</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Location</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="cofounder in cofounders" :key="cofounder.name">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ cofounder.name }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ cofounder.headline }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><a :href="cofounder.github" target="_blank">{{ cofounder.github }}</a></td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><a :href="cofounder.twitter" target="_blank">{{ cofounder.twitter }}</a></td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ cofounder.contact }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ cofounder.location }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ cofounder.dateAdded }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import NavBar from '~/components/NavBar.vue';

    const cofounders = ref([]); // Reactive variable to hold cofounders data
    async function fetchCofounders() {
    try {
        const response = await fetch('/api/get-cofounders'); // Fetch cofounders from the API
        console.log(response);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data);
        cofounders.value = data; // Set the fetched data to the reactive variable
    } catch (error) {
        console.error('Error fetching cofounders:', error);
    }
    }

    function addMeToTheList() {
    // redirect to /add-cofounder
        window.location.href = '/add-cofounder'
    }

    onMounted(() => {
    fetchCofounders(); // Call the fetch function on component mount
    });
    useSeoMeta({
        titleTemplate: '%s · Scaling Devtools',
        title: 'Find a DevTools cofounder',
    })
  </script>