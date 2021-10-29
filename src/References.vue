<template>
  <b-container class="text-justify" id="content">
    <h1>Reference</h1>
    <p>Podívejte se na výběr mých nejzajímavějších a nejlepších referencí. 
        Většina projektů je bohužel neveřejných, ale kde je to možné, můžete se podívat i na zdrojové kódy nebo běžící službu, 
        stránku, nebo aplikaci.</p>
 
            <references-table />

  </b-container>
</template>

<script>
    import ReferencesTable from './ReferencesTable.vue';
    export default {
        name: 'References',
        components: {
            ReferencesTable
        },
        mixins: [],
        data: function () {
            return {
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