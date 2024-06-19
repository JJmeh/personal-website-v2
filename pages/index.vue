<template>
    <div class="w-full">
        <!-- <h1>Homepage</h1> -->
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
                    <h2 class="font-heading me-4 text-3xl font-medium text-background leading-relaxed tracking-tight">See My Latest Project</h2>
                </HeroActionCard>
                <HeroActionCard class="w-full sm:w-1/2 lg:w-full h-1/2 sm:h-full lg:h-2/5" color="bg-primary">
                    <h2 class="font-heading text-2xl font-medium text-background leading-relaxed tracking-tight">Have A Project In Mind? Tell Me How I Can Help</h2>
                </HeroActionCard>
            </div>
        </div>

        <div class="mt-36 w-full mb-36 flex gap-8 min-[970px]:gap-16 lg:gap-8 max-h-[68rem] h-max lg:h-[25rem] flex-col lg:flex-row">
            <div class="w-full min-[970px]:w-2/3 lg:w-1/2 h-min">
                <span class="mt-6 mb-4 lg:mb-6 inline-flex items-center bg-accent text-text text-base sm:text-[1.1rem] font-medium px-4 py-1.5 rounded-full ">
                    <span class="w-3 h-3 me-3 bg-primary rounded-full"></span>
                    My Services
                </span>
                <h1 class="text-heading text-[1.5rem] sm:text-2xl md:text-3xl">Services I can provide based on my experiences and capabilites over the years</h1>
            </div>
            <div class="w-full min-[970px]:w-full lg:w-1/2 grid grid-cols-1 min-[580px]:grid-cols-2 min-[970px]:grid-cols-4 lg:grid-cols-none gap-6 md:gap-4 items-center justify-center">
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
    </div>
</template>