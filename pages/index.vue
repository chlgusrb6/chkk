<template>
  <section class="section"> 
 
<nav class="level">
  <p class="level-item has-text-centered">
    <a class="link is-info">Home</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Career</a>
  </p>
  <p class="level-item has-text-centered">
    <img src="" alt="" style="height: 30px;">
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Work</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Hobby</a>
  </p>
</nav>
        <br>
       
    <article class="columns">
        <div class="column">        
         <div class="notification is-info">
            <figure class="image is-squre">
              <img src="C:\Users\510\Desktop\chkk\abc.jpg" alt="">
            </figure>
          </div>
        </div>
        </article>
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
      
      <article class ="box">
        <h1 class="title">보고 싶은 개 정보를 누루세요.</h1>
        <span v-for="dog in dogs" v-bind:key="dog">
        <nuxt-link :to ="'/dogs/' + dog" class="button is-success is-rounded"> 
          {{dog}}
        </nuxt-link> &nbsp;
        </span>
      </article>
    </section>
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {};
  },
  async asyncData() {
    const myImage = await axios.get('https://dog.ceo/api/breeds/image/random');
    const myDogs = await axios.get('https://dog.ceo/api/breeds/list');
    return { image: myImage.data.message, dogs: myDogs.data.message };
  }
};
</script>
