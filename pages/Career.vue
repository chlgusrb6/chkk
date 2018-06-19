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
        <br><strong>My Career</strong><br><br><br>Available Programs<br><br><strong>C (Visual studio)</strong>
<progress class="progress " value="80" max="100"></progress><strong>Eclipse</strong>
<progress class="progress" value="90" max="100">30%</progress><strong>Node.js</strong>
<progress class="progress " value="70" max="100">45%</progress><strong>Python</strong>
<progress class="progress " value="60" max="100">60%</progress><br>
<div class="content">
  <h1>My Experience</h1>
  
  <h2>Outback Steak House</h2>
  <p>저는 대전 둔산동에 있는 아웃백에서 아르바이트 경험을 하였습니다. 기간은 종합 4년 정도가 됩니다.<br></p>
  <ul>
    <li>사람을 대하는 방법과 말하는 방법을 많이 배웠습니다.</li>
    <li>같이 일하는 직원들과에 팀워크를 배웠습니다.</li>
    <li>직원을 교육하면서 리더쉽에 일부분을 배웠습니다.</li>
  </ul>
  <h1>Certification</h1>
  <h3>정보처리기사</h3>
  <p>정보처리기사란 응시자격을 갖춘 자가 산업인력공단에서 시행하는 정보처리기사 시험에 합격하여 그 자격을 취득한 자를 말한다.</p>
  <ol>
    <li>프로그래머로써의 기본 자격증입니다.</li>
    <li>컴퓨터,공학,DB 다분야에 필요한 자격증입니다.</li>
    <li>취업을위한 스펙이 됩니다.</li>
  </ol></div>
    </section>
</template>