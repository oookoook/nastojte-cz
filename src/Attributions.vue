<template>
  <b-container class="text-justify" id="content">
    <h2>Přiznání autorství (CC Atributions)</h2>
            <p>Při vývoji využívám množství volně dostupných knihoven, nástrojů, multimédií a dalších autorských děl. Některá
                z nich požadují, aby byl autor zřetelně uveden, pokud používáme jeho dílo.</p> 
                <p>Na těchto stránkách se toto týká symbolu použitého v odrážkových seznamech, v hlavičce a v ikoně stránek, který vytvořil <a href="https://www.flaticon.com/authors/dave-gandy" 
                title="Dave Gandy"  target="_blank" rel="noopener">Dave Gandy</a> a publikoval jej na portále <a href="https://www.flaticon.com/" 
                title="Flaticon" rel="noopener" target="_blank">www.flaticon.com</a> a licencoval jako <a href="https://creativecommons.org/licenses/by/3.0/" 
                title="Creative Commons BY 3.0" rel="noopener" target="_blank">CC 3.0 BY</a>. 
                Tento symbol původně pochází z projektu <a href="https://fontawesome.com/" target="_blank" rel="noopener">Font Awesome</a>.
            </p>
            <p>Autory fotek v tzv. <i>carouselu</i> v horní části hlavní stránky jsou: <template v-for="(a,i) in authors"><a :href="a.link" :key="`ra${i}`">{{ a.name }}</a>. </template>
            <p>Ikony programovacíh jazyků a dalších IT nástrojů jsou většinou stahovány z projektů 
                <a href="https://svgporn.com/" target="_blank" rel="noopener">SVG Porn</a> nebo z <a href="https://www.svgrepo.com/" target="_blank" rel="noopener">SVG Repo</a>.</p>

            <p>Nakonec, o názvu webu si víc můžete přečíst 
                <router-link to="/vonnegut">tady</router-link>.</p>

  </b-container>
</template>

<script>
    import CarouselImages from './CarouselImages.vue';

    export default {
        name: 'AboutMe',
        components: {
        },
        mixins: [CarouselImages],
        data: function () {
            return {
            }
        },
        computed: {
            authors() {
                return this.reasons.map(r => r.author);
            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>
<style scoped>

</style>