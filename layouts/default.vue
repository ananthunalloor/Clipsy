<template>
<section class="landing h-screen" id="home">
    <Navbar />
    <Nuxt />
    <Footer/> 
  </section>
</template>
<style scoped>
.landing {
  background-image: url('~assets/images/twitch.svg'),
   url('~assets/images/twitch-logo.svg'),
   url('~assets/images/twitch-logo.svg');
  background-repeat: no-repeat;
  background-size: 75%, 25%, 25%;
  background-position: bottom left, top -10% right, top -30% left -7%;
  background-attachment: fixed;
  }

</style>