<script setup>

const nav_dropdown = ref()

const route = useRoute()

useHead({
    meta: [
        {
            property: 'og:title',
            content: `App Name - ${route.meta.title}`
        }
    ],
    title: 'Jeremiah Jason'
})
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
                        <ButtonNavCTA to="/contact" class="hidden md:flex">Let's Talk</ButtonNavCTA>
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
        <!-- Content -->
        <div class="px-6 sm:px-8 lg:px-12 w-full">
            <slot></slot>
        </div>
        <div class="my-6 flex flex-col px-6 sm:px-8 lg:px-12 w-full gap-3">
            <UtilOnScrollAnimate>
                <div class="h-max lg:h-[25rem] flex gap-3 flex-col lg:flex-row">
                    <FooterActionCard class="w-full h-1/2 lg:h-full lg:w-2/5"></FooterActionCard>
                    <div class="w-full lg:w-3/5 h-[20rem] lg:h-full">
                        <FooterBackground class="rounded-[30px]"></FooterBackground>
                    </div>
                </div>
            </UtilOnScrollAnimate>
            <div class="bg-text w-full h-min rounded-[30px] px-8 pb-8 pt-10">
                <div class="flex justify-start gap-16 lg:gap-0 lg:justify-between mb-16 sm:mb-20 flex-col lg:flex-row">
                    <nuxt-link to="/">
                        <img src="/image/Jeremiah-white.png" alt="" class="max-w-full w-48 z-10">
                    </nuxt-link>
                    <div class="flex gap-10 sm:gap-3 mr-4 flex-col sm:flex-row">
                        <div class="flex flex-col text-base text-background font-medium w-36">
                            <h3 class="mb-5">Menu</h3>
                            <div class="flex flex-col gap-2">
                                <NuxtLink to="/projects" class="w-full transition-all brightness-50 hover:brightness-100">Projects</NuxtLink>
                                <NuxtLink to="/contact" class="w-full transition-all brightness-50 hover:brightness-100">Contact</NuxtLink>
                            </div>
                        </div>
                        <div class="flex flex-col text-base text-background font-medium w-48"> 
                            <h3 class="mb-5">Connect With Me</h3>
                            <!-- GRoup of Social Media Logo here -->
                            <div class="flex gap-2">
                                <!-- Instagram -->
                                <FooterIcon to="https://www.instagram.com/jj.klki_/">
                                    <svg class="w-6 h-6 text-background brightness-[0.6] group-hover:brightness-100 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                                    </svg>
                                </FooterIcon>
                                <!-- Linkedin -->
                                <FooterIcon to="https://www.linkedin.com/in/jeremiahjason/">
                                    <svg class="w-6 h-6 text-background brightness-[0.6] group-hover:brightness-100 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                    </svg>
                                </FooterIcon>
                                <!-- Github -->
                                <FooterIcon to="https://github.com/JJmeh">
                                    <svg class="w-6 h-6 text-background brightness-[0.6] group-hover:brightness-100 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </FooterIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-6 border-t border-t-[#4a4847]">
                    <p class="text-background brightness-50 font-medium text-base">© 2024 JeremiahJason, All Rights Reserved</p>
                </div>
            </div>
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