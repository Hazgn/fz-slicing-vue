<template>
    <div class="bg-white w-full md:w-72 h-64 p-5 rounded-md mt-5 md:mt-0">
       <div class="flex items-center">
        <img :src="require(`@/assets/svg/${image}`)" alt="logo" class="pr-3">
        <p class="font-bold w-40">{{title}}</p>
       </div>
       <p class="text-sm pt-4 text-slate-700">{{desc}}</p>
        <div class="relative">
            <div class="absolute -bottom-10 ">
                <div class="flex w-36 justify-between text-secondary cursor-pointer">
                    <p class="text-sm font-bold">Lihat Kurikulum</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name:"CardSuperiority",
        props:{
            title: String,
            image: String,
            desc: String
        }
    }
</script>