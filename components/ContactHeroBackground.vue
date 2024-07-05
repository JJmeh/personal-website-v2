<template>
    <div class="w-full h-full relative overflow-hidden bg-gradient-to-t from-[#2920a3] to-[#0a47c2] to-60% from-20%">
        <div class="absolute rounded-full blob-1"></div>
        <div class="absolute rounded-full blob-2"></div>
        <div class="absolute rounded-full blob-3"></div>
        <div class="absolute rounded-full blob-4"></div>
        <div class="absolute frosted w-full h-full"></div>
    </div>
</template>

<style scoped>
.frosted{
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( 30px );
    -webkit-backdrop-filter: blur( 30px );
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
}

.blob-1{
    /* background-image: linear-gradient(#a3d2bb, #5cdaa2, #87b7ff); */
    /* background-color: #5cdaa2; */
    left: 30%;
    top: 70%;
    aspect-ratio: 1;
    width: 20rem;
    animation-name: blob-1;
    animation-duration: 70s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
.blob-2{
    /* background-color: #5273ff; */
    left: 90%;
    top: 4%;
    aspect-ratio: 1;
    width: 20rem;
    animation-name: blob-2;
    animation-duration: 80s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
.blob-3{
    /* background-color: #3ac8c4; */
    left: 0%;
    top: 0%;
    aspect-ratio: 1;
    width: 15rem;
    animation-name: blob-3;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

.blob-4{
    /* background-color: #3ac8c4; */
    left: 50%;
    top: 50%;
    aspect-ratio: 1;
    width: 12rem;
    animation-name: blob-4;
    animation-duration: 60s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes blob-1 {
    0%   {
        background-color: #262a92;
        top: 70%;
        left: 30%;
        width: 15rem;
    }
    25%  {
        background-color: #484fad;
        width: 25rem;
    }
    50%  {
        top: -10%;
        left: 80%;
        width: 5rem;
    }
    100% {
        top: 20%;
        left: -10%;
        background-color: #514c91;
        width: 20rem;
    }
}
@keyframes blob-2 {
    0%  {
        background-color: #0e63f5;
        top: 4%;
        left: 90%;
        width: 10rem;
    }
    25%   {
        background-color: #271ddc;
        width: 20rem;
    }
    50%  {
        background-color: #432db2;
        top: 20%;
        left: 34%;
        width: 10rem;
    }
    100% {
        top: 70%;
        left: -10%;
        width: 35rem;
    }
}
@keyframes blob-3 {
    0%  {
        background-color: #6a81ba;
        top: 0%;
        left: 0%;
        width: 10rem;
    }
    25%  {
        background-color: #3e3be0;
        width: 45rem;
    }
    50%  {
        background-color: #5273ff;
        top: 70%;
        left: 10%;
        width: 15rem;
    }
    100% {
        top: 10%;
        left: 80%;
        width: 20rem;
    }
}

@keyframes blob-4 {
    0%  {
        background-color:rgb(26, 35, 210)2;
        top: 50%;
        left: 50%;
        width: 12rem;
    }
    25%  {
        background-color: rgb(46, 103, 172);
        top: 0%;
        left: 100%;
        width: 20rem;
    }
    50%  {
        background-color: rgb(47, 53, 236);
        top: 100%;
        left: 100%;
        width: 10rem;
    }
    75%  {
        background-color: rgb(99, 46, 196);
        top: 0%;
        left: 0%;
        width: 20rem;
    }
    100% {
        background-color: rgb(93, 53, 167);
        top: 100%;
        left: 0%;
        width: 12rem;
    }
}
</style>