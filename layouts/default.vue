<template>
  <div>
    <nav class="navbar is-black" >
      <div class = "navbar-brand"  >
        <nuxt-link to ="/" class="navbar-item" >Choi Hyun Kyu 의 Portfolio</nuxt-link>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-end">
              <nuxt-link to="/about" class="navbar-item">소개</nuxt-link>
              <nuxt-link to="/stat" class="navbar-item">통계</nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt/>
    <footer class ="footer has-text-centered">
    <p>2018.06.22 Choi Hyun Kyu Portfolio              @Project by Choi</p> 
  </footer>
  </div>
  
</template>

