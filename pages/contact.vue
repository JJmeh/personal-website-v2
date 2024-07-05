<script setup>

const contact = ref({
    name: '',
    email: '',
    message: ''
})

function send_contact(){
    // console.log(contact)
    // TODO: do send email thingy here
}

</script>

<template>
    <div class="w-full">
        <div class="w-full flex-col h-[35rem] sm:h-[65rem] lg:flex-row lg:h-screen relative pb-12 pt-20 lg:max-h-[1100px] max-h-[80rem] md:pt-4 md:min-h-[800px] flex gap-3 sm:gap-5 lg:gap-3">
            <div class="w-full h-full relative min-h-[30rem]">
                <ContactHeroBackground class="rounded-[30px]"></ContactHeroBackground>
                <div class="absolute bottom-0 left-0 h-min w-[14rem] sm:w-[26rem] md:w-[40rem] bg-background pr-4 sm:pr-8 md:pr-10 lg:pr-12 pt-4 sm:pt-6 lg:pt-8 rounded-tr-[30px]">
                    <h1 class="text-[2.2rem] sm:text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight"><span class="text-primary">Hi, Let's Talk</span> About Your Projects</h1>
                    <!-- pb-20 -->
                    <!-- <p class=" font-body text-[1.1rem] sm:text-xl pt-2 lg:pt-4 tracking-tight leading-snug"></p> -->
                    <!-- <ButtonHeroCTA to="/contact" class="mt-6 ">Work With Me</ButtonHeroCTA> -->
    
                    <InvertedCorner class="absolute bottom-full left-0" orientation="bl"></InvertedCorner>
                    <InvertedCorner class="absolute bottom-0 left-full" orientation="bl"></InvertedCorner>
                </div>
            </div>
        </div>

        <div class="w-full flex gap-6 mt-12 mb-24 flex-col lg:flex-row">
            <div class="w-full lg:w-1/2 frosted p-7 rounded-[30px]">
                <h1 class="font-heading font-semibold text-2xl lg:text-4xl text-primary tracking-tight">Let's Get Talking</h1>
                <p class="font-heading text-base font-medium me-8 lg:me-0">Reach out to me through this contact form below to get start talking about anything!</p>
                <form class="flex flex-col mt-8 gap-3" @submit.prevent="send_contact">
                    <input type="text" name="name" v-model="contact.name" placeholder="Name" class="py-5 px-6 rounded-xl bg-slate-200 placeholder-slate-500 border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0 ring-0">
                    <input type="email" name="email" v-model="contact.email" placeholder="Email" class="py-5 px-6 rounded-xl bg-slate-200 placeholder-slate-500 border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0 ring-0">
                    <textarea name="message" cols="30" rows="5" v-model="contact.message" placeholder="What do you want to talk about?" class="py-5 px-6 rounded-xl bg-slate-200 placeholder-slate-500 border-transparent focus:border-transparent focus:ring-0 focus:ring-offset-0 ring-0"></textarea>

                    <button type="submit" class="w-full text-center text-base font-heading font-semibold px-6 py-6 rounded-xl leading-3 transition-all bg-primary text-background hover:brightness-[.8] group ">
                        Send Me a Message
                    </button>
                </form>
            </div>
            <div class="w-full lg:w-1/2">
                <div class="rounded-[30px] w-full h-full overflow-hidden">
                    <img src="/public/image/purple4.jpg" alt="" class="h-full w-full object-cover">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.frosted{
    background: rgba( 255, 255, 255, 0.6 );
    backdrop-filter: blur( 120px );
    -webkit-backdrop-filter: blur( 120px );
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
}
</style>