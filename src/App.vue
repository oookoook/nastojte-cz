<template>
  <div id="app">
       <Menu v-bind:title="title">
            <li class="nav-item">
            <a class="nav-link" href="#">Toto je z App</a>
            </li>
        </Menu>
        <about-me />
  </div>
</template>

<script>
    
    import Menu from './Menu.vue';
    import AboutMe from './AboutMe.vue';
    export default {
        name: 'nastojteApp',
        components: {
            Menu,
            AboutMe
        },
        data: function () {
            return {
                title: 'Adam Kučera',
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