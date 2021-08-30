<template>
  <div class="h-full">
    <div class="absolute clip-card w-full top-1/4" v-if="card">
      <div class="absolute left-3/4 m-8">
        <button v-on:click="card = !card">
          <i class="text-4xl text-gray-100 hover:text-red-500 fas fa-times"></i>
        </button>
      </div>
      <Card v-if="resData.title != ''"
      :title="resData.title"
      :thumbnail_url="resData.thumbnailurl"
      :duration="resData.duration"
      :download_link="resData.downloadlink"
      :broadcaster_name="resData.broadcaster"
      :view_count="resData.viewcount"
      :created_at="resData.createdat"
      :twitch_url="resData.twitchurl"
      />
    </div>
    <div class="w-full mt-32 lg:mb-40 mb-20">
      <div class="text-center p-4">
        <span class="font-medium text-gray-100 text-6xl nuni"><h1>CLIPSY</h1></span>
      </div>
      <div class="text-center px-2">
        <span class="font-normal text-gray-50 text-2xl just-nuni"
          ><h2>Find and Download clips form your favorite Streamers.</h2></span
        >
      </div>
      <div class="pt-8 text-center px-2">
        <div v-if="erred" class="pb-2">
        <span class="w-max mb-20 text-red-500 bg-red-200 rounded-lg font-semibold text-base just-nuni py-2 px-3 border-red-700 border-l-4"><i class="fas fa-exclamation-triangle"></i> {{err}}</span>
        </div>
        <form :model="clipForm" v-on:submit.prevent="getCliplink(clipForm)">
        <input v-model="clipForm.url"
          class="p-4 lg:w-6/12 sm:w-11/12 md:w-9/12 rounded-lg bg-gray-300 text-grey-900 text-lg just-nuni"
          type="url" placeholder="https://clips.twitch.com" required/>
        <button type="submit"
          class="px-8 py-4 m-2 bg-gray-200 hover:bg-purple-600 rounded-lg">
          <span class="text-gray-900 hover:text-gray-100 just-nuni">GET CLIP</span>
        </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card: false,
      clipid: '',
      erred: false,
      err: 'this is very long eerror',
      res: Object,
      clipForm:{
        url:''
      },
      resData:{
        id:'',
        url:'',
        broadcaster: '',
        videoid: '',
        title: '',
        viewcount: '',
        createdat: '',
        thumbnailurl: '',
        duration: '',
        downloadlink:'',
        twitchurl:''
      },
    }
  },
  methods: {
    getCliplink(data) {
      this.clipid = ''
      var url = new URL(data.url)
      var hostname = url.hostname
      if(hostname == 'www.twitch.tv')
      {
        var pathname = url.pathname
          var paths = pathname.match(/([^\/]+)/g)
          var path = paths[2]
      }
      else if(hostname == 'clips.twitch.tv'){
      var pathname = url.pathname
          var paths = pathname.match(/([^\/]+)/g)
          var path = paths[0]
      }
      else{
        this.err= 'Enter valid URL!!!'
        this.erred = true
      }
      this.clipid = path
      if(path != undefined)
      {
        this.fetchclip(this.clipid)
      }
    },
    async fetchclip(clipid)
    {
      this.res = await this.$axios.$get('clips?id=' + clipid)

      if(this.res.data != ''){
        this.resData.id = this.res.data[0].id
        this.resData.url = this.res.data[0].url
        this.resData.broadcaster = this.res.data[0].broadcaster_name
        this.resData.videoid = this.res.data[0].video_id
        this.resData.title = this.res.data[0].title
        this.resData.viewcount = this.res.data[0].view_count
        this.resData.createdat = this.res.data[0].created_at.split('T')[0]
        this.resData.thumbnailurl = this.res.data[0].thumbnail_url
        this.resData.duration = this.res.data[0].duration
        this.resData.downloadlink = this.res.data[0].thumbnail_url.split('-preview', 1) + '.mp4'
        this.resData.twitchurl = 'https://twitch.tv/'+ this.res.data[0].broadcaster_name
        this.card = true
        this.err = ''
        this.erred = false
      }
      else{
        console.log("Something went wrong!!");
        this.err= 'Something went wrong, check if the URL is correct and try again!'
        this.erred = true
      }
    }
  },
}
</script>
<style scoped>
.clip-card {
  background-color: rgba(7, 24, 39, 0.8);
}
</style>
