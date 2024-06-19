<script setup>
const props = defineProps({
    to: {
        default: '/',
        type: String
    }
})
</script>

<template>
    <nuxt-link :to=to class="font-heading font-semibold px-5 py-[11px] rounded-full leading-3 transition-all bg-primary text-background flex items-center flex-nowrap hover:brightness-[.8] group ">
        <span class="me-1">
            <slot>Let's Talk</slot>
        </span>
        <svg class="w-6 h-6 text-background -rotate-45 group-hover:rotate-0 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
        </svg>
    </nuxt-link>
</template>