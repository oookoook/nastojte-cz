<template>
  <nav id="menu" class="navbar sticky-top navbar-dark navbar-expand-lg mb-3 bg-nastojte">
    <a class="navbar-brand title-nastojte" href="#">
        <img :src="ico" height="32px" class="d-inline-block align-top mr-2" alt="Logo">
        {{ title }}</a>
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
<style>
    
</style>