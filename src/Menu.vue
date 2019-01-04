<template>
  <nav id="menu" class="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
    <a class="navbar-brand" href="#">
        <img :src="ico" class="d-inline-block align-top" alt="">
        Nastojte.cz &ndash; {{ title }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <slot></slot>
    </ul>
  </div>
  </nav>
</template>

<script>
    
    export default {
        name: 'Menu',
        props: ['title', 'ico'],
        components: {
        },
        data: function () {
            return {
                
            }
        },
        computed: {
                
        },
        methods: {
            
        },
        timers: {
        },
        created() {

        },
        mounted() {
         }
    }
</script>
<style scoped>

</style>