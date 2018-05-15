<template>
  <section class="section"> 
   <div class="hero is-danger"> 
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">개사랑</h1>
          <h2 class="subtitle">개사랑 사이트는 개를 사랑하는 사람들을 위한 상세한 정보를 제공합니다.</h2>
       </div>
        </div>
        </div>
        <br>
       
      <div class="columns">
        <div class="column">        
         <div class="notification is-info">
            <figure class="image is-squre">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg" alt="">
            </figure>
          </div>
        </div>
        <div class="column">         
         <div class="message is-info">
           <div class="message-header">
             <p>오늘의 개 사진</p>
           </div>
           <div class="message-body">
             <figure class="image is-squre">
               <img v-bind:src="image" alt="">
             </figure>
           </div>
         </div>
        </div>
      </div>
    </section>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  async asyncData() {
    const myImage = await axios.get("https://dog.ceo/api/breeds/image/random");
    return { image: myImage.data.message };
  }
};
</script>
