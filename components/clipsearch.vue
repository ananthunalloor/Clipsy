<template>
  <div class="h-full">
    <div class="absolute clip-card w-full top-1/4" v-if="card">
      <div class="absolute left-3/4 m-8">
    <button v-on:click="card = !card"><i class="text-4xl text-gray-100 hover:text-red-500 fas fa-times"></i></button>
  </div>
    <Card/>
    </div>
    <div class="w-full mt-32 mb-40">
      <div class="text-center p-4">
        <span class="font-medium text-gray-100 text-6xl nuni">CLIPSY</span>
      </div>
      <div class="text-center px-2">
        <span class="font-normal text-gray-100 text-2xl just-nuni"
          >Find and Download clips form your favorite Streamers.</span
        >
      </div>
      <div class="pt-8 text-center px-2">
        <input
          class="p-4 lg:w-6/12 sm:w-11/12 md:w-9/12 rounded-lg bg-gray-300.. text-blue-400 just-nuni"
          type="url"
          name=""
          placeholder="https://clips.twitch.com"
        />
        <button v-on:click="card = !card"
          class="px-8 py-4 m-2 bg-gray-200 hover:bg-purple-600 rounded-lg"
        >
          <span class="text-gray-900 hover:text-gray-100 just-nuni"
            >GET CLIP</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
data(){
  return{
    card: false,
  }
}
}
</script>
<style scoped>
.clip-card{
    background-color: rgba(7, 24, 39, .8);
}
</style>