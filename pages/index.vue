<template>
  <section class="section"> 
 <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item">
      <nuxt-link to="/" class="link is-info"><img src="~static/abc.png" alt="" style="height: 70px;"></nuxt-link>
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu is-active">
    <div class="navbar-start">
      <nuxt-link to="/" class="navbar-item" >
        Home
      </nuxt-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <nuxt-link to="/" class="navbar-link" >
        Menu
      </nuxt-link>
        <div class="navbar-dropdown is-boxed">
          <nuxt-link to="/Career" class="navbar-item">
        Career
      </nuxt-link>
         <nuxt-link to="/Work" class="navbar-item">
        Work
      </nuxt-link>
         <nuxt-link to="/Hobby" class="navbar-item">
        Hobby
      </nuxt-link>
          
        </div>
      </div>
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
                  <img src="~static/chk.jpg" alt="">
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
        원하시는 정보를 선택하여 확인하세요.<br>
        <a href="https://www.facebook.com/profile.php?id=100002984598196"> <img src="~static/b.png" alt="" style="height: 50px;">__</a>  
        <a href="https://www.instagram.com/chk9867/"> <img src="~static/c.png" alt="" style="height: 50px;"></a>
        
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
                 <p class="title is-1">Assessment</p>
               
               <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="~static/c.jpg">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Choi Hyun Kyu</strong> <small>@naver.com</small>
        <br>
        저의 포토폴리오를 보시고 캐스팅할 의향이 있으십니까?<br><br>
        <button class="button" v-on:click="nClick = nClick+1"><img src="~static/like.png" alt="" style="height: 20px;"> </button>
               &nbsp;<button class="button" v-on:click="nClick = nClick-1"><img src="~static/hate.png" alt="" style="height: 20px;"></button>
               
                  투표결과 = {{nClick}}
                
      </p>
    </div>

    
    
    
   
  </div>
  
</article>

<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="~static/j.jpg">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <div>
        <strong>Page assessment</strong>
        <br><br><small>1~3점 까지 평가를 해주세요. (항목별 3점 만점입니다.)</small><br><br>
        메인페이지 구성?<br>
        <button class="button" v-on:click="ass = ass+1"><img src="~static/plus.png" alt="" style="height: 20px;"> </button>
               &nbsp;<button class="button" v-on:click="ass = ass-1"><img src="~static/Mn.png" alt="" style="height: 20px;"> </button>
                  &nbsp;점수 = {{ass}}<br>
                  <br>서브페이지 구성?<br>
        <button class="button" v-on:click="asb = asb+1"><img src="~static/plus.png" alt="" style="height: 20px;"> </button>
               &nbsp;<button class="button" v-on:click="asb = asb-1"><img src="~static/Mn.png" alt="" style="height: 20px;"> </button>
                  &nbsp;점수 = {{asb}}<br>
                  <br>코딩 난이도?<br>
        <button class="button" v-on:click="asc = asc+1"><img src="~static/plus.png" alt="" style="height: 20px;"> </button>
               &nbsp;<button class="button" v-on:click="asc = asc-1"><img src="~static/Mn.png" alt="" style="height: 20px;"> </button>
                  &nbsp;점수 = {{asc}}<br><br>
         <button class="button" v-on:click="res = ass+asb+asc">완료</button>
         &nbsp;
        <H1 v-if="res<=9 && res>=7"><strong>총평 : {{res}} 점에 A+ 입니다.</strong></H1>
         <h1 v-else-if="res>=4 && res<7"><strong>총평 : {{res}} 점에 B+ 입니다.</strong></h1>
         <h1 v-else-if="res<=3 && res>=1"><strong>총평 : {{res}} 점에 C+ 입니다.</strong></h1>
         <h1 v-else><strong>평가를 부탁드립니다.</strong></h1>
               
      </div>
    </div>

    
    
    
   
  </div>
  
</article>
                
                
                </article>
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
    return {nClick:0 ,ass:0,asb:0,asc:0,res:0}
    
  }
};
</script>
