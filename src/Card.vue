<template>
    <div class="card">
        <img v-if="card.img" :src="card.img" class="card-img-top" alt="screenshot">
        <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ card.category }}</h6>
            <p class="card-text">{{ card.description }}</p>
            <a v-if="card.link" :href="card.link" class="btn btn-primary" target="_blank">Zobrazit více</a>
            <div class="tech">
                <img class="icon" v-for="(t,i) in card.technologies" :key="i" :src="getLink(t)" :alt="getAlt(t)" 
                data-toggle="tooltip" data-placement="top" :title="getAlt(t)" />
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'Card',
        props: ['card'],
        components: {
        },
        data: function () {
            return {
                
            }
        },
        computed: {
                
        },
        methods: {
            getLink: function(t) {
                if(t.icon) {
                    return t.icon;
                }
                if(t.cname) {
                    return 'https://cdn.svgporn.com/logos/' + t.cname + '.svg';
                }
                return 'https://cdn.svgporn.com/logos/' + t.toLowerCase().replace(/\./g, '').replace(/ /g, '-') + '.svg';
            },
            getAlt: function(t) {
                if(t.name) {
                    return t.name;
                }
                return t.toString();
            } 
            
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
   margin-bottom: 1rem; 
}
img.icon {
    height: 30px;
    margin: 5px;
}
div.tech {
    margin-top: 10px;
}
</style>