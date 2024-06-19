<script setup>
const open = defineModel()
const emit = defineEmits(['clicked'])
// const props = defineProps({
//     open: {
//         require: true,
//         type: Boolean
//     }
// })

// var open = ref(false);
</script>

<template>
    <button class="text-text w-20 h-20 relative focus:outline-none bg-background" @click="open = !open">
        <span class="sr-only">Open main menu</span>
        <div class="block w-9 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true" class="block absolute h-0.5 w-9 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-2': !open }"></span>
            <span aria-hidden="true" class="block absolute h-0.5 w-9 bg-current transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
            <span aria-hidden="true" class="block absolute h-0.5 w-9 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-2': !open}"></span>
        </div>
    </button>
</template>