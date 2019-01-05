<template>
  <div id="app">
       <Menu :title="title" :ico="icon">
           <li class="nav-item">
            <router-link class="nav-link" to="/vonnegut">Proč Nastojte?</router-link>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarAuthorMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        O autorovi
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarAuthorMenuLink">
          <router-link class="dropdown-item" to="/">Kdo jsem</router-link>
          <router-link class="dropdown-item" to="/#contact">Jak mě kontaktovat</router-link>
          <router-link class="dropdown-item" to="/#what">Co dělám</router-link>
          <router-link class="dropdown-item" to="/#repos">Jak vypadá můj kód</router-link>
          <router-link class="dropdown-item" to="/#tools">Co používám</router-link>
        </div>
      </li>
        </Menu>
        <router-view>
        </router-view>
  </div>
</template>

<script>
    
    import Menu from './Menu.vue';
    export default {
        name: 'nastojteApp',
        components: {
            Menu,
        },
        data: function () {
            return {
                title: 'Adam Kučera',
                icon: require('../assets/favicon-dark.png'),
                
            }
        },
        computed: {
        },
        methods: {
        },
        created() {
         }
    }
</script>
<style scoped>

img.photo {
    width: 200px;
}
</style>