<template>
    <p>
        <!--
        <span class="m-1 p-3 badge badge-pill badge-dark" v-for="(b, bi) in buzzwords" :key="bi"
        data-toggle="tooltip" data-placement="top" :title="b.title" :data-content="b.text">{{ b.badge }}</span>
        -->
        <!--
        <a href="#" v-for="(b, bi) in buzzwords" :key="bi" 
        tabindex="0" class="badge badge-pill badge-dark  bg-nastojte m-1 p-3" role="button" data-toggle="popover" data-trigger="focus" data-placement="top" 
        :title="b.title" :data-content="b.text" v-on:click.prevent>{{ b.badge }}</a>
        -->
        <template v-for="(b, bi) in buzzwords">
        <b-badge pill dark href="#" class="bg-nastojte m-1 p-3" :key="`buzz-${bi}-badge`" :id="`buzz-${bi}-badge`">{{ b.badge }}</b-badge> 
        <b-popover :target="`buzz-${bi}-badge`" :key="`buzz-${bi}-popover`" triggers="hover" placement="top">
            <template #title>{{ b.title }}</template>
                {{b.text}}
        </b-popover>
        </template>
        </p>
</template>
<script>
export default {
    name: 'Buzzwords',
    data() {
        return {
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
                        title: 'Continuous Integration/Continuous Delivery',
                        text: 'V podstatě jde o to, že když vývojář udělá Git Commit a Push, software se automaticky sestaví, otestuje, a pokud projde testy, i nasadí do produkce. Přiznám se, že v tomto zatím sbírám zkušenosti, ale nepochybně je to cesta, která je nyní už dobře použitelná a neuvěřitelně praktická.',
                    },
                ],
        }
    }
}
</script>
<style scoped>
a.badge-pill {
     outline: none;
}
</style>