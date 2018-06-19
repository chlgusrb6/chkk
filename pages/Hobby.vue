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
  
  </nav><br>
        <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-dark">
          <p class="title">My Hobby is</p>
          <p class="subtitle" ><br>Soccer and Baseball</p>
        </article>
        <article class="tile is-child notification is-dark">
          <p class="title">Programing</p>
          <p class="subtitle"><br>오류해결을 좋아합니다.</p>
          <img src="~static/500.jpg" alt="" style="height: 150px;">
          <img src="~static/404.png" alt="" style="height: 190px;">
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Favorite Team and Player</p>
          <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="~static/paris.jpg">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>파리 생제르맹 FC</strong><br>
        <br>
        프랑스 리그앙에 소속되어 있는 프로 축구 클럽. 연고지는 수도 파리이고 홈 구장으로는 파르크 데 프랭스를 사용하고 있다. <br>애칭으론 페에스제(PSG), 파리지앵(Les Parisiens), <br>빨강과 파랑(Les Rouge et Bleu)이 있다.
        <br><br>
        
      </p>
    </div>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="~static/nem.jpg" style="height:120px;">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Neymar</strong>
            <br>
           Toda honra e toda gloria pra ti Deus.!!<br>
Nada e impossivel para quem cre em ti<br>
하나님께 모든 영광과 명예를 바쳐요.<br>
당신을 믿는 자에게 불가능은 없어요.
            <br>
            
          </p>
        </div>

      </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="~static/zlt.jpg" style="height:120px;">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Zlatan Ibrahimovic </strong>
            <br>아내의 생일선물은 무엇을 주었냐는 질문에<br><br>
            Nothing, She already has Zlatan<br>
            (아무것도 내 마누라는 이미 즐라탄을 가졌다.)
            
            
          </p>
        </div>
      </div>
    </article>
  </div>
</article>
        </article>
      </div>
    </div>
    
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-warning">
      <div class="content">
        <p class="title">Hanwha Eagles</p> 
        <img src="~static/hw.jpg" style="height:150px; weight:100px;"><br><br>
        <img src="~static/hi.png" style="height:100px; weight:100px;"><br>
        <img src="~static/kk.png" style="height:131px; weight:100px;"><br>
        <img src="~static/je.png" style="height:104px; weight:100px;"><br>
        
    
    
        
        
      </div>
    </article>
  </div>
</div>
        
    </section>
</template>