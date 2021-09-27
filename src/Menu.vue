<template>
  
  <b-navbar id="menu" type="dark" toggleable="sm" sticky class="mb-3 bg-nastojte">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand class="title-nastojte" href="#"><img :src="ico" height="32px" class="d-inline-block align-top mr-2" alt="Logo">
        {{ title }}
    </b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
    <b-navbar-nav>
        <slot></slot>
    </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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