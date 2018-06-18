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
  <div id="navbarExampleTransparentExample" class="navbar-menu">
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
        
        <article class="hero is-info">
            <div class="hero-body">
                <h1 class="title">개사랑을 소개합니다.</h1>
            </div>
        </article>
    </section>
</template>