<template>
    <div class="w-full">
        <div class="w-full flex-col h-[35rem] sm:h-[65rem] lg:flex-row lg:h-screen relative pb-12 pt-20 lg:max-h-[1100px] max-h-[80rem] md:pt-4 md:min-h-[800px] flex gap-3 sm:gap-5 lg:gap-3">
            <div class="w-full h-full relative min-h-[30rem]">
                <ProjectsHeroBackground class="rounded-[30px]"></ProjectsHeroBackground>
                <div class="absolute bottom-0 left-0 h-min w-[14rem] sm:w-[26rem] md:w-[40rem] bg-background pr-4 sm:pr-8 md:pr-10 lg:pr-12 pt-4 sm:pt-6 lg:pt-8 rounded-tr-[30px]">
                    <h1 class="text-[2.2rem] sm:text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">Come See My <span class="text-primary">Projects</span></h1>
                    <!-- pb-20 -->
                    <!-- <p class=" font-body text-[1.1rem] sm:text-xl pt-2 lg:pt-4 tracking-tight leading-snug"></p> -->
                    <!-- <ButtonHeroCTA to="/contact" class="mt-6 ">Work With Me</ButtonHeroCTA> -->
    
                    <InvertedCorner class="absolute bottom-full left-0" orientation="bl"></InvertedCorner>
                    <InvertedCorner class="absolute bottom-0 left-full" orientation="bl"></InvertedCorner>
                </div>
            </div>
        </div>

        <div class="w-full h-[10rem] flex text-center justify-center items-center my-80">
            <h1 class="text-4xl font-heading font-medium">Projects Coming Soon..</h1>
        </div>
    </div>
</template>