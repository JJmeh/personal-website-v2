<script setup>
const route = useRoute()
const props = defineProps({
    to: {
        type: String,
        default: '/'
    }
})

console.log(route.path)
function highlight(){
    if(route.path == '/') return false

    return route.path == props.to
}

</script>

<template>
    <nuxt-link :to=to class="font-heading px-2 py-2 hover:bg-[#b5b5b54d] rounded-lg leading-tight transition-all" :class="{'text-text font-medium': !highlight(), 'text-secondary font-semibold': highlight()}"><slot></slot></nuxt-link>
</template>
