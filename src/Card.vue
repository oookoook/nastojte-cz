<template>
    <div class="card">
        <img v-if="card.img" v-bind:src="card.img" class="card-img-top" alt="screenshot">
        <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ card.category }}</h6>
            <p class="card-text">{{ card.description }}</p>
            <a v-bind:href="card.link" class="btn btn-primary">Zobrazit více</a>
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
.card {
   margin-bottom: 1rem; 
}
</style>