<template>
    <div class="card mb-3">
        <img v-if="card.img" :src="card.img" class="card-img-top border-bottom" alt="screenshot">
        <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ card.year }}</h6>
            <p class="card-text">{{ card.description }}</p>
            
            <tech-icon v-for="(t,i) in card.technologies" :key="i" :tech="t"/>
        </div>
        <div class="card-footer tech mt-3">
                <a v-if="card.link" :href="card.link" class="btn btn-nastojte" target="_blank">Vyzkoušet</a>
                <a v-if="card.about" :href="card.about" class="btn btn-nastojte" target="_blank">Zjistit více</a>
                <a v-if="card.repo" :href="card.repo" class="btn btn-nastojte" target="_blank">Repozitář</a>
                <a v-if="!(card.link || card.about || card.repo)" href="#" class="btn btn-nastojte disabled" target>Neveřejný projekt</a>
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
.card {
    min-width: 15rem;
}
</style>