<script setup>

const nav_dropdown = ref()
</script>

<template>
    <div class="bg-background mx-auto max-w-screen-2xl">
        <div class="fixed max-w-[1680px] z-50 w-screen">
            <!-- <h1>Navbar here later</h1> -->
            <div class="w-full h-4 bg-background hidden md:block"></div>
            <div class="relative w-full">
                <div class="px-6 max-w-screen-2xl sm:px-8 lg:px-12">
                    <div class="flex justify-between items-center bg-background md:bg-transparent md:justify-normal gap-4 relative w-full md:w-full">
                        <nuxt-link to="/" class="py-6 pr-6 pl-2 block bg-background border-background rounded-br-[30px] relative">
                            <InvertedCorner class="absolute left-0 top-full hidden md:block"></InvertedCorner>
                            <InvertedCorner class="absolute left-full top-0 hidden md:block"></InvertedCorner>
                            <img src="/image/Jeremiah..png" alt="" class="max-w-full w-40 z-10">
                        </nuxt-link>
                        <div class="hidden md:flex gap-2 items-center px-5 py-1 frosted rounded-full shadow-lg">
                            <ButtonNavBar to="/">Home</ButtonNavBar>
                            <ButtonNavBar to="/projects">Projects</ButtonNavBar>
                            <ButtonNavBar to="/contact">Contact</ButtonNavBar>
                        </div>
                        <ButtonNavCTA to="/" class="hidden md:flex">Let's Talk</ButtonNavCTA>
                        <InvertedCorner class="absolute right-0 top-0" orientation="tr"></InvertedCorner>

                        <ButtonHamburger v-model="nav_dropdown" class="md:hidden"></ButtonHamburger>

                        <transition name="fade">
                            <div v-if="nav_dropdown" class="frosted flex flex-col absolute right-0 top-full p-3 rounded-xl z-30 w-full sm:w-56 gap-1 md:hidden">
                                <ButtonNavBar to="/" class="w-full">Home</ButtonNavBar>
                                <ButtonNavBar to="/projects" class="w-full">Projects</ButtonNavBar>
                                <ButtonNavBar to="/contact" class="w-full">Contact</ButtonNavBar>
                            </div>
                        </transition>

                        <InvertedCorner class="absolute left-0 top-full md:hidden" orientation="tl"></InvertedCorner>
                        <InvertedCorner class="absolute right-0 top-full md:hidden" orientation="tr"></InvertedCorner>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-6 sm:px-8 lg:px-12 w-full">
            <slot></slot>
        </div>
    </div> 
</template>

<style scoped>
.frosted{
    background: rgba( 255, 255, 255, 0.8 );
    /* box-shadow: 0 4px 10px 0 rgba( 31, 38, 135, 0.37 ); */
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    /* border-radius: 150px; */
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0%;
}
</style>