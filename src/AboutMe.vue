<template>
  <div class="container" id="content">
      <h1 class="display-4">Kdo jsem</h1>
 
<!-- https://codepen.io/machal/pen/mqmNyz -->
<div class="d-flex flex-column flex-md-row">
    <p class="mb-3 mr-md-3 w-50">
        <img src="../assets/photo.jpg" class="img-fluid" alt="My face">
    </p>
    <div>
    <p class="lead">
        Začal jsem programovat ve třetí třídě v QBASICu podle návodů v časopise ABC a pořád mě to baví.
    </p>
    <p>Jsem softwarový vývojář z Brna. V IT a SW vývoji jsem
zaměstnaný od roku 2008.</p>

                <p>Působím na částečný úvazek na <a href="https://ofm.ukb.muni.cz/" target='_blank'>Masarykově univerzitě</a>
                jako vývojář a systémový administrátor zaměřený na oblast Facility managementu a inteligentní budovy. Zároveň
                působím jako vývojář na volné noze. Díky spolupráci s firmou <a href="http://www.microton.cz/">Microton</a> jsem
                se dostal i k práci na projektech pro zahraniční klienty (USA, Austrálie).</p>
  </div>
</div>
<div class="jumbotron bg-light border border-info">
<p class="lead">Proč si vybrat právě mě?</p>
<hr>
 <ul class="list-unstyled">
<code-li>Znám všechny aspekty vývoje: od analýzy přes návrh včetně datového modelu přes implementaci až po dlouhodobý provoz systémů.</code-li>
<code-li>Znám nejenom programovací jazyky, ale i infrastrukturu, ve které kód běží: běhová prostředí (JRE, CLR), cloudová prostředí (AWS), aplikační servery (Tomcat, IIS, HTTPD), databáze (T-SQL, MySQL, DynamoDB), sítě, operační systémy (Windows, Linux).</code-li>
<code-li>Vždy věnuji čas tomu, abych pochopil a přizpůsobil se filozofii produktů, se kterými pracuji. Nepochopení základních konceptů je často zdrojem nespolehlivých, nevýkonných a neflexibilních řešení.</code-li>
<code-li>Znám široké spektrum dostupných platforem, jazyků a nástrojů. Na některé věci je nejlepší Java, na jiné .NET, někdy je nejlepší Python a jindy stačí PowerShell. Cílem je nalézt nástroj, který je nejvhodnější na řešení daného problému, ne snažit se za každou cenu přizpůsobit problém známé technologii.</code-li>
<code-li>Věřím, že je důležité nevynalézat znovu kolo a do nejvyšší možné míry používat již existující projekty. Tím šetřím vaše peníze.</code-li>
<code-li>Pokud je to aspoň trochu možné, respektuji váš výběr technologií. Pokud máte vše na vlastních serverech na flatformě .NET. nebud vám cpát serverless řešení v Amazon cloudu. Pokud chcete napsat plugin do vašeho hepldesk software, nebudu vás převědčovat, že ho máte změnit, protože se v něm pluginy píší příliš složitě. Snažím se řešit existující problémy, ne vytvářet nové.</code-li>
<code-li>Chápu, že nejdůležitější jsou požadavky uživatele. Aplikaci, která je pro uživatele nepřehledná nebo nepohodlná, nebudou používat. To samé platí ve chvíli, kdy její vývoj trvá příliš dlouho. Dokonalý produkt doručený ve chvíli, kdy už není potřeba, je stejně špatný jako nepohodlná a chybami zamořená aplikace, která se navíc nedá udržovat. Požadavky uživatelů a maximální užitek pro ně je pro mě stejně důležitý jako kvalita návrhu a samotného kódu. Tyto věci musí být v rovnováze.</code-li>
<code-li>Uvědomuji si, že zdaleka nevím všechno, a rád se učím - ať už úplně nové technologie, nebo vhodné best practices.</code-li>
</ul>
</div>
<p>Jsem full stack developer, ale návrhy a implementace UI nejsou můj šálek kávy, zvlášť v situaci, kdy vaše UX je klíčové pro váš úspěch. 
    I když s nimi mám určité zkušenosti, specializovaný UI/UX designér a webkodér vám v této oblasti poskytnou lepší služby. Vytvářím aplikace, ne prezentace.
    Nemá tedy smysl u mě poptávat jednoduchou firemní prezentaci - dobrý specialista vám vyrobí web na základě šablony rychleji, levněji a lépe než já.</p>

    <h2 class="display-4" id="tools">Co umím</h2>
            <p>Konkrétním technologiím nepřikládám zas tak velkou důležitost, přizpůsobuji se konkrétnímu projektu. Samozřejmě ale neznám všechno 
                (i když se rád něco nového naučím). V tabulce najdete seznam technologií, se kterými mám zkušenosti. Pro úplnost také uvádím, které 
                volím, když si můžu vybrat.</p>
            <div class="table-responsive">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Kategorie</th>
                        <th scope="col">Mám rád</th>
                        <th scope="col">Znám</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="c in tools" :key="c.category">
                    <th scope="row">{{ c.category }}</th>
                    <td><tech-icon v-for="(t,i) in c.like" :key="i" :tech="t"/></td>
                    <td><tech-icon v-for="(t,i) in c.know" :key="i" :tech="t"/></td>
                </tr>
                </tbody>
                </table>
            </div>

        <h2 id="repos">Jak vypadá můj kód</h2>
            <p>Na ukázky kódu se můžete nejpohodlněji podívat do následujících veřejných Git repozitářů:</p>
            <ul>
                <code-li><a href="https://github.com/oookoook?tab=repositories">GitHub</a></code-li>
                <code-li><a href="https://gitlab.fi.muni.cz/xkucer16/semanticBMS">GitLab @ FI MU</a></code-li>
            </ul>

 <h2>Bzukot</h2>
        <p>V IT jsou poměrně oblíbená tzv. buzzwords. Jasně, jsou to jenom takové nálepky, pod kterými si každý představuje něco jiného a které samy o sobě žádnou zvláštní informaci nenesou. Ale přesto - rád bych
        zde zmínil pár trendů a technologií, které mi přijdou zajímavé, užitečné, použitelné, a se kterými již mám zkušenosti. Klikejte na termíny pro více informací.</p>
        <p>
        <!--
        <span class="m-1 p-3 badge badge-pill badge-dark" v-for="(b, bi) in buzzwords" :key="bi"
        data-toggle="tooltip" data-placement="top" :title="b.title" :data-content="b.text">{{ b.badge }}</span>
        -->
        <a href="#" v-for="(b, bi) in buzzwords" :key="bi" 
        tabindex="0" class="badge badge-pill badge-dark  m-1 p-3" role="button" data-toggle="popover" data-trigger="focus" data-placement="top" 
        :title="b.title" :data-content="b.text" v-on:click.prevent>{{ b.badge }}</a>
        </p>
<h2>Dr. Kompjůtr</h2>
<p>Kromě práce jsem úspěšně dokončil Ph.D. studium na <a href="https://fi.muni.cz/" target='_blank'>FI MU</a>. I když jsou požadavky na software vyvíjený v akademické sféře odlišné od těch, které se objevují v komerční, jsem přesvědčen, že tato zkušenost přináší výhody i při "klasickém" vývoji:</p>
<ul class="list-unstyled">
<code-li>Mám solidní teoretické základy, které jsem schopný použít v praxi - např při vývoji vícevláknových aplikací, efektivních datových struktur a datových modelů a dalších problémů, které představují úzká hrdla v aplikacích nebo rovnou způsobují jejich nespolehlivost.</code-li>
<code-li>Jsem schopný konstruktivně přijímat kritiku - pár nelichotivých peer review vás naučí nebrat si věci osobně.</code-li>
<code-li>Umím porovnat dostupné možnosti na základě objektivních kritérií, umět se rozhodnout a svoji volbu si i obhájit.</code-li>
</ul>
            <h2 class="display-4" id="contact">Jak mě kontaktovat</h2>
            <ul class="list-unstyled">
                <code-li><a href="https://www.linkedin.com/in/adam-kucera-sw-dev/">LinkedIn</a></code-li>
                <code-li>E-mail: <a :href="'mailto:'+mail">{{ mail }}</a></code-li>
                <code-li>Fakturační údaje: RNDr. Adam Kučera, Voříškova 667/45, 623 00 Brno - Kohoutovice. IČ 06422268, Neplátce DPH.</code-li>
            </ul>

            <h2 id="what" class="display-4">Co nabízím</h2>
            
<p>V současné době mám kapacitu na menší jednorázové projekty jako například:</p>
    <ul class="list-unstyled">
    <code-li>Mikroslužby a API;</code-li>
    <code-li>Jednoduché webové aplikace;</code-li> 
    <code-li>Jednoúčelové pluginy pro prohlížeče.</code-li> 
    </ul>
<p>Zároveň jsem otevřený kontraktům na udržování a rozvoj existujícího systému, které sice jsou dlouhodobé, 
ale vyžadují pouze menší množství času.</p>

            <h2>Co za to?</h2> 

<p>Dávám přednost účtování hodinovou sazbou. Moje aktuální sazba je <strong>800 Kč/hod</strong>. Nejsem plátcem DPH.</p>
<p>I pokud se domluvíme na úkolovém ocenění, budu cenu zakládat na svém časovém odhadu a této hodinové sazbě, ale chápu, 
že pro mnoho zákazníků je to preferovaná varianta.</p>

            <h2  class="display-4" id="refs">Reference</h2>
         
            <div class="cards">
                <div v-for="(d, di) in decks" :key="di" class="card-deck">
                    <Card v-bind:card="c" v-for="(c, index) in cards.slice(di*3, di*3+3)" :key="index"/>
                </div>
            </div>

            <h2>Přiznání autorství (CC Atributions)</h2>
            <p>Při vývoji využívám množství volně dostupných knihoven, nástrojů, multimédií a dalších autorských děl. Některá
                z nich požadují, aby byl autor zřetelně uveden, pokud používáme jeho dílo.</p> 
                <p>Na těchto stránkách se toto týká symbolu použitého v odrážkových seznamech, které vytvořil <a href="https://www.flaticon.com/authors/dave-gandy" 
                title="Dave Gandy">Dave Gandy</a> a publikoval jej na portále <a href="https://www.flaticon.com/" 
                title="Flaticon">www.flaticon.com</a> a licencoval jako <a href="http://creativecommons.org/licenses/by/3.0/" 
                title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>. 
                Tento symbol původně pochází z projektu <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>.
            </p>
            <p>Ikony programovacíh jazyků a dalších IT nástrojů jsou většinou stahovány z projektu 
                <a href="https://svgporn.com/" target="_blank">SVG Porn</a>.</p>

            <p>Nakonec, o obrázku z favicon a hlavičky si víc můžete přečíst 
                <router-link to="/vonnegut">tady</router-link>.</p>

  </div>
</template>

<script>
    import Card from './Card.vue';
    import CodeLi from './CodeLi.vue';
    import TechIcon from './TechIcon.vue';
    export default {
        name: 'AboutMe',
        components: {
            Card,
            CodeLi,
            TechIcon
        },
        data: function () {
            return {
                mail: 'adam@nastojte.cz',
                buzzwords: [
                    { 
                        badge: 'Microservices',
                        title: 'Mikroslužby',
                        text: 'Dekompozice složitých aplikací do jednoduchých nezávislých API.',
                    }, { 
                        badge: 'SOA',
                        title: 'Service oriented architecture',
                        text: 'Komponenty aplikace si navzájem poskytují služby skrze API a komunikují přes síť.',
                    }, { 
                        badge: 'JAMstack',
                        title: 'Javascript, APIs, Markup stack',
                        text: 'Frontent napsaný čistě v Javascriptu a hostovaný jako statická stránka (např. v AWS S3). S backendem komunikuje výhradně přes síť a API (REST, mikroslužby, SOA).',
                    }, { 
                        badge: 'Headless',
                        title: 'Headless systems',
                        text: 'Aplikační logika a funkce jsou poskytovány pouze přes API, ke kterému se připojují klienti (vytvoření pomocí JAMstack). Dokonalý loose coupling mezi frontendem a backendem.',
                    }, { 
                        badge: 'SPA',
                        title: 'Single Page Applications',
                        text: 'Moderní Javascriptové aplikace, kdy je obsah vytvářen v některém z moderních frameworků (React, Angular, Vue). Navigace v aplikaci probíhá pouze pomocí Javascriptu, nikoliv načítáním různých stránek ze serveru.',
                    }, { 
                        badge: 'REST',
                        title: 'Representational State Transfer',
                        text: 'Současný standard pro Webová API. Textový protokol využívající HTTP(S).',
                    }, { 
                        badge: 'noSQL',
                        title: 'noSQL',
                        text: 'Moderní databázové systémy, které vynikají výkonem a volnější strukturou ukládaných dat. Pro mnohé aplikace jsou vhodnější než tradiční relační DB.',
                    }, { 
                        badge: 'Responsiveness',
                        title: 'Responzivní design',
                        text: 'Design webu, který se přizpůsobuje připojenému klientu a vypadá dobře (a také dobře funguje) jak na 30" monitoru, tak na smartphone.',
                    }, { 
                        badge: 'Mobile-first',
                        title: 'Mobile-first',
                        text: 'Způsob návrhu webových aplikací, kdy je zdůrazňována a preferována správná funkce pro mobilní zařízení. Google ve výsledcích vyhledávání zvýhodňuje mobile-first stránky.',
                    }, { 
                        badge: 'Material design',
                        title: 'Google Material design',
                        text: 'Designový jazyk prosazovaný Googlem, který sjednocuje zobrazení a ovládání webových a mobilních aplikací. Byl navržen primárně pro systém Android a jeho použití na webu tedy umožňuje vývoj responzivních mobile-first aplikací.',
                    }, { 
                        badge: 'SaaS',
                        title: 'Software as a Service',
                        text: 'Software jako služba je model distribuce a licencování, kdy si uživatel nekupuje krabicovou licenci, ale platí předplatné a může využívat webové verze aplikací (např. Google Suite, Office 365). Jsem schopný takto poskytovat na zakázku vyrobené aplikace.',
                    }, { 
                        badge: 'PaaS',
                        title: 'Platform as a Service',
                        text: 'Platforma jako služba popisuje moderní cloudová řešení typu Amazon Web Services nebo Microsoft Azure. Vývojáři již nemusí řešit vlastní servery. A to jak fyzické, tak ani virtuální. Výkon je poskytovatelem dodáván podle potřeby, aplikace tedy skvěle škálují a jejich provoz nikoho nezruinuje. PaaS využívám pro běh vlastních aplikací.',
                    }, { 
                        badge: 'Serveless',
                        title: 'Serverless deployment',
                        text: 'Běh aplikace v cloudu bez dedikovaného serveru (např. v AWS Lambda, ECS, Dynamo DB, AppSync a další). V podstatě synomymum k PaaS, lépe řečeno PaaS umožňuje provoz serverless aplikací.',
                    }, { 
                        badge: 'Agile',
                        title: 'Agilní vývoj software',
                        text: 'Agilní metodiky jsou zaměřeny na rychlé dodání funkčního software zákazníkovi a úzkou spolupráci vývojáře s klientem, aby byl výsledek spolupráce co nejlepší. I když se neřídím žádnou ucelenou metodikou, inkrementální způsob vývoje s častými aktualizacemi a úpravami je mi blízký.',
                    }, { 
                        badge: 'CI/CD',
                        title: 'Continuous Itegration/Continuous Delivery',
                        text: 'V podstatě jde o to, že když vývojář udělá Git Commit a Push, software se automaticky sestaví, otestuje, a pokud projde testy, i nasadí do produkce. Přiznám se, že v tomto zatím sbírám zkušenosti, ale nepochybně je to cesta, která je nyní už dobře použitelná a neuvěřitelně praktická.',
                    },
                ],
                cards: [
                {
                    category: 'Volná noha',
                    title: 'Mapa poštovních schránek',
                    year: '2019',
                    img: require('../assets/refs/schranky.png'),
                    link: 'https://schranky.nastojte.cz',
                    repo: 'https://github.com/oookoook/postboxes-frontend',
                    description: 'Mapa poštovních schránek - služba zobrazující schránky na území ČR v mapě. Využívá datasetu zveřejňovaného Českou Poštou a API Mapy.cz.'
                    + ' Služba běží v AWS (frontend S3+CloudFront, backend Lambda + ECS), pro ukládání dat je využívána noSQL databáze DynamoDB.', 
                    technologies: [ 'Vuetify.js', {name: 'Vue.js', cname: 'vue' }, {name: 'Mapy.cz API', icon: 'http://api.mapy.cz/img/web/logo.gif'}, 'Webpack', 'Node.js', 'Express', 'AWS Lambda', 'Docker', 'AWS DynamoDB']
                }, {
                    category: 'Volná noha',
                    title: 'Maják',
                    year: '2018',
                    img: require('../assets/refs/majak.png'),
                    link: 'https://github.com/oookoook/majak',
                    description: 'Hra na letní tábor. Webový server běžící na Rasperry PI, ke kterému se přes WiFi připojují '
                    + ' hráči a plní úkoly. Raspberry zajišťuje funkce wiFi AP, DHCP, DNS a web serveru s Node.', 
                    technologies: [ {name: 'Vue.js', cname: 'vue' }, 'Webpack', 'Bootstrap', 'Node.js', 'Raspberry PI']
                }, {
                    category: 'Volná noha',
                    title: 'Nastojte.cz',
                    year: '2019',
                    img: require('../assets/refs/nastojte.png'),
                    repo: 'https://github.com/oookoook/nastojte-cz',
                    description: 'Tyto stránky. Serverless prezentace s využitím Amazon AWS, změny jsou publikovány pomocí CI/CD služeb AWS COdePipeline, CodeBuild a CodeDeploy.', 
                    technologies: [ {name: 'Vue.js', cname: 'vue' }, 'Webpack', 'Bootstrap', {name: 'AWS Route 53', cname: 'aws-route53' }, 'AWS CloudFront', 'AWS S3', 'AWS CodeDeploy']
                }, {
                    category: 'Microton',
                    title: 'Joolca troubleshooting (AUS)',
                    year: 2018,
                    img: require('../assets/refs/joolca.png'),
                    link: '',
                    description: 'Rozšíření pro systém zákaznické podpory Zendesk. Interaktivní rozhovací strom pro základní zákaznickou podporu '
                    + ' - odhalování typických potíží s prodávanými výrobky. Místo databáze byl na backendu použit ' 
                    + ' Google Spreadsheet rozšířený o REST API, aby bylo možné snadno upravovat rozhodovací stromy.',
                    technologies: ['Zendesk', 'jQuery', 'REST', { name: 'Google Aps Script', icon: 'https://developers.google.com/site-assets/developers_64dp.png'}, 'Google GSuite']
                }, {
                    category: 'Microton',
                    title: 'Dropair (USA)',
                    year: 'od 2017',
                    img: require('../assets/refs/dropair.png'),
                    description: 'Aplikace pro podporu dropshipping firmy. Údržba již existující aplikace, '
                    + ' vývoj nových crawlerů, scraperů a parserů.', 
                    technologies: [{name: 'AngularJS', icon: 'https://angularjs.org/img/AngularJS-large.png' }, 'Java', 'Spring', 'Node.js', 'SOLR', 'MySQL', 'Hibernate']
                }, {
                    category: 'Microton',
                    title: 'Giftcard Checker (USA)',
                    year: '2018',
                    img: require('../assets/refs/gcchecker.png'),
                    description: 'Nástroj pro automatické ověřování zůstatků na dárkových poukazech obchodního řetězce. Backend využívá nástro Puppeteer pro automatizaci prohlížeče,'
                    + ' frontend je vytvořený jako plugin do Google Spreadsheet.', 
                    technologies: [ 'Google GSuite', { name: 'Google Aps Script', icon: 'https://developers.google.com/site-assets/developers_64dp.png'}, 'Node.js', 'Express', { name: 'Google Chrome', cname: 'chrome'}, 'REST']
                }, {
                    category: 'Microton',
                    title: 'Bookování letenek (USA)',
                    year: '2018',
                    img: require('../assets/refs/planes.png'),
                    description: 'Plugin do Chrome, který sleduje nabídku letů na stránkách jednoho z dopravců. Prohlížeč běží ve VPS. Když se objeví nový let ze zadaných letišť,'
                    + ' započne rezervaci rezervaci a odešle mailovou zprávu uživateli, aby v případě zájmu mohl v rezervaci pokračovat.', 
                    technologies: ['Javascript', { name: 'Google Chrome', cname: 'chrome'} ]
                }, {
                    category: 'Volná noha',
                    title: 'Coffee to Home',
                    year: '2014',
                    img: require('../assets/refs/cth.png'),
                    description: 'Jednoduchá landing page pro (tehdy) začínající předplatné kávových balíčků. Cílem bylo s co nejnižším množstvím vynaloženého času na vývoj '
                        + 'umožnit zákazníkům objednat produkt, aby mohla firma začít co nejdříve fungovat. Výsledné řešení bylo hotové za méně jak 20 hodin '
                        + 'a umožnilo úspěšné fungování firmy v jejích začátcích.',
                    technologies: [ 'Javascript', 'Bootstrap', 'PHP' ]
                }, /*{{
                    category: 'MU',
                    title: 'CAFM',
                    year: 'od 2013',
                    img: require('../assets/refs/archibus.png'),
                    description: 'Nasazování a úpravy systému pro podporu facility managementu na Masarykově univerzitě.',
                    link: 'http://ofm.ukb.muni.cz/?page_id=196',
                    technologies: [{ name: 'Archibus', icon: 'https://archibus.com/wp-content/uploads/2018/02/retina_logo_black.png'}, { name: 'Apache Tomcat', cname:'tomcat' }, 'Javascript', 'Java', { name: 'Microsoft SQL Server', icon: 'https://vignette.wikia.nocookie.net/logopedia/images/8/80/SQLServer.png' }, 'Git']
                }, 
                    category: 'MU',
                    title: 'BMS MU',
                    img: require('../assets/code.png')
                    description: 'Inteligentní budovy - systémová správa a údržba existující aplikace.',
                    technologies: ['IIS', 'Windows Server', 'SVN', 'NLB', 'DFS']
                },*/ {
                    category: 'MU',
                    title: 'BMS Sentinel',
                    year: '2010',
                    img: require('../assets/refs/bmssentinel.png'),
                    link: 'https://is.muni.cz/th/i3416/',
                    description: 'Dohledový systém pro automatizační protokol BACnet.',
                    technologies: [ { name: '.NET Framework', cname: 'dotnet'}, {name: 'C#', icon: 'https://developer.fedoraproject.org/static/logo/csharp.png'}, { name: 'BACnet', icon: 'http://www.bacnet.org/Images/BACnet-Logo-New.gif' }]
                }, {
                    category: 'MU',
                    title: 'Semantic BMS',
                    year: '2017',
                    img: require('../assets/refs/sbms.png'),
                    link: 'https://is.muni.cz/th/umgby',
                    repo: 'https://gitlab.fi.muni.cz/xkucer16/semanticBMS',
                    description: 'Sémantický model pro data z inteligentních budov.',
                    technologies: ['Java', 'REST', { name: 'Apache Jena', icon: 'https://jena.apache.org/images/jena-logo/jena-logo-jumbotron.png' }, 'jQuery', { name: 'Apache Tomcat', cname:'tomcat' }, { name: 'Web Ontology Language', icon: 'https://www.w3.org/Icons/SW/Buttons/sw-owl-blue-v.svg' }]
                }, {
                    category: 'MU',
                    title: 'EsserNet-BACnet Gateway',
                    year: '2014',
                    img: require('../assets/refs/esser.png'),
                    link: 'http://safecontrol.cz/index.php/vyvoj-software',
                    description: 'Převodník mezi protokolem EsserNet požárního systému a obecným automatizačním protokolem BACnet. V projektu jsem měl na starost BACnet část brány.',
                    technologies: ['Java', { name: 'BACnet', icon: 'http://www.bacnet.org/Images/BACnet-Logo-New.gif' }]
                }, {
                    category: 'Volná noha',
                    title: 'Mapa cen stavebních pozemků',
                    year: '2019',
                    img: require('../assets/refs/reality.png'),
                    link: 'https://reality.nastojte.cz',
                    repo: 'https://gist.github.com/oookoook/afb6a819dca3ed14be7b58bc6cb0e8bd',
                    description: 'Mapa cen stavebních pozemků. Technologické demo, uznávám, není příliš funkční.', 
                    technologies: [ {name: 'Vue.js', cname: 'vue' }, {name: 'Mapy.cz API', icon: 'http://api.mapy.cz/img/web/logo.gif'}, 'Webpack', 'Bootstrap', 'Node.js', 'Express', 'AWS Lambda', {name: 'Apify', icon: 'https://www.apify.com/img/logos/logo-notext.svg' }]
                }, 
                ],
                tools: [
                    { category: 'Jazyky',
                        like: [ 'Javascript', 'Java' ], know: [{name: 'C#', icon: 'https://developer.fedoraproject.org/static/logo/csharp.png'}, 'C', 'Python'] },
                    { category: 'Frontend',
                        like: [ 'Vuetify.js', 'Bootstrap', {name: 'Vue.js', cname: 'vue' } ], know: [ {name: 'AngularJS', icon: 'https://angularjs.org/img/AngularJS-large.png' }, 'jQuery', 'Javascript', { name: '.NET Framework', cname: 'dotnet'} ] },
                    { category: 'Backend',
                        like: [ 'Node.js', 'Express', 'Spring' ], know: [ 'Java', { name: '.NET Framework', cname: 'dotnet'} ] },
                    { category: 'Skriptování',
                        like: [ 'Node.js', {name: 'PowerShell', icon: 'https://raw.githubusercontent.com/PowerShell/PowerShell/master/assets/Powershell_64.png' } ], know: [ 'Python', 'Bash' ] },
                    { category: 'Databáze',
                        like: [{ name: 'Microsoft SQL Server', icon: 'https://vignette.wikia.nocookie.net/logopedia/images/8/80/SQLServer.png' }, 'AWS DynamoDB' ], know: [ 'SOLR', 'MySQL' ] },
                    /*
                    { category: 'Komunikace a rozhraní',
                        like: [ 'REST' ], know: [ { name: 'WCF', text: true, color: '#f00' }, 'SOAP' ] },
                    */
                   { category: 'OS, servery, platformy',
                        like: [ {name: 'Windows', cname: 'microsoft-windows' }, 'AWS' ], know: [ {name: 'Linux', cname: 'linux-tux'}, 'OpenStack', 'Tomcat' ] },
                    { category: 'Vývojová prostředí',
                         like: [ 'Eclipse', { name: 'Visual Studio Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg' }, ], know: [ 'NetBeans', ] },
                    { category: 'Správa kódu a závislostí',
                         like: [ 'Webpack', { name: 'Maven', icon: 'https://maven.apache.org/images/maven-logo-black-on-white.png' }, 'Git' ], know: [ 'Subversion' ] }
                ]
            }
        },
        computed: {
            decks: function() { return new Array(Math.ceil(this.cards.length / 3)) },        
        },
        methods: {
        },
        created() {
        },
        mounted() {
            // must be here because of the router - this might get rendered after the app init when comming from other pages
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover();
            $('.popover-dismiss').popover({trigger: 'focus'});
        }
    }
</script>
<style scoped>

img.photo {
    width: 200px;
}

a.badge-pill {
     outline: none;
}
</style>