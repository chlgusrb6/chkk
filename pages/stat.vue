<template>
    <section class="section">
        <article class="hero is-black">
            <div class="hero-body">
                <h1 class="title">애견통계</h1>
            </div>
        </article>
        <article class = "message">
            <div class = "message-head">
                애견 산업 전망
            </div>
            <div class = "message-body">
                <div id="chartArea"></div>
                
            </div>
        </article>
    </section>
</template>

<script>
import myBarChart from "~/plugins/myBarChart";
if(process.client)
    myBarChart("chartArea");
</script>
