<template>
  <header class="navbar sticky top-0 z-50">
    <nav class="bg-transparent h-24">
      <div class="h-full lg:px-28 px-12">
        <div class="flex h-full">
          <div class="flex items-center"><a href="/">
            <span class="font-medium text-gray-100 text-3xl nuni">CLIPSY</span>
			</a>
          </div>
          <div class="flex h-full ml-auto">
              <div class="hidden md:flex items-center space-x-10">
						<a
							href="#home"
							class="text-gray-100 font-semibold hover:text-purple-500 nuni"
							>HOME</a
						>
						<a
							href="#about"
							class="text-gray-100 font-semibold hover:text-purple-500 nunoi"
							>ABOUT</a
						>
						<a
							href="#"
							class="text-gray-100 font-semibold hover:text-purple-500 nuni"
							>DONATE</a
						>
						<NuxtLink to="/privacy"
							class="text-gray-100 font-semibold hover:text-purple-500 nuni"
							>PRIVACY</NuxtLink>
					</div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>