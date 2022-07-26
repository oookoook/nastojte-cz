<template>

<div>
<b-row  class="align-items-center my-5"  v-for="(s,i) in services" :key="`service${i}`">
    <b-col class="px-5 px-md-0 px-lg-4 px-xl-5" cols="6" md="2" :order-md="i % 2 > 0 ? 2 : null" offset="3" :offset-md="i % 2 == 0 ? 5 : 0">
        <b-img-lazy fluid :src="getImage(s.srcset, s.image)" :srcset="getSrcSet(s.srcset, s.image)" 
        sizes="(max-width: 768px) 256px, 128px"
        :alt="s.content"
        /></b-col>
    <b-col cols="12" md="5" class="px-5" >
        <h3 :class="{'text-md-right': i % 2 > 0, 'text-md-left': i % 2 == 0, 'text-center': true}" v-html="s.content"></h3>
        <p :class="{lead: false, 'text-md-right': i % 2 > 0}" v-html="s.detail"></p>
        </b-col>
</b-row>
</div>
</template>
<script>

import Srcset from './Srcset.vue'

export default {
    name: 'Services',
    mixins: [Srcset],
    data() {
        return {
            services: [
                // cant generate the srcsets as webpack likes static imports much more
                { image: require('../assets/services/002-webpage.png'), srcset: require('../assets/services/002-webpage.png?srcset&format=webp'), 
                    content: 'Webové aplikace', detail: 'Vyvíjím komplexní webové služby, které v jádru obvykle skýtají nějakou složitější logiku.' },
                { image: require('../assets/services/004-cloud-service.png'), srcset: require('../assets/services/004-cloud-service.png?srcset&format=webp'), 
                    content: 'Cloudové aplikace', detail: 'Konzultace a vývoj zejména v Amazon Web Services. Jsem schopný navrhnout celkovou architekturu aplikace a doporučit vhodné služby v rámci AWS, nebo i celou aplikaci vyvinout.' },
                { image: require('../assets/services/001-settings.png'), srcset: require('../assets/services/001-settings.png?srcset&format=webp'),
                    content: 'Rozšíření pro prohlížeče', detail: 'Mám zkušenosti s rozšířeními do prohlížeče, které můžou například automatizovat rutinní úkoly prováděné ve webových aplikacích.' },
                { image: require('../assets/services/008-extension.png'), srcset: require('../assets/services/008-extension.png?srcset&format=webp'),
                    content: 'Rozšíření softwarových systémů', detail: 'Ať už na míru nebo komerčních řešení s podporou rozšíření (nová funkcionalita, datový model, UI, API)' },
                { image: require('../assets/services/007-api-1.png'), srcset: require('../assets/services/007-api-1.png?srcset&format=webp'),
                    content: 'Mikroslužby a API', detail: 'Umím vyvinout jednoduché jednoúčelové aplikace, které automatizují Vaše činnosti nebo například zajišťují integraci různých systémů.' },
                { image: require('../assets/services/005-maintenance.png'), srcset: require('../assets/services/005-maintenance.png?srcset&format=webp'),
                    content: 'Údržba stávajících systémů', detail: 'Jsem otevřený kontrkatům na udržování a rozvoj existujícího systému, které sice jsou dlouhodobé, ale vyžadují pouze menší množství času.' },
            ]
        }
    }
}
</script>