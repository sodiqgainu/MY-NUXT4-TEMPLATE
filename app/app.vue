<template>
  <div data-cursor="-exclusion -grow">
<div class="bg-blue-500 h-dvh" >
    <h1 class="text-white text-md" data-cursor-text="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet repellendus quam voluptatibus incidunt itaque, tempora alias quod nesciunt quia maxime ipsum quisquam, eius non corrupti, aperiam quasi delectus. Provident.
      fuga tenetur aperiam, quaerat earum, necessitatibus quod labore impedit ceat io amet sed, accusantium autem alias debitis natus id porro ea ex. Saepe adipisci reprehenderit, ipsa labore vel soluta natus excepturi aliquam.
      Omnis, veritatis tempore. Repellendus veritatis tenetur quae at nemo asperiores quaerat architecto illum deleniti ullam voluptate odit laborum, est nihil, consequuntur cumque saepe accusamus ipsum impedit quas, adipisci in similique!
    </h1>
  </div>

  <!-- hoizontal scroll -->

  <section id="horizontal-scroll">
     <div class="horizontal-wrapper">
        <div class="horizontal flex p-10 h-full" >
           <div>
               <div class="cards">
                 <h2>01</h2>
                 <h2>WE ARE BOLD</h2>
               </div>
           </div>


             <div>
               <div class="cards">
                 <h2>02</h2>
                 <h2>WE ARE EXQUISITE</h2>
               </div>
           </div>


           <Magnetic :strength="30" :duration="0.1" >
             <div>
               <div class="cards">
                 <h2>03</h2>
                 <h2>WE ARE STRONG</h2>
               </div>
           </div>
           </Magnetic>


         
             <div>
               <div class="cards">
                 <h2>04</h2>
                 <p>WE ARE OVERJOYED</p>
               </div>
           </div>
           

             <div>
               <div class="cards">
                 <h2>05</h2>
                 <p>WE ARE FAITHFUL</p>
               </div>
           </div>

             <div>
               <div class="cards">
                 <h2>06</h2>
                 <p>WE ARE BRILLIANT</p>
               </div>
           </div>

        </div>
     </div>

  </section>

   <!-- horizontal scroll  ends-->

    <footer class="h-dvh">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi minima dolor nobis libero corrupti rerum reiciendis et. Laboriosam deserunt molestias et doloribus numquam quisquam veniam cumque minus consequatur explicabo in hic dolore, aperiam assumenda ex expedita obcaecati voluptas odio nihil. Perferendis, fugiat quis hic totam facilis minima dolorum similique veritatis!
    </footer>
  </div>
  
</template>


<script setup>
import Lenis from 'lenis'

import Magnetic from './Effects/Magnetic.vue';



onMounted(() => {
  const horizontalScroll = document.querySelector('.horizontal')

  gsap.to('.horizontal',{
    x: () => -(horizontalScroll.scrollWidth - window.innerWidth),
    scrollTrigger:{
      trigger:'.horizontal',
      start:'center center',
      pin:'#horizontal-scroll',
      end: () => "+=" + (horizontalScroll.scrollWidth),
      scrub:1,
      invalidateOnRefresh:true,
     markers:true
    }
  })
})
</script>

<style scoped>
   #horizontal-scroll{
     padding: 160px 0;
     background-color: #333;
     color:white;
     
   }

   .horizontal-wrapper{
    overflow: hidden;
    height:55vh;
   }

   .horizontal{
    padding-left: 45vw;
    
   }

   .horizontal > div{
    padding: 0 4vw;
   }

   .horizontal .cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 2px solid;
    width:28vw;
    padding: 50px 40px;
   }

   .cards:last-child{
    margin-right: 10px;
   }
   
</style>
