<template>
  <div id="app">
       <Menu v-bind:title="title">
            <li class="nav-item">
            <a class="nav-link" href="#">Toto je z App</a>
            </li>
        </Menu>
        <div class="container-fluid">
            <h1 class="display-3">Kdo jsem</h1>
<p>Jsem softwarový vývojář z Brna. Začal jsem programovat ve třetí třídě a stále mě to baví. V IT a SW vývoji jsem
zaměstnaný od roku 2008.</p>

                <p>Působím na částečný úvazek na <a href="https://ofm.ukb.muni.cz/" target='_blank'>Masarykově univerzitě</a>
                jako vývojář a systémový administrátor zaměřený na oblast Facility managementu a inteligentní budovy. Zároveň
                působím jako vývojář na volné noze.</p> 
                
                <p>Proč si vybrat právě mě? Moje silné stránky jsou:</p>
<ul>
<li>Znalost veškerých aspektů vývoje: od analýzy přes návrh včetně datového modelu přes implementaci až po dlouhodobý provoz systémů.</li>
<li>Znalost nejenom programovacích jazyků, ale infrastruktury, ve které kód běží: platformy (JRE, CLR), aplikační servery, databáze, sítě.</li>
<li>Schopnost pochopit a přizpůsobit se filozofii produktů, se kterými pracuji. Nepochopení základních konceptů je často zdrojem nespolehlivých, nevýkonných a neflexibilních řešení.</li>
<li>Znalost širokého spektra dostupných platforem, jazyků a nástrojů. Na některé věci je nejlepší Java, na jiné .NET, někdy je nejlepší Python a jindy stačí PowerShell. Cílem je nalézt nástroj, který je nejvhodnější na řešení daného problému, ne snažit se za každou cenu přizpůsobit problém známé technologii. Na druhou stranu, věřím, že je důležité nevynalézat znovu kolo a do nejvyšší možné míry používat již existující projekty.</li>
<li>Orientace na požadavky uživatele. Aplikace, je pro uživatele nepřehledná nebo nepohodlná, nebudou ji používat. To samé platí ve chvíli, kdy její vývoj trvá příliš dlouho.Dokonalý produkt doručený ve chvíli, kdy už není potřeba, je stejně špatný jako nepohodlná a chybami zamořená aplikace, která se navíc nedá udržovat. Požadavky uživatelů a maximální užitek pro ně je pro mě stejně důležitý jako kvalita návrhu a samotného kódu. Tyto věci musí být v rovnováze.</li>
</ul>

<p>Jsem full stack developer, ale návrhy UI nejsou můj šálek kávy. I když s nimi mám určité zkušenosti, specializovaný UI/UX designér a webkodér vám v této oblasti poskytnou lepší služby.</p>

<h2 class="display-4">Dr. Kompjůtr</h2>
<p>Kromě práce jsem sem absolvoval i postgraduální studium na <a href="https://fi.muni.cz/" target='_blank'>FI MU</a>. I když jsou požadavky na software vyvíjený v akademické sféře odlišné od těch, které se objevují v komerční, jsem přesvědčen, že tato zkušenost přináší výhody i při "klasickém" vývoji:</p>
<ul>
<li>Solidní teoretické základy, které jsem schopný použít v praxi - např při vývoji vícevláknových aplikací, efektivních datových struktur a datových modelů a dalších problémů, které představují úzká hrdla v aplikacích nebo rovnou způsobují jejich nespolehlivost.</li>
<li>Schopnost konstruktivně přijímat kritiku - pár nelichotivých recenzí vás naučí nebrat si věci osobně.</li>
<li>Schopnost porovnat dostupné možnosti na základě objektivních kritérií, umět se rozhodnout a svoji volbu si i obhájit.</li>
</ul>

            <h1 class="display-3">Jak mě kontaktovat</h1>
            <ul>
                <li><a href="https://www.linkedin.com/in/adam-kucera-sw-dev/">LinkedIn</a></li>
                <li>E-mail: <a :href="'mailto:'+mail">{{ mail }}</a></li>

            </ul>

            <h1 class="display-3">Co dělám</h1>
            
            <h2 class="display-4">Co za to?</h2> 

            <h2 class="display-4">Reference</h2>
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
            <p>Na ukázky kódu se můžete nejpohodlněji podívat do následujících veřejných Git repozitářů:</p>
            <ul>
                <li><a href="https://github.com/oookoook?tab=repositories">GitHub</a></li>
                <li><a href="https://gitlab.fi.muni.cz/xkucer16/semanticBMS">GitLab @ FI MU</a></li>
            </ul>
            <h1 class="display-3">Co používám</h1>

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
                mail: 'adam@nastojte.cz',
                cards: [
                {
                    category: 'Microton',
                    title: 'Joolca troubleshooting',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Interaktivní rozhovací strom pro základní zákaznickou podporu '
                    + ' - odhalování typických potíží s prodávanými výrobky. Místo databáze byl na backendu použit ' 
                    + ' Google spreadsheet rozšířený o REST API, aby bylo možné snadno upravovat rozhodovací stromy.',
                    technologies: ['Javascript', 'jQuery', 'REST', { name: 'Google Aps Script', icon: 'https://developers.google.com/site-assets/developers_64dp.png'}, 'Google GSuite']
                }, {
                    category: 'Microton',
                    title: 'Dropair',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Aplikace pro podporu dropshipping firmy. Údržba již existující aplikace, '
                    + ' vývoj nových crawlerů, scraperů a parserů.', 
                    technologies: ['Javascript', {name: 'AngularJS', icon: 'https://angularjs.org/img/AngularJS-large.png' }, 'Java', 'Spring', 'Node.js', 'SOLR', 'MySQL', 'Hibernate']
                }, {
                    category: 'Other',
                    title: 'Maják',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Hra na letní tábor. Webový server měžící na Rasperry PI, ke kterému se přes WiFi připojují '
                    + ' hráči a plní úkoly.', 
                    technologies: ['Javascript', {name: 'Vue.js', cname: 'vue' }, 'Webpack', 'Bootstrap', 'Node.js', 'Raspberry PI']
                }, {
                    category: 'Other',
                    title: 'Mapa poštovních schránek',
                    img: require('../assets/code.png'),
                    link: 'https://schranky.nastojte.cz',
                    description: 'Mapa poštovních schránek', 
                    technologies: ['Javascript', {name: 'Vue.js', cname: 'vue' }, {name: 'Mapy.cz API', icon: 'http://api.mapy.cz/img/web/logo.gif'}, 'Webpack', 'Bootstrap', 'Node.js', 'Express', 'AWS Lambda', 'AWS DynamoDB']
                }, {
                    category: 'Other',
                    title: 'Mapa cen stavebních pozemků',
                    img: require('../assets/code.png'),
                    link: 'htps://reality.nastojte.cz',
                    description: 'Mapa cen stavebních pozemků. Technologické demo, uznávám, není příliš funkční.', 
                    technologies: ['Javascript', {name: 'Vue.js', cname: 'vue' }, {name: 'Mapy.cz API', icon: 'http://api.mapy.cz/img/web/logo.gif'}, 'Webpack', 'Bootstrap', 'Node.js', 'Express', 'AWS Lambda', {name: 'Apify', icon: 'https://www.apify.com/img/logos/logo-notext.svg' }]
                }, {
                    category: 'Other',
                    title: 'Nastojte.cz',
                    img: require('../assets/code.png'),
                    link: 'https://github.com/oookoook/nastojte-cz',
                    description: 'Tyto stránky. Serverless prezentace s využitím Amazon AWS', 
                    technologies: ['Javascript', {name: 'Vue.js', cname: 'vue' }, 'Webpack', 'Bootstrap', {name: 'AWS Route 53', cname: 'aws-route53' }, 'AWS CloudFront', 'AWS S3' ]
                }, {
                    category: 'MU',
                    title: 'CAFM',
                    img: require('../assets/code.png'),
                    description: 'Vývoj systému pro podporu facility managementu na Masarykově univerzitě.',
                    link: '',
                    technologies: [{ name: 'Archibus', icon: 'https://archibus.com/wp-content/uploads/2018/02/retina_logo_black.png'}, { name: 'Apache Tomcat', cname:'tomcat' }, 'Javascript', 'Java', { name: 'Microsoft SQL Server', icon: 'https://vignette.wikia.nocookie.net/logopedia/images/8/80/SQLServer.png' }, 'Git']
                }, /*{
                    category: 'MU',
                    title: 'BMS MU',
                    img: require('../assets/code.png')
                    description: 'Inteligentní budovy - systémová správa a údržba existující aplikace.',
                    technologies: ['IIS', 'Windows Server', 'SVN', 'NLB', 'DFS']
                },*/ {
                    category: 'MU',
                    title: 'BMS Sentinel',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Dohledový systém pro automatiza4n9 protokol BACnet.',
                    technologies: [ { name: '.NET Framework', cname: 'dotnet'}, {name: 'C#', icon: 'https://developer.fedoraproject.org/static/logo/csharp.png'}, { name: 'BACnet', icon: 'http://www.bacnet.org/Images/BACnet-Logo-New.gif' }]
                }, {
                    category: 'MU',
                    title: 'Semantic BMS',
                    img: require('../assets/code.png'),
                    link: '',
                    description: 'Sémantický model pro data z inteligentních budov.',
                    technologies: ['Java', 'REST', { name: 'Apache Jena', icon: 'https://jena.apache.org/images/jena-logo/jena-logo-jumbotron.png' }, { name: 'Apache Tomcat', cname:'tomcat' }, { name: 'Web Ontology Language', icon: 'https://www.w3.org/Icons/SW/Buttons/sw-owl-blue-v.svg' }, 'Javascript', 'jQuery']
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