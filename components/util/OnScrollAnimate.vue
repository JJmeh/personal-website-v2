<script setup>

const target = ref()
const animate = ref(false)

// const load_done = inject('load_done')
onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if(!animate.value){
                animate.value = entry.isIntersecting;
            }
        },
        {
            threshold: 0.6
        }
    );
    observer.observe(target.value);
})

const vAppear = {
    beforeMount(el) {
        el.style.visibility = 'hidden'
    },
    updated(el, binding, Vnode) {
        if(!binding.value === !binding.oldValue || null === Vnode.transition){
            return;
        }

        if(!binding.value){
            Vnode.transition.leave(el, () => {
                el.style.visibility = 'hidden'
            });
            return
        }

        Vnode.transition.beforeEnter(el);
        el.style.visibility = '';
        Vnode.transition.enter(el)
    },
}

</script>

<template>
    <div ref="target">
        <transition name="fade">
            <div v-appear="animate" class="animated-component">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from {
    transition: none;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

</style>