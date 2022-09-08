<template>
    <div class="bg-white w-full md:w-80 lg:w-[520px] p-5 rounded-md mt-5 md:mt-5">
        <p class="text-sm text-slate-700">{{desc}}</p>
        <div class="pt-2 flex items-center">
            <img :src="require(`@/assets/img/alumni/${image}`)" alt="profile" class="rounded-full h-10 w-10 mb-2">
            <div>
            </div>
                <div class="ml-3 mb-2">
                    <div>  
                    </div>
                    <div class="flex">
                        <p class="text-sm font-bold mr-1">{{name}}</p>
                        <div class="flex text-slate-700">
                        <p class="pr-1">(</p>
                            <img :src="require('@/assets/img/instagram.png')" alt="logo">
                        <p class="pl-1">{{instagram}} )</p>
                        </div>
                    </div>
                    <p class="text-sm text-slate-700">{{works}}</p>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CardAlumniComponent",
        props : {
            name:String,
            image:String,
            instagram:String,
            works: String,
            desc:String
        }
    }
</script>