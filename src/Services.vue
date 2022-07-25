<template>
<div>
    <b-row>
<b-col cols="12" md="6" lg="4" xl="2" v-for="(s,i) in services" :key="`service${i}`" class="px-4">
    <b-img fluid :src="s.img" />
    <p class="mt-3 lead text-center" v-html="s.content"></p>
</b-col>
</b-row>
<!--
<b-row  class="justify-content-center align-items-center">
    <b-col cols="2"><b-img fluid :src="require('../assets/services/007-api-1.png')" /></b-col><b-col cols="2"><p class="lead">Mikroslužby a API</p></b-col>
    
</b-row>
<b-row  class="justify-content-center justify-items-center align-items-center">
    <b-col order="2" cols="2"><b-img fluid :src="require('../assets/services/002-webpage.png')" /></b-col><b-col cols="2"><p class=" text-right lead">Webové aplikace</p></b-col>
</b-row>
-->


<!--
<p>V současné době mám kapacitu na menší jednorázové projekty jako například:</p>
    <ul class="list-unstyled">
    <code-li>Mikroslužby a API;</code-li>
    <code-li>Webové aplikace;</code-li> 
    <code-li>Rozšíření pro prohlížeče (Chrome, Firefox);</code-li>
    <code-li>Rozšíření existujících softwarových systémů &ndash; ať už na míru nebo komerčních řešení s podporou rozšíření (nová funkcionalita, datový model, UI, API);</code-li>
    <code-li>Konzultace v oblasti návrhu software a nasazení (např. v cloudových PaaS, zejména AWS).</code-li>  
    <code-li>Kontrakty na udržování a rozvoj existujícího systému, které sice jsou dlouhodobé, 
ale vyžadují pouze menší množství času.</code-li> 
    </ul>

    <p>Jsem full stack developer, ale návrhy a implementace UI nejsou můj šálek kávy, zvlášť v situaci, kdy UX je klíčové pro váš úspěch. 
    I když s nimi mám určité zkušenosti, specializovaný UI/UX designér a webkodér vám v této oblasti poskytnou lepší služby. Vytvářím aplikace, ne prezentace.
    Nemá tedy smysl u mě poptávat jednoduchou firemní prezentaci - dobrý specialista vám vyrobí web na základě šablony rychleji, levněji a lépe než já.</p>
-->
<hr/>
    <b-row>
<b-col 
    :offset-xl="i%3 == 0 ? 0 : 3"
    :offset-lg="i%2 == 0 ? 0 : 4" 
    cols="12" md="6" lg="4" xl="2" v-for="(s,i) in services" :key="`service-col-${i}`" :id="`service-col-${i}`">
    <b-img fluid :src="s.img" />
    <p class="mt-3 lead text-center" v-html="s.content"></p>
</b-col>
</b-row>

<b-popover v-for="(s,i) in services" :key="`service-pop-${i}`" :target="`service-col-${i}`" triggers="hover" placement="top" variant="warning">
            <template #title>{{ s.content }}</template>
                {{s.detail}}
        </b-popover>


<hr/>
<b-row  class="justify-content-center justify-items-center align-items-center"  v-for="(s,i) in services" :key="`service${i}`">
    <b-col cols="2" :order="i % 2 > 0 ? 2 : null"><b-img fluid :src="s.img" /></b-col><b-col cols="2"><p :class="{lead: true, 'text-right': i % 2 > 0}" v-html="s.content"></p></b-col>
</b-row>

<hr/>

<b-row  class="align-items-center"  v-for="(s,i) in services" :key="`service${i}`">
    <b-col class="pa-3" cols="2" :order="i % 2 > 0 ? 2 : null" :offset="i % 2 == 0 ? 4 : null"><b-img fluid :src="s.img" /></b-col><b-col cols="6" class="pa-3" ><p :class="{lead: true, 'text-right': i % 2 > 0}" v-html="s.content"></p></b-col>
</b-row>


<hr/>

<b-row  class="align-items-center"  v-for="(s,i) in services" :key="`service${i}`">
    <b-col class="pa-3" cols="2" :order="i % 2 > 0 ? 2 : null" :offset="i % 2 == 0 ? 4 : null"><b-img fluid :src="s.img" /></b-col>
    <b-col cols="6" class="pa-3" >
        <p :class="{lead: true, 'text-right': i % 2 > 0}" v-html="s.content"></p>
        <p :class="{lead: false, 'text-right': i % 2 > 0}" v-html="s.detail"></p>
    </b-col>
</b-row>


<hr/>

<b-row  class="align-items-center"  v-for="(s,i) in services" :key="`service${i}`">
    <b-col class="px-5" cols="2" :order="i % 2 > 0 ? 2 : null" :offset="i % 2 == 0 ? 4 : null"><b-img fluid :src="s.img" /></b-col>
    <b-col cols="6" class="px-5" >
        <h3 :class="{'text-right': i % 2 > 0}" v-html="s.content"></h3>
        <p :class="{lead: false, 'text-right': i % 2 > 0}" v-html="s.detail"></p>
    </b-col>
</b-row>

<hr/>

<b-row  class="align-items-center my-5"  v-for="(s,i) in services" :key="`service${i}`">
    <b-col cols="2" :order="i % 2 > 0 ? 2 : null" :offset="i % 2 == 0 ? 4 : null"><b-img fluid :src="s.img" /></b-col>
    <b-col cols="6">
        <h3 :class="{'text-right': i % 2 > 0}" v-html="s.content"></h3>
        <p :class="{lead: false, 'text-right': i % 2 > 0}" v-html="s.detail"></p>
    </b-col>
</b-row>

<hr/>

<b-row  class="align-items-center my-5"  v-for="(s,i) in services" :key="`service${i}`">
    <b-col class="pa-3" cols="2" :order="i % 2 > 0 ? 2 : null" :offset="i % 2 == 0 ? 5 : null"><b-img fluid :src="s.img" /></b-col>
    <b-col cols="5" class="px-5" >
        <p :class="{lead: true, 'text-right': i % 2 > 0}" v-html="s.content"></p>
        <p :class="{lead: false, 'text-right': i % 2 > 0}" v-html="s.detail"></p>
        </b-col>
</b-row>

<hr/>

<b-row  class="align-items-center my-5"  v-for="(s,i) in services" :key="`service${i}`">
    <b-col cols="2" :order="i % 2 > 0 ? 2 : null" :offset="i % 2 == 0 ? 5 : null"><b-img fluid :src="s.img" /></b-col>
    <b-col cols="5" class="px-5" >
        <h3 :class="{'text-right': i % 2 > 0}" v-html="s.content"></h3>
        <p :class="{lead: false, 'text-right': i % 2 > 0}" v-html="s.detail"></p>
        </b-col>
</b-row>

<hr/>

<b-row  class="align-items-center my-5"  v-for="(s,i) in services" :key="`service${i}`">
    <b-col class="px-5" cols="2" :order="i % 2 > 0 ? 2 : null" :offset="i % 2 == 0 ? 5 : null"><b-img fluid :src="s.img" /></b-col>
    <b-col cols="5" class="px-5" >
        <h3 :class="{'text-right': i % 2 > 0}" v-html="s.content"></h3>
        <p :class="{lead: false, 'text-right': i % 2 > 0}" v-html="s.detail"></p>
        </b-col>
</b-row>

</div>
</template>
<script>
export default {
    name: 'Services',
    data() {
        return {
            services: [
                
                { img: require('../assets/services/002-webpage.png'), content: 'Webové aplikace', detail: 'Vyvíjím komplexní webové služby, které v jádru obvykle skýtají nějakou složitější logiku.' },
                { img: require('../assets/services/004-cloud-service.png'), content: 'Cloudové aplikace', detail: 'Konzultace a vývoj zejména v Amazon Web Services. Jsem schopný navrhnout celkovou architekturu aplikace a doporučit vhodné služby v rámci AWS, nebo i celou aplikaci vyvinout.' },
                { img: require('../assets/services/001-settings.png'), content: 'Rozšíření pro prohlížeče', detail: 'Mám zkušenosti s rozšířeními do prohlížeče, které můžou například automatizovat rutinní úkoly prováděné ve webových aplikacích.' },
                { img: require('../assets/services/008-extension.png'), content: 'Rozšíření softwarových systémů', detail: 'Ať už na míru nebo komerčních řešení s podporou rozšíření (nová funkcionalita, datový model, UI, API)' },
                { img: require('../assets/services/007-api-1.png'), content: 'Mikroslužby a API', detail: 'Umím vyvinout jednoduché jednoúčelové aplikace, které automatizují Vaše činnosti nebo například zajišťují integraci různých systémů.' },
                { img: require('../assets/services/005-maintenance.png'), content: 'Údržba stávajících systémů', detail: 'Jsem otevřený kontrkatům na udržování a rozvoj existujícího systému, které sice jsou dlouhodobé, ale vyžadují pouze menší množství času.' },
            ]
        }
    }
}
</script>