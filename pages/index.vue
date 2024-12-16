<script setup>
import { errorMessages } from 'vue/compiler-sfc';

definePageMeta({
    title: 'Jeremiah Jason'
})

const supabase = useSupabaseClient()


var projects = ref([
    // {
    //     id: 1,
    //     image: '/image/sky.jpg',
    //     name: 'Project Geniora',
    //     tags: [
    //         'Website',
    //         'Landing Page'
    //     ]
    // },
    // {
    //     id: 2,
    //     image: '/image/sky2.jpg',
    //     name: 'Project Atone',
    //     tags: [
    //         'Website',
    //         'Service'
    //     ]
    // },
    // {
    //     id: 3,
    //     image: '/image/purple.jpg',
    //     name: 'Project Dustklin',
    //     tags: [
    //         'Website',
    //         'E-Commerce'
    //     ]
    // }
])

const token = ref()

const job = ref({
    name: '',
    email: '',
    detail: '',
    services: '',
    budget: null
})
const is_sending = ref(false)

const success = ref(false)
const fail = ref(false)

async function send_job(){
    is_sending.value = true
    const { data, error } = await supabase.functions.invoke('form_send', {
        body: JSON.stringify({ 
            token: token.value,
            data: job.value,
            type: 1
        }),
        mode: 'no-cors'
    })
    is_sending.value = false
    if(error){
        fail.value = true
        setTimeout(() => {
            fail.value = false
        }, 6000);
    }else{
        success.value = true
        setTimeout(() => {
            success.value = false
        }, 6000);
    }
}

const email_sub = ref('')

const is_subscribing = ref(false)

const success_2 = ref(false)
const fail_2 = ref(false)

async function sub(){
    console.log('sub')
    if(email_sub.value == '') return

    is_subscribing.value = true
    const { data, error } = await supabase.functions.invoke('form_send', {
        body: JSON.stringify({ 
            token: token.value,
            data: {email: email_sub.value},
            type: 3
        }),
    })
    is_subscribing.value = false
    if(error){
        fail_2.value = true
        setTimeout(() => {
            fail_2.value = false
        }, 6000);
    }else{
        success_2.value = true
        setTimeout(() => {
            success_2.value = false
        }, 6000);
    }
}

</script>

<template>
    <div class="w-full">
        <!-- <h1>Homepage</h1> -->
        <UtilOnScrollAnimate>
            <div class="w-full flex-col h-[65rem] lg:flex-row lg:h-screen relative pb-12 pt-20 lg:max-h-[1100px] max-h-[80rem] md:pt-4 md:min-h-[800px] flex gap-3 sm:gap-5 lg:gap-3">
                <div class="w-full lg:w-3/4 sm:h-3/5 md:h-3/4 lg:h-full h-1/2 relative min-h-[30rem]">
                    <HeroBackground class="rounded-[30px]"></HeroBackground>
                    <div class="absolute bottom-0 left-0 h-min w-[12rem] sm:w-[26rem] md:w-[36rem] bg-background pr-4 sm:pr-8 md:pr-10 lg:pr-12 pt-4 sm:pt-6 lg:pt-8 rounded-tr-[30px]">
                        <h1 class="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight leading-tight">Jeremiah Jason</h1>
                        <!-- pb-20 -->
                        <p class=" font-body text-[1.1rem] sm:text-xl pt-2 lg:pt-4 tracking-tight leading-snug">A software engineer specializing in web development. Loves to build things that makes live easier and eager to learn new things </p>
                        <ButtonHeroCTA to="/contact" class="mt-6 ">Work With Me</ButtonHeroCTA>
        
                        <InvertedCorner class="absolute bottom-full left-0" orientation="bl"></InvertedCorner>
                        <InvertedCorner class="absolute bottom-0 left-full" orientation="bl"></InvertedCorner>
                    </div>
                </div>
                <div class="w-full lg:w-1/4 h-1/2 sm:h-2/5 md:h-1/4 lg:h-full flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-5 lg:gap-3">
                    <HeroActionCard class="w-full sm:w-1/2 lg:w-full h-1/2 sm:h-full lg:h-3/5" title='Photo by <a href="https://unsplash.com/@ksushlapush?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kseniya Lapteva</a> on <a href="https://unsplash.com/photos/a-watercolor-painting-of-a-purple-background-Dr8jO199ORY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>' image="/image/purple.jpg" has_badge="Latest Project">
                        <h2 class="font-heading me-4 text-2xl sm:text-3xl font-medium text-background leading-relaxed tracking-tight">Coming Soon.</h2>
                    </HeroActionCard>
                    <HeroActionCard to="/contact" class="w-full sm:w-1/2 lg:w-full h-1/2 sm:h-full lg:h-2/5" color="bg-primary">
                        <h2 class="font-heading text-[1.65rem] sm:text-2xl font-medium text-background leading-relaxed tracking-tight">Have A Project In Mind? Tell Me How I Can Help</h2>
                    </HeroActionCard>
                </div>
            </div>
        </UtilOnScrollAnimate>

        <UtilOnScrollAnimate>

            <div class="mt-36 w-full mb-36 flex gap-8 min-[970px]:gap-16 lg:gap-8 max-h-[68rem] h-max lg:h-[25rem] flex-col lg:flex-row">
                <div class="w-full min-[970px]:w-2/3 lg:w-1/2 h-min">
                    <span class="mt-6 mb-4 lg:mb-6 inline-flex items-center bg-accent text-text text-base sm:text-[1.1rem] font-medium px-4 py-1.5 rounded-full ">
                        <span class="w-3 h-3 me-3 bg-primary rounded-full"></span>
                        My Services
                    </span>
                    <h1 class="text-heading text-[1.5rem] sm:text-2xl md:text-3xl">Services I can provide based on my experiences and capabilites over the years</h1>
                </div>
                <div class="w-full min-[970px]:w-full lg:w-1/2 grid grid-cols-1 min-[580px]:grid-cols-2 min-[970px]:grid-cols-4 lg:grid-cols-none gap-3 md:gap-4 items-center justify-center">
                    <ServiceCard class="lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-1 cursor-pointer" :status=1>
                        Web Development
                    </ServiceCard>
                    <ServiceCard class="lg:row-start-1 lg:row-end-1 lg:col-start-2 lg:col-end-2 cursor-pointer">API Development</ServiceCard>
                    <ServiceCard class="lg:row-start-2 lg:row-end-2 lg:col-start-1 lg:col-end-1 cursor-not-allowed" :status=3>
                        Mobile App Development
                        <template #status>
                            Unavailable
                        </template>
                    </ServiceCard>
                    <ServiceCard class="lg:row-start-2 lg:row-end-2 lg:col-start-2 lg:col-end-2 cursor-pointer" :status=2>
                        UI/UX Design
                        <template #status>
                            Learning
                        </template>
                    </ServiceCard>
                </div>
            </div>
        </UtilOnScrollAnimate>

        <UtilOnScrollAnimate>
            
            <div class="mt-16 w-full flex flex-col">
                <div class="flex flex-col min-[580px]:flex-row justify-between min-[580px]:items-center mb-6 min-[580px]:mb-10 gap-4 min-[580px]:gap-0">
                    <h2 class="font-heading text-[2rem] font-medium">Recent Projects</h2>
                    <nuxt-link to="/projects" class="font-bold font-heading text-base text-primary flex items-center group">
                        <span class="group-hover:brightness-[0.8] transition-all">
                            View All
                        </span>
                        <svg class="w-6 h-6 text-primary group-hover:rotate-0 transition-all ms-2 ease-in-out group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                    </nuxt-link>
                    <!-- <h3>View All -></h3> -->
                </div>
                <div class="w-full h-[10rem] flex text-center justify-center items-center" v-if="projects.length == 0">
                    <h1 class="text-4xl font-heading font-medium">Projects Coming Soon..</h1>
                </div>
                <div v-else class="flex gap-4 flex-col min-[970px]:flex-row lg:gap-6 h-[88rem] sm:h-[105rem] min-[970px]:h-[35rem]">
                    <ProjectsCard :image=data.image v-for="(data) in projects" :tags="data.tags" v-bind:key="data.id">{{ data.name }}</ProjectsCard>
                    <!-- <ProjectsCard image="/image/sky2.jpg"></ProjectsCard>
                    <ProjectsCard image="/image/purple.jpg"></ProjectsCard> -->
                </div>
    
                <div class="w-full h-min md:h-min rounded-[30px] mt-16 md:mt-24 lg:mt-28 p-8 md:p-12 bg-gradient-to-r from-secondary to-[#9b94ff] subscribe-gradient gap-0 md:gap-10">
                    <div class="max-w-6xl flex flex-col md:flex-row items-end md:items-start mx-auto">
                        <div class="w-full md:w-1/2  text-left flex flex-col items-start h-40 justify-center">
                            <h1 class="text-3xl font-heading leading-tight font-medium tracking-tight text-background">Get Notified</h1>
                            <p class="text-xl font-body w-full md:w-3/4 mt-0 md:mt-2 text-background">Don't miss out from my new projects by being notified for it</p>
                        </div>
                        <form class="w-full md:w-1/2 flex flex-col items-end h-40 justify-center gap-4" @submit.prevent="sub">
                            <!-- <h1 class="text-3xl font-heading font-medium tracking-tight text-background hidden md:block">Subscribe</h1> -->
                            <div class="relative font-heading w-full md:max-w-[30rem]">
                                <input type="email" id="Subscribe" class="block w-full p-4 text-base text-text rounded-2xl bg-background" placeholder="Enter Your Email" v-model="email_sub"/>
                            </div>
                            <!-- <NuxtTurnstile v-model="token"></NuxtTurnstile> -->
                            <transition name="fade">
                                <div v-if="success_2" class="p-4 text-base text-green-800 rounded-lg bg-green-50" role="alert">
                                    <span class="font-bold">Success!</span> Your message has been sent, please wait for our response!
                                </div>
                            </transition>
                            <transition name="fade">
                                <div v-if="fail_2" class="p-4 text-base text-red-800 rounded-lg bg-red-50" role="alert">
                                    <span class="font-medium">Error!</span> Submit message error, please try again.
                                </div>
                            </transition>
                            <button type="submit"class="text-background bg-primary hover:brightness-75 font-medium rounded-2xl px-8 py-3 text-xl block w-full md:w-max transition-all" :disabled="is_subscribing">
                                <BaseSpinner no_text v-if="is_subscribing"></BaseSpinner>
                                <p v-else>
                                    Subscribe
                                </p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </UtilOnScrollAnimate>

        <UtilOnScrollAnimate>
            
            <div class="w-full flex gap-6 mt-24 mb-24 flex-col lg:flex-row">
                <div class="w-full lg:w-1/2 frosted p-7 rounded-[30px]">
                    <h1 class="font-heading font-semibold text-2xl lg:text-4xl text-primary tracking-tight">Work With Me</h1>
                    <p class="font-heading text-base font-medium me-8 lg:me-0">Have a job for me? Use this contact form to send me the details and let's start working!</p>
                    <form class="flex flex-col mt-8 gap-3" @submit.prevent="send_job()">
                        <input type="text" name="name" v-model="job.name" placeholder="Name" class="py-5 px-6 rounded-xl bg-slate-200 placeholder-slate-500 border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0 ring-0" required>
                        <input type="email" name="email" v-model="job.email" placeholder="Email" class="py-5 px-6 rounded-xl bg-slate-200 placeholder-slate-500 border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0 ring-0" required>
                        
                        <div class="w-full grid">
                            <select v-model="job.services" name="services" class="w-full col-start-1 row-start-1 appearance-none py-5 px-6 rounded-xl bg-slate-200 placeholder-slate-500 border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0 ring-0" required>
                                <option value="" disabled selected>Select Services</option>
                                <option value="Web Dev">Web Development</option>
                                <option value="API Dev">API Development</option>
                                <option value="UI/UX">UI/UX Design</option>
                            </select>
                            <svg class="w-6 h-6 right-3 relative justify-self-end self-center row-start-1 col-start-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                            </svg>
                        </div>
    
                        <textarea name="message" cols="30" rows="5" v-model="job.detail" placeholder="The job description?" class="py-5 px-6 rounded-xl bg-slate-200 placeholder-slate-500 border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0 ring-0" required></textarea>
                        <input type="number" name="budget" v-model="job.budget" placeholder="Budget (optional, give currency in desc)" class="py-5 px-6 rounded-xl bg-slate-200 placeholder-slate-500 border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0 ring-0">

                        <NuxtTurnstile v-model="token"></NuxtTurnstile>

                        <button type="submit" class="w-full text-center text-base font-heading font-semibold px-6 py-6 rounded-xl leading-3 transition-all bg-primary text-background hover:brightness-[.8] group " :disabled="is_sending">
                            <BaseSpinner no_text v-if="is_sending"></BaseSpinner>
                            <p v-else>
                                Submit
                            </p>
                        </button>
                        <transition name="fade">
                            <div v-if="success" class="p-4 mb-4 text-base text-green-800 rounded-lg bg-green-50" role="alert">
                                <span class="font-bold">Success!</span> Your message has been sent, please wait for our response!
                            </div>
                        </transition>
                        <transition name="fade">
                            <div v-if="fail" class="p-4 mb-4 text-base text-red-800 rounded-lg bg-red-50" role="alert">
                                <span class="font-medium">Error!</span> Submit message error, please try again.
                            </div>
                        </transition>
                    </form>
                </div>
                <div class="w-full lg:w-1/2">
                    <div class="rounded-[30px] w-full h-full overflow-hidden">
                        <img src="/public/image/wavy.jpg" alt="" class="h-full w-full object-cover">
                    </div>
                </div>
            </div>
        </UtilOnScrollAnimate>
    </div>
</template>

<style scoped>
.subscribe-gradient{
    animation-name: gradient-move;
    animation-duration: 70s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
@keyframes gradient-move {
    0% {
        --tw-gradient-from-position: 20%;
        --tw-gradient-to-position: 90%
    }
    100% {
        --tw-gradient-from-position: 30%;
        --tw-gradient-to-position: 60%
    }
}

.frosted{
    background: rgba( 255, 255, 255, 0.6 );
    backdrop-filter: blur( 120px );
    -webkit-backdrop-filter: blur( 120px );
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 500ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>