<template>

<div>
<b-row  class="align-items-center my-5"  v-for="(s,i) in services" :key="`service${i}`">
    <b-col class="px-5 px-md-0 px-lg-4 px-xl-5" cols="6" md="2" :order-md="i % 2 > 0 ? 2 : null" offset="3" :offset-md="i % 2 == 0 ? 5 : 0">
        <b-img-lazy fluid :src="getImage(s.srcset, s.image)" :srcset="getSrcSet(s.srcset, s.image)" 
        sizes="(max-width: 768px) 256px, 128px"
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
import webpage from '../assets/services/002-webpage.png?srcset'
import cloud from '../assets/services/004-cloud-service.png?srcset'
import browser from '../assets/services/001-settings.png?srcset'
import extension from '../assets/services/008-extension.png?srcset'
import api from '../assets/services/007-api-1.png?srcset'
import maintenance from '../assets/services/005-maintenance.png?srcset'

export default {
    name: 'Services',
    mixins: [Srcset],
    data() {
        return {
            services: [
                
                { srcset: webpage, content: 'Webové aplikace', detail: 'Vyvíjím komplexní webové služby, které v jádru obvykle skýtají nějakou složitější logiku.' },
                { srcset: cloud, content: 'Cloudové aplikace', detail: 'Konzultace a vývoj zejména v Amazon Web Services. Jsem schopný navrhnout celkovou architekturu aplikace a doporučit vhodné služby v rámci AWS, nebo i celou aplikaci vyvinout.' },
                { srcset: browser, content: 'Rozšíření pro prohlížeče', detail: 'Mám zkušenosti s rozšířeními do prohlížeče, které můžou například automatizovat rutinní úkoly prováděné ve webových aplikacích.' },
                { srcset: extension, content: 'Rozšíření softwarových systémů', detail: 'Ať už na míru nebo komerčních řešení s podporou rozšíření (nová funkcionalita, datový model, UI, API)' },
                { srcset: api, content: 'Mikroslužby a API', detail: 'Umím vyvinout jednoduché jednoúčelové aplikace, které automatizují Vaše činnosti nebo například zajišťují integraci různých systémů.' },
                { srcset: maintenance, content: 'Údržba stávajících systémů', detail: 'Jsem otevřený kontrkatům na udržování a rozvoj existujícího systému, které sice jsou dlouhodobé, ale vyžadují pouze menší množství času.' },
            ]
        }
    }
}
</script>