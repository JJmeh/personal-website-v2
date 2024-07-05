<script setup>

</script>

<template>
    <nuxt-link to="/contact" class="w-full h-min relative cursor-pointer group">
        <div class="w-full h-full overflow-hidden rounded-[30px] grid grid-cols-1 grid-rows-1">
            <div class="w-full h-full rounded-[30px] row-start-1 row-end-1 col-start-1 col-end-1 group-hover:brightness-75 transition-all duration-200 ease-linear bg-primary" ></div>
            <div class="row-start-1 row-end-1 col-start-1 col-end-1 z-30 pt-8 px-6 pb-6">
                <span class="mb-2 lg:mb-6 inline-flex items-center bg-accent text-text text-base sm:text-xl font-medium px-4 py-1.5 rounded-full ">
                    <span class="w-3 h-3 me-3 bg-primary rounded-full"></span>
                    Send me Message
                </span>
                <h2 class="font-heading text-2xl sm:text-3xl font-normal text-background leading-relaxed tracking-tight">Want to talk to me?<br>Send me a message</h2>
            </div>
        </div>
        <!-- Button -->
        <div class="bg-background absolute right-0 bottom-0 pl-4 pt-4 rounded-tl-[55px]">
            <div class="bg-text w-16 aspect-square rounded-full flex items-center cursor-pointer group-hover:brightness-125 transition-all">
                <svg class="w-16 aspect-square text-background transition-all scale-150 -rotate-45 group-hover:rotate-0 duration-200 ease-in" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                </svg>
            </div>
            <InvertedCorner class="absolute bottom-full right-0" orientation="br"></InvertedCorner>
            <InvertedCorner class="absolute bottom-0 right-full" orientation="br"></InvertedCorner>
        </div>
    </nuxt-link>
</template>
<!-- Photo by <a href="https://unsplash.com/@hans_isaacson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hans Isaacson</a> on <a href="https://unsplash.com/photos/a-plane-flying-through-a-cloudy-sky-at-sunset-vmZH_u2sf5w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
<!-- Photo by <a href="https://unsplash.com/@budanovamrus?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Maria Budanova</a> on <a href="https://unsplash.com/photos/a-view-of-the-sky-from-an-airplane-window-7Tl2bBptxak?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
<!-- Photo by <a href="https://unsplash.com/@ksushlapush?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kseniya Lapteva</a> on <a href="https://unsplash.com/photos/a-watercolor-painting-of-a-purple-background-Dr8jO199ORY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
  