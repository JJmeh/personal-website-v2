<script setup>
const props = defineProps({
    status: {
        default: 1,
        type: Number
    }
})
</script>

<template>
    <!-- <h1>Service Card</h1> -->
    <div class="w-full h-min min-[580px]:h-[12rem] max-h-48 min-w-56 lg:max-w-64 rounded-[30px] bg-secondary p-4 flex flex-col justify-start relative group hover:brightness-90 transition-all duration-200 ease-linear hover:-translate-y-2">
        <span class="mb-4 inline-flex items-center bg-accent text-text text-xl font-medium px-4 py-1.5 rounded-full w-max group-hover:brightness-100">
            <span class="w-3 h-3 me-3 rounded-full" :class="{'bg-green-600': status == 1, 'bg-yellow-400': status == 2, 'bg-red-600': status == 3}"></span>
            <slot name="status">Available</slot>
        </span>
        <h1 class="font-heading text-2xl font-medium text-background">
            <slot>Service</slot>
        </h1>
    </div>
</template>