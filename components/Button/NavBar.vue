<script setup>
const props = defineProps({
    to: {
        type: String,
        default: '/'
    }
})
</script>

<template>
    <nuxt-link :to=to class="font-heading font-medium px-2 py-2 hover:bg-[#b5b5b54d] rounded-lg leading-tight transition-all"><slot></slot></nuxt-link>
</template>
