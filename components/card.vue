<template>
<section>
  <div class="p-8">
    <div class="bg-white rounded-lg shadow-xl max-w-md m-auto">
      <div
        class=" flex justify-center items-center rounded-t-lg"
      >
        <img
          :src= thumbnail_url
          :alt= title
        />
      </div>
      <div class="px-8 py-8">
        <div class="flex justify-between just-nuni">
            <div class="text-red-500">
                <i class="fas fa-eye"></i>
                <span class="text-sm"> {{view_count}}</span>
            </div>
            <div class="text-blue-600">
                <i class="far fa-clock"></i>
                <span class="text-sm"> {{duration}}</span>
            </div>
        
        </div>
        <div class="flex justify-between just-nuni pt-2">
          <a :href= twitch_url target="_blank"><p class="text-gray-600 italic hover:underline hover:text-purple-500 reg-nuni">{{broadcaster_name}}</p></a>
          <p class="text-xs">{{created_at}}</p>
        </div>
        <p class="font-bold text-xl text-gray-700 reg-nuni">
          {{title}}
        </p>
        <div class="flex justify-center mt-6">
          <form :action=download_link>

          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
          >
            DOWNLOAD
          </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>
<script>
export default {
props:{
      title: String,
    thumbnail_url: String,
    duration: Number,
    view_count: Number,
    created_at: String,
    broadcaster_name: String,
    download_link: String,
    twitch_url: String,
}
}
</script>