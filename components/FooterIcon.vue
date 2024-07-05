<script setup>
const props = defineProps({
    to: {
        require: true,
        default: '/',
        type: String
    }
})
</script>

<template>
    <NuxtLink :to=to class="p-2 rounded-lg text-background bg-[#3b3b3b] aspect-square w-10 group">
        <slot></slot>
    </NuxtLink>
</template>