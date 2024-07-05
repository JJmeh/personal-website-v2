<script setup>
const props = defineProps({
    image: {
        type: String,
        default: ''
    },
    tags: {
        type: Array,
        default: []
    }
})
</script>

<template>
    <div class="w-full h-full relative cursor-pointer group min-h-[20rem] sm:min-h-[30rem] max-h-[28rem] sm:max-h-[33rem]">
        <div class="w-full h-full relative cursor-pointer group min-h-[20rem] sm:min-h-[25rem] max-h-[25rem] sm:max-h-[30rem]">
            <div class="w-full h-full overflow-hidden rounded-[30px] grid grid-cols-1 grid-rows-1">
                <img :src=image alt="" class=" w-full h-full rounded-[30px] group-hover:scale-110 transition-all ease-linear duration-200 row-start-1 row-end-1 col-start-1 col-end-1  object-cover">
            </div>
            <!-- Button -->
            <div class="bg-background absolute right-0 bottom-0 pl-4 pt-4 rounded-tl-[55px]">
                <div class="bg-text w-16 aspect-square rounded-full flex items-center cursor-pointer group-hover:brightness-125 transition-all">
                    <svg class="w-16 aspect-square text-background transition-all scale-150 group-hover:rotate-45 duration-200 ease-in" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </div>
                <InvertedCorner class="absolute bottom-full right-0" orientation="br"></InvertedCorner>
                <InvertedCorner class="absolute bottom-0 right-full" orientation="br"></InvertedCorner>
            </div>
    
            <!-- Tags Badge -->
            <div class="bg-background absolute right-0 top-0 rounded-bl-[30px] px-4 pt-2 pb-3 z-30 flex gap-2">
                <span class="inline-flex items-center bg-accent text-text text-[14px] font-medium px-4 py-1.5 rounded-full " v-for="tag in tags">
                    {{ tag }}
                </span>
                <!-- <span class="inline-flex items-center bg-accent text-text text-[14px] font-medium px-4 py-1.5 rounded-full ">
                    Service
                </span> -->
                <InvertedCorner class="absolute top-full right-0" orientation="tr"></InvertedCorner>
                <InvertedCorner class="absolute top-0 right-full" orientation="tr"></InvertedCorner>
            </div>
        </div>
        <h1 class="text-xl font-medium mt-3">
            <slot>Project Name</slot>
        </h1>
    </div>
</template>
<!-- Photo by <a href="https://unsplash.com/@hans_isaacson?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hans Isaacson</a> on <a href="https://unsplash.com/photos/a-plane-flying-through-a-cloudy-sky-at-sunset-vmZH_u2sf5w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
<!-- Photo by <a href="https://unsplash.com/@budanovamrus?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Maria Budanova</a> on <a href="https://unsplash.com/photos/a-view-of-the-sky-from-an-airplane-window-7Tl2bBptxak?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
<!-- Photo by <a href="https://unsplash.com/@ksushlapush?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kseniya Lapteva</a> on <a href="https://unsplash.com/photos/a-watercolor-painting-of-a-purple-background-Dr8jO199ORY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
  