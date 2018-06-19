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
  </nav><br><br><br>
        
        <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="~static/damdda2.png" alt="Image" style="height:100px;">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>담:따</strong> <small>@ project by team SoS</small>
          <br>
          담따는 장애인들과 일반인들이 차별없이 사용할수있는 사물함입니다. <br><br>주된 요소로는 RPI (python) , Node.js (server) , DB (Oracle) , 음성인식 , 사물인식
        </p>
      </div>
    </div>
  </article>
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="~static/sos.png" alt="Image" style="height:90px;">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>SoS 구조 어플</strong> <small>@ project by team SoS</small>
          <br>
           지하상가 같은 폐쇄된 공간에서 응급환자나 사고 발생시에 빠르게 신고를 도와주는 어플입니다.<br><br>주된 요소로는 GPS , 바로신고 , 파싱  기능이 있습니다.
        </p>
      </div>
    </div>
  </article>
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="~static/damdda.png" alt="Image" style="height:110px;">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>Damdda Web Site</strong> <small>@ project by choi hyun kyu</small>
          <br>
           제품으로 제작한 담따를 어플만이아닌 웹으로도 접근 하기 위하여 제작하였습니다.<br><br>주된 요소로는 Q&A 게시판 , 로그인 , postgre db 이 있습니다.
        </p>
      </div>
    </div>
  </article>
</div>
    </section>
</template>