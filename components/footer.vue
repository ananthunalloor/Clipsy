<template>
    <footer class=" flex w-full h-36 bg-gray-900">
        <div class="m-auto text-gray-100">
            <span class="text-center text-lg">
                This website has no affiliation with <a class="text-xl" href="https://twitch.tv">Twitch.</a>
                <p class="text-sm">Copyright {{currentDate.getFullYear()}} Clipsy. All Rights Reserved</p>
            </span>
        </div>
    </footer>
</template>
<script>
export default {
data(){
    return{
        currentDate: new Date,
    }
}
}
</script>