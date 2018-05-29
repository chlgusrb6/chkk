<template>
    <section class="section">
        {{dogName}} 

    </section>
</template>
<script>
    export default {
        asyncData({ params }) {
            return {
                dogName: params.dog
            };
        }
    };
</script>
