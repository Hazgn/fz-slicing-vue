<template>
    <main>
       <section class="bg-[#fef3ec]">
            <div class="p-5 lg:p-20">
                <p class="text-2xl lg:text-3xl font-bold">Belajar bersama expert dan creator terpercaya</p>
            
                <div class="mt-10">
                    <div class="flex justify-between w-full flex-wrap">
                        <div class="flex items-center mb-5 lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-orange-200 text-secondary p-1 rounded-full">
                            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                            </svg>
                            <p class="text-sm ml-3 font-bold text-slate-700 w-24 lg:w-auto">Supportive Trainer</p>
                        </div>
                        <div class="flex mb-5 items-center lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-orange-200 text-secondary p-1 rounded-full">
                            <path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clip-rule="evenodd" />
                            </svg>
                            <p class="text-sm ml-3 font-bold text-slate-700 w-28 lg:w-auto">Kurikulum Sesuai Industri</p>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-orange-200 text-secondary p-1 rounded-full">
                            <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd" />
                            <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                            </svg>
                            <p class="text-sm ml-3 font-bold text-slate-700 w-28 lg:w-auto">Jaminan Disalurkan Kerja</p>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 bg-orange-200 text-secondary p-1 rounded-full">
                            <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
                            </svg>
                            <p class="text-sm ml-3 font-bold text-slate-700 w-28 lg:w-auto">Ulang Kelas Gratis</p>
                        </div>
                    </div>
                </div>
            </div>
       </section>

        <section class="p-5 lg:p-20 flex flex-wrap justify-between">
            <div v-for="(data, idx) in minicamp" :key="idx" class="mt-5">
                <CardMiniBootcampComponent :image="data.image" :hiring="data.status[1]" :online="data.status[0]" :title="data.title" :desc="data.desc" :name="data.name" :work="data.work" :date="data.date" :price="data.price" />
            </div>
        </section>
    </main>
</template>

<script>
    import minicamp from '@/assets/json/dummy/minicamp'
    import CardMiniBootcampComponent from '@/components/CardMiniBootcampComponent.vue'
    
    export default{
        data(){
           return{
                minicamp
           }
        },
        components:{
            CardMiniBootcampComponent
        }
    }
</script>