<template>
  <!--
  <div class="cards">
    <div v-for="(d, di) in decks" :key="di" class="card-deck">
      <Card
        v-bind:card="c"
        v-for="(c, index) in cards.slice(di * 3, di * 3 + 3)"
        :key="index"
      />
    </div>
    -->
  <b-container class="p-0 m-0">
    
    
    <b-row>
      <b-col sm="12" md="6" lg="4" class="d-flex align-items-stretch" v-for="(c, index) in cards" :key="index">
        <Card
        :card="c"
      />
      </b-col>
    </b-row>
    
    <!--
    <b-card-group deck>
    <Card
        v-bind:card="c"
        v-for="(c, index) in cards"
        :key="index"
      />
    </b-card-group>
    -->
  </b-container>
</template>
<script>
import TechIcon from "./TechIcon.vue";
import Card from './Card.vue';

export default {
  name: "References",
  components: { TechIcon, Card },
  data() {
    return {
      cards: [
        {
          category: "Volná noha",
          title: "DreamROI 2.0",
          year: "2021",
          img: require("../assets/refs/dreamroi.png"),
          link: "https://dreamroi.com",
          description:
            "Marketingový nástroj využívající umělou inteligenci pro doporučování těch správných produktů zákazníkům e-shopů. Obsahuje komponentu pro vložení do e-shopu a nástroj pro mailing. Vzhledem k tomu, že se jedná o startupovou SaaS, je nutné zajistit, aby systém snadno škáloval. Aplikace proto využívá kompletně serverless architekturu. Aplikace je postavena na GraphQL API a noSQL. Jsem softwarový architekt a hlavní vývojář systému.",
          technologies: [
            "Vuetify.js",
            { name: "Vue.js", cname: "vue" },
            "Node.js",
            "AWS",
            "AWS Lambda",
            "AWS Amplify",
            "GraphQL",
            "Python",
            "Javascript",
            "HTML 5",
            "CSS 3",
          ],
        },
        {
          category: "Volná noha",
          title: "World Spider Trait Database",
          year: "2020",
          img: require("../assets/refs/spidertraits.png"),
          link: "https://spidertraits.sci.muni.cz",
          repo: "https://github.com/oookoook/spider-trait-database",
          description:
            "Úložiště a vyhledávač vědeckých dat. Aplikace je napsaná čistě v JavaScriptu a jako databázi používá MariaDB/MySQL. Velkou částí práce je neveřejný editor vkládaných dat a kontrola jejich " +
            "správnosti (ověřování oproti katalogu známých druhů, datové typy, apod.). Relativně Rozsáhlý projekt, který jsem kompletně navrhoval, vyvíjel " +
            "(frontend, backend, databáze, sychronizace dat) i nasazoval (napojení na OpenID autentizaci, zálohování, zprovoznění v OpenStack, optimalizace)",
          technologies: [
            "Vuetify.js",
            { name: "Vue.js", cname: "vue" },
            "Node.js",
            "Express",
            "MariaDB",
            { name: "Linux", cname: "linux-tux" },
            "OpenStack",
          ],
        },
        {
          category: "Volná noha",
          title: "Axima Voltis Controller",
          year: "2020",
          img: require("../assets/refs/axima.jpg"),
          description: `Desktopová aplikace pro Windows sloužící k ovládání nabíječů firmy AXIMA. Pro komunikaci s nabíječi je používán protokol CAN. Aplikace je napsána
                    v .NET Core 3.1 a WPF. Ovládání je optimalizováno pro použití s dotykovou obrazovkou.`,
          technologies: [
            { name: ".NET Framework", cname: "dotnet" },
            { name: "Windows", cname: "microsoft-windows" },
          ],
        },
        {
          category: "Volná noha",
          title: "Mapa poštovních schránek",
          year: "2019",
          img: require("../assets/refs/schranky.png"),
          link: "https://schranky.nastojte.cz",
          repo: "https://github.com/oookoook/postboxes-frontend",
          description:
            "Mapa poštovních schránek - služba zobrazující schránky na území ČR v mapě. Využívá datasetu zveřejňovaného Českou Poštou a API Mapy.cz." +
            " Služba běží v AWS (frontend S3+CloudFront, backend Lambda + ECS), pro ukládání dat je využívána noSQL databáze DynamoDB.",
          technologies: [
            "Vuetify.js",
            { name: "Vue.js", cname: "vue" },
            { name: "Mapy.cz API", icon: "mapy.gif" },
            "Webpack",
            "Node.js",
            "Express",
            "AWS",
            "AWS Lambda",
            "Docker",
            "AWS DynamoDB",
          ],
        },
        {
          category: "Volná noha",
          title: "Lighthouse Lambda API",
          year: "2020",
          img: require("../assets/code.png"),
          description:
            "REST API které spouští nástroj pro testování výkonu webu Google Lighthouse a vrací výsledky jako JSON. API je nasazeno do WS pomocí nástroje CloudFormation.",
          technologies: [
            "Node.js",
            "Express",
            "AWS",
            "AWS Lambda",
            "AWS CloudFormation",
          ],
        },
        {
          category: "Volná noha",
          title: "Sun Orchard Freight App (USA)",
          year: "2019",
          img: require("../assets/refs/sunorchard.png"),
          description:
            "Databázová aplikace pro interní potřeby účetní firmy, které pro výrobce džusů řeší distribuci výrobků. Aplikace běží v AWS (frontend S3 + CloudFront, backend Lambda), " +
            " pro ukládání dat je využívána SQL databáze AWS Aurora, autentizace je řešena pomocí služby AWS Cognito.",
          technologies: [
            "Vuetify.js",
            { name: "Vue.js", cname: "vue" },
            "Webpack",
            "Node.js",
            "Express",
            "AWS",
            "AWS Lambda",
            "AWS RDS",
            "AWS Cognito",
            "AWS CloudFormation",
          ],
        },
        {
          category: "Volná noha",
          title: "Parametrizovaný SSRS report",
          year: "2019",
          img: require("../assets/refs/ssrs.png"),
          description:
            "Jednoduchá stránka v ASP.NET, která z internetu zpřístupňuje report definovaný Microsoft SQL Server Reporting Services a umožňuje volat ho s různými parametry.",
          technologies: [{ name: ".NET Framework", cname: "dotnet" }],
        },
        {
          category: "Volná noha",
          title: "Rozšíření stávajícího IS o statistiky",
          year: "2019",
          img: require("../assets/refs/jjstats.png"),
          description:
            "Rozšíření existujícího informačního systému o reporty se statistikami. IS používá Angular, Spring Boot, a MySQL.",
          technologies: ["Angular", "Java", "Spring", "MySQL"],
        },
        {
          category: "Volná noha",
          title: "Nastojte.cz",
          year: "2019",
          img: require("../assets/refs/nastojte.png"),
          repo: "https://github.com/oookoook/nastojte-cz",
          description:
            "Tyto stránky. Serverless prezentace s využitím Amazon AWS, změny jsou publikovány pomocí CI/CD služeb AWS CodePipeline a CodeBuild.",
          technologies: [
            { name: "Vue.js", cname: "vue" },
            "Webpack",
            "Bootstrap",
            "AWS",
            { name: "AWS Route 53", cname: "aws-route53" },
            "AWS CloudFront",
            "AWS S3",
          ],
        },
        {
          category: "Volná noha",
          title: "Formulář pro Excel VBA",
          year: "2020",
          img: require("../assets/refs/vba.png"),
          description:
            "Formulář ve VBA, který na základě několika hodnot dopočítá a vyplní tabulku pro tisk štítku.",
          technologies: ["Excel"],
        },
        {
          category: "Volná noha",
          title: "AWS CloudFormation templates",
          year: "2019",
          img: require("../assets/refs/awscf.png"),
          repo: "https://github.com/oookoook/cloud-formation-templates",
          description:
            "Sada volně dostupných šablon pro nástroj CloudFormation (Infrasturcture as a Service) v AWS, které vytvářím pro své projekty. Šablony slouží pro automatizované nasazení aplikace a v mém případě i pro nastavení CI/CD pipeline.",
          technologies: ["AWS", "AWS CloudFormation"],
        },
        {
          category: "Microton",
          title: "Joolca troubleshooting (AUS)",
          year: 2018,
          img: require("../assets/refs/joolca.png"),
          //link: '',
          description:
            "Rozšíření pro systém zákaznické podpory Zendesk. Interaktivní rozhovací strom pro základní zákaznickou podporu " +
            " - odhalování typických potíží s prodávanými výrobky. Místo databáze byl na backendu použit " +
            " Google Spreadsheet rozšířený o REST API, aby bylo možné snadno upravovat rozhodovací stromy.",
          technologies: [
            "Zendesk",
            "jQuery",
            "REST",
            "Google Apps Script",
            "Google GSuite",
          ],
        },
        {
          category: "Microton",
          title: "Dropair (USA)",
          year: "2017-2019",
          img: require("../assets/refs/dropair.png"),
          description:
            "Aplikace pro podporu dropshipping firmy. Údržba již existující aplikace, " +
            " vývoj nových crawlerů, scraperů a parserů.",
          technologies: [
            { name: "AngularJS", icon: "angularjs.png" },
            "Java",
            "Spring",
            "Node.js",
            "SOLR",
            "MySQL",
            "Hibernate",
            "AWS",
            "AWS EC2",
          ],
        },
        {
          category: "Microton",
          title: "Giftcard Checker (USA)",
          year: "2018",
          img: require("../assets/refs/gcchecker.png"),
          description:
            "Nástroj pro automatické ověřování zůstatků na dárkových poukazech obchodního řetězce. Backend využívá nástro Puppeteer pro automatizaci prohlížeče," +
            " frontend je vytvořený jako plugin do Google Spreadsheet.",
          technologies: [
            "Google GSuite",
            "Google Apps Script",
            "Node.js",
            "Express",
            { name: "Google Chrome", cname: "chrome" },
            "REST",
            "AWS",
            "AWS EC2",
          ],
        },
        {
          category: "Microton",
          title: "Bookování letenek (USA)",
          year: "2018",
          img: require("../assets/refs/planes.png"),
          description:
            "Plugin do Chrome, který sleduje nabídku letů na stránkách jednoho z dopravců. Prohlížeč běží ve VPS. Když se objeví nový let ze zadaných letišť," +
            " započne rezervaci rezervaci a odešle mailovou zprávu uživateli, aby v případě zájmu mohl v rezervaci pokračovat.",
          technologies: [
            "Javascript",
            { name: "Google Chrome", cname: "chrome" },
          ],
        },
        {
          category: "Volná noha",
          title: "Maják",
          year: "2018",
          img: require("../assets/refs/majak.png"),
          repo: "https://github.com/oookoook/majak",
          description:
            "Hra na letní tábor. Webový server běžící na Rasperry PI, ke kterému se přes WiFi připojují " +
            " hráči a plní úkoly. Raspberry zajišťuje funkce wiFi AP, DHCP, DNS a web serveru s Node.",
          technologies: [
            { name: "Vue.js", cname: "vue" },
            "Webpack",
            "Bootstrap",
            "Node.js",
            "Raspberry PI",
          ],
        },
        {
          category: "Volná noha",
          title: "Coffee to Home",
          year: "2014",
          img: require("../assets/refs/cth.png"),
          description:
            "Jednoduchá landing page pro (tehdy) začínající předplatné kávových balíčků. Cílem bylo s co nejnižším množstvím vynaloženého času na vývoj " +
            "umožnit zákazníkům objednat produkt, aby mohla firma začít co nejdříve fungovat. Výsledné řešení bylo hotové za méně jak 20 hodin " +
            "a umožnilo úspěšné fungování firmy v jejích začátcích.",
          technologies: ["Javascript", "Bootstrap", "PHP"],
        },
        {
          category: "MU",
          title: "CAFM",
          year: "od 2013",
          img: require("../assets/refs/archibus.png"),
          description:
            "Nasazování a úpravy systému pro podporu facility managementu na Masarykově univerzitě.",
          link: "https://webcentrum.muni.cz/ofm/cafm",
          technologies: [
            { name: "Archibus", icon: "archibus.png" },
            { name: "Apache Tomcat", cname: "tomcat" },
            "Javascript",
            "Java",
            { name: "Microsoft SQL Server", cname: "mssql" },
            "Git",
          ],
        },
        {
          category: "MU",
          title: "BMS Sentinel",
          year: "2010",
          img: require("../assets/refs/bmssentinel.png"),
          about: "https://is.muni.cz/th/i3416/",
          description: "Dohledový systém pro automatizační protokol BACnet.",
          technologies: [
            { name: ".NET Framework", cname: "dotnet" },
            { name: "C#", cname: "c-sharp" },
            { name: "BACnet", icon: "bacnet.png" },
          ],
        },
        {
          category: "MU",
          title: "Semantic BMS",
          year: "2017",
          img: require("../assets/refs/sbms.png"),
          about: "https://is.muni.cz/th/umgby",
          repo: "https://gitlab.fi.muni.cz/xkucer16/semanticBMS",
          description: "Sémantický model pro data z inteligentních budov.",
          technologies: [
            "Java",
            "REST",
            { name: "Apache Jena", icon: "jena.png" },
            "jQuery",
            { name: "Apache Tomcat", cname: "tomcat" },
            { name: "Web Ontology Language", cname: "owl" },
          ],
        },
        {
          category: "MU",
          title: "EsserNet-BACnet Gateway",
          year: "2014",
          img: require("../assets/refs/esser.png"),
          about: "https://safecontrol.cz/systemova-integrace",
          description:
            "Převodník mezi protokolem EsserNet požárního systému a obecným automatizačním protokolem BACnet. V projektu jsem měl na starost BACnet část brány.",
          technologies: ["Java", { name: "BACnet", icon: "bacnet.png" }],
        } /* {
                    category: 'Volná noha',
                    title: 'Mapa cen stavebních pozemků',
                    year: '2019',
                    img: require('../assets/refs/reality.png'),
                    link: 'https://reality.nastojte.cz',
                    repo: 'https://gist.github.com/oookoook/afb6a819dca3ed14be7b58bc6cb0e8bd',
                    description: 'Mapa cen stavebních pozemků. Technologické demo, uznávám, není příliš funkční.', 
                    technologies: [ {name: 'Vue.js', cname: 'vue' }, {name: 'Mapy.cz API', icon: 'mapy.gif'}, 'Webpack', 'Bootstrap', 'Node.js', 'Express', 'AWS Lambda' ]
                }, */,
      ],
    };
  },
  computed: {
    decks: function () {
      return new Array(Math.ceil(this.cards.length / 3));
    },
  },
};
</script>