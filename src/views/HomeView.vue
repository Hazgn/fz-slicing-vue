<template>
   <main class="md:pt-10 lg:pt-20 ">
      <section class="lg:flex lg:flex-col-reverse">

            <div class="flex justify-center relative lg:-top-60 lg:justify-end">
               <div v-for="(objArr, idx) in objArr" :key="idx">
                  <img :src="objArr.image" alt="avatar" :class="'image-hero-'+idx"  />
               </div>
            </div>
           
         <div class="text-center lg:text-left relative">
            <p class="text-secondary text-4xl lg:text-5xl font-bold">Ubah Hidupmu</p>
            <p class="text-4xl lg:text-5xl font-bold">Sekarang Juga</p>
            <p class="text-center lg:text-left mt-5 lg:w-1/2 text-slate-500">Belajar menjadi software engineer secara online/remote selama 3 - 6 bulan sampai diterima kerja, tanpa bayar di depan (Income Share Agreement).</p>
            <button class="bg-secondary hover:bg-orange-500 p-4 text-sm font-bold text-white mt-5 rounded-lg">Daftar Sekarang</button>
         </div>
      </section>

      <section class="lg:-mt-40">
         <p>Hello</p>
      </section>
      
   </main>
</template>

<script>
export default{
   data(){
      return {

      }
   },
   setup(){

      const objArr = [
         {
            image: require('@/assets/svg/riski.svg')
         },
         {
            image: require('@/assets/svg/risman.svg')
         },
         {
            image: require('@/assets/svg/azmi.svg')
         }
      ] 

      return{
         objArr
      }
   }
   
}
</script>