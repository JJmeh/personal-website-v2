<script setup>
const props = defineProps({
    orientation: {
        default: 'tl',
        type: String
    }
})
</script>

<template>
    <div class="z-0 w-[30px] h-[30px] overflow-hidden">
        <div v-if="orientation == 'tl'" class="z-0 absolute w-[30px] h-[60px] left-0 rounded-tl-[30px] bg-transparent shadow-[0px_-30px_0_0_var(--background)]"></div>
        <div v-else-if="orientation == 'tr'" class="z-0 absolute w-[30px] h-[60px] left-0 rounded-tr-[30px] bg-transparent shadow-[0px_-30px_0_0_var(--background)]"></div>
        <div v-else-if="orientation == 'bl'" class="z-0 absolute w-[30px] h-[60px] left-0 top-[-30px] rounded-bl-[30px] bg-transparent shadow-[0px_30px_0_0_var(--background)]"></div>
        <div v-else-if="orientation == 'br'" class="z-0 absolute w-[30px] h-[60px] left-0 top-[-30px] rounded-br-[30px] bg-transparent shadow-[0px_30px_0_0_var(--background)]"></div>
    </div>
</template>