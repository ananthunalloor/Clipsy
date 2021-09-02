<template>
  <div class="h-3/4 text-center">
  <div class="mt-20">
    <h1 class="text-gray-100 text-9xl" v-if="error.statusCode === 404">404</h1>
    <h1 class="text-red-500 text-5xl" v-else>An error occurred</h1>
    <span class="mt-8">
    <NuxtLink to="/" class="px-4 py-2 bg-gray-200 hover:bg-purple-600 rounded-lg">Take me Home</NuxtLink>
    </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>