<template>
    <NavBar />
    <form @submit.prevent="submitForm" class="max-w-2xl mx-auto p-6">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">DevTool Profile</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Once approved, this information will be displayed publicly. Please take a look at our <a href="/tools" class="text-green-600 hover:text-green-500">other examples</a> so you know what to write.</p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Tool Name</label>
              <div class="mt-2">
                <input type="text" v-model="name" name="name" id="name" required class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., Algolia" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="industry" class="block text-sm font-medium leading-6 text-gray-900">Industry</label>
              <div class="mt-2">
                <input type="text" v-model="industry" name="industry" id="industry" required class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., Search API" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="stage" class="block text-sm font-medium leading-6 text-gray-900">Stage</label>
              <div class="mt-2">
                <input type="text" v-model="stage" name="stage" id="stage" required class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., $2.25bn valuation" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
              <div class="mt-2">
                <textarea v-model="description" name="description" id="description" required class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., Algolia is a hosted search API." ></textarea>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="strategies" class="block text-sm font-medium leading-6 text-gray-900">Growth Strategies (use , for separating into bullet points). Take a look at our examples and please try to be as candid as possible.</label>
              <div class="mt-2">
                <textarea v-model="strategies" name="strategies" id="strategies" required class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., Products as marketing, Free Algolia search for developer docs, etc."></textarea>
              </div>
            </div>

            <div class="sm:col-span-4">
                <label for="links" class="block text-sm font-medium leading-6 text-gray-900">Links (comma separated)</label>
                <div class="mt-2">
                  <input type="text" v-model="links" name="links" id="links" class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., https://www.algolia.com/, https://www.algolia.com/doc/" />
                </div>
              </div>

            <div class="sm:col-span-4">
              <label for="type" class="block text-sm font-medium leading-6 text-gray-900">Type</label>
              <div class="mt-2">
                <input type="text" v-model="type" name="type" id="type" required class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., Search API" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="founded" class="block text-sm font-medium leading-6 text-gray-900">Founded</label>
              <div class="mt-2">
                <input type="text" v-model="founded" name="founded" id="founded" required class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., 2012" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="funding" class="block text-sm font-medium leading-6 text-gray-900">Funding</label>
              <div class="mt-2">
                <input type="text" v-model="funding" name="funding" id="funding" required class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., $150,000,000" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Location</label>
              <div class="mt-2">
                <input type="text" v-model="location" name="location" id="location" required class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., San Francisco, CA" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="contact_email" class="block text-sm font-medium leading-6 text-gray-900">Contact Email</label>
              <div class="mt-2">
                <input type="text" v-model="contact_email" name="contact_email" id="contact_email" required class="block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3" placeholder="e.g., jack@scalingdevtools.com" />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900" @click="cancel">Cancel</button>
          <button type="submit" class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Submit</button>
        </div>
      </div>
    </form>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue';
import { ref } from 'vue';

const name = ref('');
const industry = ref('');
const stage = ref('');
const description = ref('');
const strategies = ref('');
const links = ref('');
const type = ref('');          // Added for type
const founded = ref('');       // Added for founded
const funding = ref('');       // Added for funding
const location = ref('');      // Added for location
const contact_email = ref(''); // Added for contact_email

async function submitForm() {
  const formData = {
    name: name.value,
    industry: industry.value,
    stage: stage.value,
    description: description.value,
    strategies: strategies.value.split(',').map(s => s.trim()),
    links: links.value.split(',').map(l => l.trim()), 
    type: type.value,                
    founded: founded.value,          
    funding: funding.value,          
    location: location.value,        
    contact_email: contact_email.value,
  };
  try {
    const response = await fetch('/api/add-tool', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (result) {
      alert('Tool submitted successfully.');
      window.location.href = '/tools';
    } else {
      console.error('Error submitting form:', result);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function cancel() {
  window.location.href = '/tools';
}

useSeoMeta({
  titleTemplate: '%s · Scaling Devtools',
  title: 'Add a Tool',
});
</script>