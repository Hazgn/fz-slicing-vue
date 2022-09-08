<template>
    <div class="mt-10 border-2 p-5 w-full bg-white shadow-xl md:h-full rounded-md md:w-80 pb-10">
        <div class="flex mb-2">
            <p class="text-xs bg-blue-100 text-primary font-bold flex items-center p-1 rounded-md mr-3">{{online}}</p>
            <p class="text-xs bg-orange-100 text-secondary font-bold flex items-center p-1 rounded-md">{{hiring}}</p>
        </div>
        <div class="border-b-2 pb-3">
            <p class="text-xl font-bold">{{title}}</p>
            <p class="text-sm text-slate-700 mt-3 mb-3">{{desc}}</p>
            <p class="text-xs">{{date}}</p>
        </div>
        <div class="flex items-center pt-3 border-b-2 pb-3">
            <img :src="require(`@/assets/img/minicamp/${image}`)" alt="avatar" class="w-14 h-14 rounded-md mr-3">
            <div>
                <p class="text-sm font-bold text-slate-700">{{name}}</p>
                <p class="text-xs text-slate-700">{{work}}</p>
            </div>
        </div>
        <div class="flex pt-3 justify-between items-center border-b-2 pb-3">
            <p class="text-sm text-slate-700">Harga Mini Bootcamp</p>
            <p class="font-bold">{{price}}</p>
        </div>
        <div class="flex pt-3 justify-center items-center text-primary font-bold">
            <p class="pr-3">Daftar Waitlist</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
            </svg>
        </div>
    </div>
</template>

<script>
    export default{
        name:'CardMiniBootcampConponent',
        props:{
            online:String,
            hiring:String,
            title:String,
            desc:String,
            date:String,
            image:String,
            name:String,
            work:String,
            price:String
        }
    }
</script>