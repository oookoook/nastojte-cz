<template>
    <b-card class="mb-3 full-height" no-body>
        <b-img-lazy top v-if="card.img" :src="card.img" :srcset="card.srcset || srcset" class="card-img-top border-bottom" alt="screenshot" />
        <b-card-body>
            <b-card-title class="text-left">{{ card.title }}</b-card-title>
            <b-card-sub-title>{{ card.year }}</b-card-sub-title>
            <b-card-text class="mt-2">{{ card.description }}</b-card-text>
            <!--
            <h5 class="card-title">{{ card.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ card.year }}</h6>
            <p class="card-text">{{ card.description }}</p>
            -->
            <tech-icon v-for="(t,i) in card.technologies" :key="i" :tech="t"/>
        </b-card-body>
        <b-card-footer>
            <b-button v-if="card.link" :href="card.link" class="btn-nastojte" target="_blank">Vyzkoušet</b-button>
            <b-button v-if="card.about" :href="card.about" class="btn-nastojte" target="_blank">Zjistit více</b-button>
            <b-button v-if="card.repo" :href="card.repo" class="btn-nastojte" target="_blank">Repozitář</b-button>
            <b-button disabled v-if="!(card.link || card.about || card.repo)" href="#" class="btn-nastojte">Neveřejný projekt</b-button>
        </b-card-footer>
        <!--
        <div class="card-footer tech mt-3">
                <a v-if="card.link" :href="card.link" class="btn btn-nastojte" target="_blank">Vyzkoušet</a>
                <a v-if="card.about" :href="card.about" class="btn btn-nastojte" target="_blank">Zjistit více</a>
                <a v-if="card.repo" :href="card.repo" class="btn btn-nastojte" target="_blank">Repozitář</a>
                <a v-if="!(card.link || card.about || card.repo)" href="#" class="btn btn-nastojte disabled" target>Neveřejný projekt</a>
            </div>
        -->
    </b-card>
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
            srcset() {
                if(!this.card.img) {
                    return null;
                }
                return [this.card.img.replace(/jpe?g|png/, 'webp') + ' 400w', this.card.img + ' 400w'];
            },
            sizes() {
                if(!this.card.img) {
                    return null;
                }
                return ['400w', '400w'];
            }
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