<template>
  <nav id="menu" class="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
    <a class="navbar-brand" href="#">
        <img src="../assets/favicon-dark.png" class="d-inline-block align-top" alt="">
        Nastojte.cz &ndash; {{ title }}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <slot></slot>
        <li class="nav-item">
            <a class="nav-link" href="#">Proč Nastojte?</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarAuthorMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          O autorovi
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarAuthorMenuLink">
          <a class="dropdown-item" href="#">Kdo jsem</a>
          <a class="dropdown-item" href="#">Jak mě kontaktovat</a>
          <a class="dropdown-item" href="#">Co dělám</a>
          <a class="dropdown-item" href="#">Jak vypadá můj kód</a>
          <a class="dropdown-item" href="#">Co používám</a>
        </div>
      </li>
    </ul>
  </div>
  </nav>
</template>

<script>
    
    export default {
        name: 'Menu',
        props: ['title'],
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