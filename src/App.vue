<template>
  <div id="app">
       <Menu v-bind:title="title">
            <li class="nav-item">
            <a class="nav-link" href="#">Toto je z App</a>
            </li>
        </Menu>
        <div class="container-fluid">
            <h1 class="display-3">Kdo jsem</h1>
            <h1 class="display-3">Jak mě kontaktovat</h1>
            <h1 class="display-3">Co dělám</h1>
            <div class="cards">
                <div v-for="(d, di) in decks" :key="di" class="card-deck">
                    <Card v-bind:card="c" v-for="(c, index) in cards.slice(di*3, di*3+3)" :key="index"/>
                    <!--
                    <div v-for="(c, index) in cards.slice(di*3, di*3+3)" :key="index" class="card-wrapper"> 
                        <Card v-bind:card="c" />
                    </div>
                    -->
                </div>
            </div>
            <h1 class="display-3">Jak vypadá můj kód</h1>
            <h1 class="display-3">Technologie, které znám</h1>

        </div>
  </div>
</template>

<script>
    import Card from './Card.vue';
    import Menu from './Menu.vue';
    export default {
        name: 'nastojteApp',
        components: {
            Card,
            Menu
        },
        data: function () {
            return {
                title: 'Adam Kučera',
                cards: [
                {
                    category: 'MU',
                    title: 'CAFM',
                    img: require('../assets/code.png'),
                    description: 'Vývoj systému pro podporu facility managementu na Masarykově univerzitě.',
                    link: '',
                    technologies: ['Archibus', 'Apache Tomcat', 'Javascript', 'Java', 'SQL', 'Git']
                }, /*{
                    category: 'MU',
                    title: 'BMS MU',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Inteligentní budovy - systémová správa a údržba existující aplikace.',
                    technologies: ['IIS', 'Windows Server', 'SVN', 'NLB', 'DFS']
                },*/ {
                    category: 'MU',
                    title: 'BMS Sentinel',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Dohledový systém pro inteligentní budovy.',
                    technologies: ['.NET Framework', 'C#', 'BACnet']
                }, {
                    category: 'MU',
                    title: 'Semantic BMS',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Sémantický model pro data z inteligentních budov.',
                    technologies: ['Java', 'REST', 'Apache Jena', 'Apache Tomcat', 'OWL', 'Javascript', 'jQuery']
                }, {
                    category: 'Microton',
                    title: 'Joolca troubleshooting',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Interaktivní rozhovací strom pro základní zákaznickou podporu '
                    + ' - odhalování typických potíží s prodávanými výrobky. Místo databáze byl na backendu použit ' 
                    + ' Google spreadsheet rozšířený o REST API, aby bylo možné snadno upravovat rozhodovací stromy.',
                    technologies: ['Javascript', 'jQuery', 'REST', 'Google script', 'Google Spreadsheet']
                }, {
                    category: 'Microton',
                    title: 'Dropair',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Aplikace pro podporu dropshipping firmy. Údržba již existující aplikace, '
                    + ' vývoj nových crawlerů, scraperů a parserů.', 
                    technologies: ['Javascript', 'AngularJS', 'Java', 'Spring Boot', 'Node.js', 'SOLR', 'MySQL', 'JPA', 'Hibernate']
                }, {
                    category: 'Other',
                    title: 'Maják',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Hra na letní tábor. Webový server měžící na Rasperry PI, ke kterému se přes WiFi připojují '
                    + ' hráči a plní úkoly.', 
                    technologies: ['Javascript', 'Vue.js', 'Webpack', 'Bootstrap', 'Node.js', 'Raspberry PI']
                }, {
                    category: 'Other',
                    title: 'Mapa poštovních schránek',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Mapa poštovních schránek', 
                    technologies: ['Javascript', 'Vue.js', 'Mapy.cz', 'Webpack', 'Bootstrap', 'Node.js', 'Express.js', 'AWS Lambda', 'DynamoDB']
                }, {
                    category: 'Other',
                    title: 'Mapa cen stavebníh pozemků',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Mapa cen stavebních pozemků. Technologické demo, uznávám, není příliš funkční.', 
                    technologies: ['Javascript', 'Vue.js', 'Webpack', 'Bootstrap', 'Node.js', 'Express.js', 'AWS Lambda', 'Apify']
                }, {
                    category: 'Other',
                    title: 'Nastojte.cz',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Tyto stránky. Serverless prezentace s využitím Amazon AWS', 
                    technologies: ['Javascript', 'Vue.js', 'Webpack', 'Bootstrap', 'AWS Route 53', 'AWS CloudFront', 'AWS S3', 'aws-sdk']
                },
                ],
            }
        },
        computed: {
            decks: function() { return new Array(Math.ceil(this.cards.length / 3)) },        
        },
        methods: {
        },
        created() {
         }
    }
</script>
<style scoped>

</style>