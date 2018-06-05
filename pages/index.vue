<template>
  <section class="section"> 
 
<nav class="level">
  <div class="level-item has-text-centered ">
    <div>
    <p class="heading">홈으로</p>
    <nuxt-link to="/" class="title">Home</nuxt-link>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">경력</p>
    <nuxt-link to="/about" class="title">Career</nuxt-link>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <nuxt-link to="/about" class="link is-info"><img src="~static/abc.png" alt="" style="height: 70px;"></nuxt-link>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">작품 활동</p>
    <nuxt-link to="/about" class="title">Work</nuxt-link>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">취미</p>
    <nuxt-link to="/about" class="title">Hobby</nuxt-link>
    </div>
  </div>
</nav>

        <br>
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">
            <div class="tile">
              <div class = "tile is-parent is-vertical">
                <article class="tile is-child notification is-black">
                  <p class="title is-1">Personal information</p>
                  <figure class="image is-4by3">
                  <img src="~static/abc.png" alt="">
                  </figure><br><br>
                  <div class="box">
  <article class="media">
    
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Choi Hyun Kyu</strong> <small>@BUN</small>
          <br><br>
          Birth : 1994.02.08<br>School : Mokwon Univelsity<br>Tell : 010-3848-****<br>
        </p>
        <div class="subtitle">
        <img src="~static/a.png" alt="" style="height: 30px;">--chk@naver.com<br> 
        <img src="~static/b.png" alt="" style="height: 30px;">--chk940208<br>
        <img src="~static/c.png" alt="" style="height: 30px;">--chkk<br>
        </div>
      </div>
      
       
      
    </div>
  </article>
</div>
                  
                </article>
                
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-black">
                 <p class="title is-1">My Dream</p><br>
                 <article class="message is-link">
                      <div class="message-header">
                        <p>Programmer</p>
                     </div>
                   <div class="message-body">
                     <strong>웹프로그래머</strong>는 이용자의 요구와 사용목적 등을 고려하여 새로운 인터넷 사이트를 개설하고 인터넷 사이트상에서 요구되거나 서비스되는 각종 프로그램을 개발한다. 논리 흐름도와 다이어그램을 사용하여 프로그램을 분석, 검토하고, 세부 논리 흐름도를 프로그래밍 언어로 전환시킨다. 웹과 데이터베이스를 연동시키기 위한 프로그램을 작성하며, 사용자의 요구에 맞춰 프로그램을 개발 및 개정한다.
                  </div>
                </article>
                <article class="message is-primary">
                      <div class="message-header">
                        <p>Available Programs</p>
                     </div>
                   <div class="message-body">
                     <img src="~static/visual.png" alt="" style="height: 40px;"><br><br><br>
                     <img src="~static/eclipse.png" alt="" style="height: 25px;"><br><br><br>
                     <img src="~static/nodejs.png" alt="" style="height: 35px;"><br><br><br>
                     <img src="~static/python.png" alt="" style="height: 50px;">
                  </div>
                </article>
                </article>
               </div>
               <div class="tile is-parent">
                <article class="tile is-child notification is-black">
                 <p class="title is-1">My introduce</p>
               <p class="subtitle">With an image</p>
                
                </article>
               </div>
            </div>
            
          </div>
        </div>
        
      
    <article class="columns">
        <div class="column">        
         <div class="notification is-info">
            <figure class="image is-squre">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg" alt="">
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
import axios from "axios";
export default {
  data() {
    return {};
  },
  async asyncData() {
    const myImage = await axios.get("https://dog.ceo/api/breeds/image/random");
    const myDogs = await axios.get("https://dog.ceo/api/breeds/list");
    return { image: myImage.data.message, dogs: myDogs.data.message };
  }
};
</script>
