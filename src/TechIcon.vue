<template>
  <span>
  <img v-if="!tech.text" class="icon m-1" :src="getLink(tech)" :alt="getAlt(tech)" 
                data-toggle="tooltip" data-placement="top" :title="getAlt(tech)" /><span 
  class="m-1 badge badge-pill badge-success" v-if="tech.text" :style="{ backgroundColor: tech.color }">{{ tech.name }}</span>
  </span>
</template>

<script>
    
    export default {
        name: 'TechIcon',
        props: ['tech'],
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
                    return require(`../assets/tech/${t.icon}`);
                }
                if(t.cname) {
                    return require(`../assets/tech/${t.cname}.svg`);
                }
                //console.dir(t);
                return require(`../assets/tech/${t.toLowerCase().replace(/\./g, '').replace(/ /g, '-')}.svg`);
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
         }
    }
</script>
<style scoped>
img.icon {
    height: 2rem;
}

span.text {
    height: 2rem;
    font-weight: bold;
    font-size:1rem;
    padding: 0.5rem;
}

</style>