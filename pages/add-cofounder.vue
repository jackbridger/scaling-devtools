<template>
  <NavBar />
  <form @submit.prevent="submitForm" class="max-w-2xl mx-auto p-6">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Cofounder Profile</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Once approved, this information will be displayed publicly. If you want to edit/remove, email jack@scalingdevtools.com</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div class="mt-2">
              <input type="text" v-model="name" name="name" id="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-2" placeholder="John Doe" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="headline" class="block text-sm font-medium leading-6 text-gray-900">Headline</label>
            <div class="mt-2">
              <input type="text" v-model="headline" name="headline" id="headline" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-2" placeholder="Previously @ Supabase. Want to build the future of AI infrastructure." />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="github" class="block text-sm font-medium leading-6 text-gray-900">GitHub</label>
            <div class="mt-2">
              <input type="url" v-model="github" name="github" id="github" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-2" placeholder="https://github.com/yourusername" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="twitter" class="block text-sm font-medium leading-6 text-gray-900">Twitter (or LinkedIn)</label>
            <div class="mt-2">
              <input type="url" v-model="twitter" name="twitter" id="twitter" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-2" placeholder="https://twitter.com/yourusername" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="otherlink" class="block text-sm font-medium leading-6 text-gray-900">Other link (if you want to write more, share e.g. a public notion page)</label>
            <div class="mt-2">
              <input type="text" v-model="otherlink" name="otherlink" id="otherlink" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-2" placeholder="https://example.com" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Location</label>
            <div class="mt-2">
              <input type="text" v-model="location" name="location" id="location" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-2" placeholder="New York, NY" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="contact" class="block text-sm font-medium leading-6 text-gray-900">How to Contact (publicly shown)</label>
            <div class="mt-2">
              <input type="text" v-model="contact" name="contact" id="contact" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-2" placeholder="your.email@example.com" />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label for="email_private" class="block text-sm font-medium leading-6 text-gray-900">Email (just for us. Can be same as publicly shown)</label>
            <div class="mt-2">
              <input type="text" v-model="email_private" name="email_private" id="email_private" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-2" placeholder="your.email@example.com" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900" @click="cancel">Cancel</button>
        <button type="submit" class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Save</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue';
import { ref } from 'vue';

const name = ref('');
const headline = ref('');
const github = ref('');
const twitter = ref('');
const contact = ref('');
const location = ref('');
const otherlink = ref('');  // New reactive variable for other link
const email_private = ref(''); // New reactive variable for private email

async function submitForm() {
  const formData = {
    name: name.value,
    headline: headline.value,
    github: github.value,
    twitter: twitter.value,
    contact: contact.value,
    location: location.value,
    otherlink: otherlink.value,  // Include other link in form data
    email_private: email_private.value, // Include private email in form data
  };

  try {
    const response = await fetch('/api/add-cofounder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log("response", response);
    const result = await response.json();

    if (result) {
      alert('Cofounder added successfully. Once approved, it will show up.');
      window.location.href = '/cofounder';
    } else {
      console.error('Error submitting form:', result);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function cancel() {
  window.location.href = '/cofounder';
}

useSeoMeta({
  titleTemplate: '%s · Scaling Devtools',
  title: 'Join Cofounders List',
})
</script>