<template>
    <div class="card mb-3">
        <img v-if="card.img" :src="card.img" class="card-img-top" alt="screenshot">
        <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ card.year }}</h6>
            <p class="card-text">{{ card.description }}</p>
            <a v-if="card.link" :href="card.link" class="btn btn-primary" target="_blank">Zjistit více</a>
            <a v-if="card.repo" :href="card.repo" class="btn btn-primary" target="_blank">Repozitář</a>
            
        </div>
        <div class="card-footer tech mt-3">
                <tech-icon v-for="(t,i) in card.technologies" :key="i" :tech="t"/>
            </div>
    </div>
</template>

<script>
    import TechIcon from './TechIcon.vue';
    export default {
        name: 'Card',
        props: ['card'],
        components: {
            TechIcon
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
            //this.$el.querySelectorAll('img.icon').tooltip();
            //$(this.$el).find('img.icon').tooltip();
         }
    }
</script>
<style scoped>
</style>