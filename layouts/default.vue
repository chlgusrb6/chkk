<template>
  <div>
    <nav class="navbar is-info " >
      <div class = "navbar-brand"  >
        <nuxt-link to ="/" class="navbar-item " >
        <figure class ="image is-64x64">
          <img src="~static/dog1.png" alt="">
          </figure> 
          </nuxt-link>
      </div>
      <div class="navbar-menu is-active">
        <div class="navbar-end">
              <nuxt-link to="/about" class="navbar-item">소개</nuxt-link>
              <nuxt-link to="/stat" class="navbar-item">통계</nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt/>
    <footer class ="footer has-text-lefted">
    <p>2018.06.22 Choi Hyun Kyu Portfolio @Project by Choi</p> 
  </footer>
  
  </div>
  
</template>

