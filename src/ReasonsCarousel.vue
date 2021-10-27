<template>
    <b-container class="m-0 p-0">
    <b-carousel
        dark
      id="carousel"
      v-model="slide"
      controls
      indicators
      :interval="7000"
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide v-for="(r,i) in reasons" :key="`r${i}`" >
      <template #img>
          <b-img :src="getImage(r.srcset, r.image)" :srcset="getSrcSet(r.srcset, r.image)" width="1024" height="480" class="img-fluid w-100 d-block" alt="illustration image" />
      </template>
      <div :style="{ backdropFilter: 'blur(4px)', borderRadius: '35px', color: r.dark ? '#50023B' : '#FFD447', textShadow: `2px 2px 2px ${r.dark ? '#FFD447': '#50023b'}` }">
      <h3>{{ r.title}}</h3>
      <p class="d-none d-md-block"><span>{{r.text}}</span></p>
      <!-- <div :style="{ position: absolute, bottom: 40, right: 40 }">Fotka od <a :href="r.author.link">{{r.author.name}}</a></div> -->
        </div>
    </b-carousel-slide>
    </b-carousel>
    <ul class="list-unstyled d-block d-md-none">
        <code-li v-for="(r,i) in reasons" :key="`r${i}`"><b>{{ r.title }}</b> &ndash; {{r.text}}</code-li>
    </ul>
    </b-container>
</template>
<script>
import CodeLi from './CodeLi.vue'
import experience from '../assets/reasons/experience1.jpg?srcset'
import users from '../assets/reasons/users1.jpg?srcset'
import steering from '../assets/reasons/steering1.jpg?srcset'
import wheel from '../assets/reasons/wheel1.jpg?srcset'
import learning from '../assets/reasons/learning1.jpg?srcset'
import reject from '../assets/reasons/reject1.jpg?srcset'
import hammer from '../assets/reasons/hammer1.jpg?srcset'
import problems from '../assets/reasons/problems1.jpg?srcset'
import practices from '../assets/reasons/practices1.jpg?srcset'
import goodbye from '../assets/reasons/goodbye1.jpg?srcset'

export default {
    name: 'ReasonsCarousel',
    components: {CodeLi},
    props: { authors: Array},
    data() {
        return {
            showDetail: false,
            slide: 0,
                sliding: null,
                reasons: [
                    { 
                        srcset: experience, author: {name: 'Mark Potterton', link: 'https://unsplash.com/@markpot123' }, 
                        title: 'Mám přehled a zkušenosti', dark: true, text: 'Znám všechny aspekty vývoje: od analýzy přes návrh včetně datového modelu přes implementaci až po dlouhodobý provoz systémů.'},
                    {
                        srcset: users, author: {name: 'Kaleidico', link: 'https://unsplash.com/@kaleidico' },
                        title: 'Naslouchám uživatelům', text: 'Aplikaci, která je pro uživatele nepřehledná nebo nepohodlná, nebudou používat. Požadavky uživatelů a maximální užitek pro ně je pro mě stejně důležitý jako kvalita návrhu a samotného kódu.'},
                    {
                        srcset: steering, author: {name: 'OC Gonzalez', link: 'https://unsplash.com/@ocvisual' },
                        title: 'Dodávám kompletní řešení', dark: false, text: 'Chápu, že dodávka automaticky musí obsahovat i věci, které nejsou explicitně zmíněny v zadání. Můj bývalý šéf říkal, že když si jde koupit auto, také nemusí říkat, že má mít volant.'},
                    { 
                        srcset: wheel, author: {name: 'Colter Olmstead', link: 'https://unsplash.com/@colterolmstead' },
                        title: 'Nevynalézám kolo', text: 'Věřím, že je důležité do nejvyšší možné míry používat již existující projekty. Tím šetřím vaše peníze.'},
                    {
                        srcset: learning, author: {name: 'Brett Jordan', link: 'https://unsplash.com/@brett_jordan' },
                        title: 'Neustále se učím', text: 'Uvědomuji si, že zdaleka nevím všechno, a neustále se učím a posouvám dál - ať už úplně nové technologie, nebo vhodné best practices.'},                   
                    {
                        srcset: reject, author: {name: 'Jon Tyson', link: 'https://unsplash.com/@jontyson' },
                        title: 'Umím říct ne', text: 'Umím odmítnout projekt. Spolupráce musí být výhodná pro obě strany a ne vždy je pro klienta zakázkový vývoj to nejlepší řešení. Když není nutný, směruji klienty k vhodnému krabicovému řešení, které bývá levnější. Také se nepouštím do projektů, na které nemám odbornost.'},
                    { 
                        srcset: hammer, author: {name: 'Jozsef Hocza', link: 'https://unsplash.com/@hocza' },
                        title: 'Nemám jen jedno kladívko', dark: true, text: 'Znám široké spektrum dostupných platforem, jazyků a nástrojů. Cílem je nalézt nástroj, který je nejvhodnější na řešení daného problému, ne snažit se za každou cenu přizpůsobit problém známé technologii.'},
                    {
                        srcset: problems, author: {name: 'Sebastian Herrmann', link: 'https://unsplash.com/@officestock' },
                        title: 'Nevytvářím nové problémy', text: 'Snažím se řešit existující problémy, ne vytvářet nové. Jsem přizpůsobivý. Pokud je to aspoň trochu možné, respektuji váš výběr technologií. Pokud chcete napsat plugin do vašeho hepldesk software, nebudu vás převědčovat, že ho máte změnit, protože se v něm pluginy píší příliš složitě.'},
                    { 
                        srcset: practices, author: {name: 'Ryan Wallace', link: 'https://unsplash.com/@accrualbowtie' },
                        title: 'Znám best practices', text: 'Vždy věnuji čas tomu, abych pochopil a přizpůsobil se filozofii produktů, se kterými pracuji. Nepochopení základních konceptů je často zdrojem nespolehlivých, nevýkonných a neflexibilních řešení.'},
                    { 
                        srcset: goodbye, author: {name: 'Mantas Hesthaven', link: 'https://unsplash.com/@mantashesthaven' },
                        title: 'Nezpůsobuji závislost', text: 'Pracuji tak, abyste mě později nepotřebovali. Vždy předám zdrojové kódy a přístupové údaje. Kód komentuji a píši srozumitelně. Práci tedy může převzít kdokoliv jiný.'},
                    //{ text: 'Znám nejenom programovací jazyky, ale i infrastrukturu, ve které kód běží: běhová prostředí (JRE, CLR), cloudová prostředí (AWS), aplikační servery (Tomcat, IIS, HTTPD), databáze (T-SQL, MySQL, DynamoDB), sítě, operační systémy (Windows, Linux).'},

                ],
        }
    },
    methods: {
            toggleOverlay(isHovered) {
                this.showDetail = isHovered;
            },
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            },
            getSrcSet(srcset, image) {
                if(!srcset) {
                    return [`${image.replace(/jpe?g|png/, 'webp')} 1024w`, `${image} 1024w`];
                }
                return `${srcset.replace(/jpe?g|png/g, 'webp')} ${srcset}`;
            },
            getImage(srcset, image) {
                if(!srcset) {
                    return image;
                }
                return srcset.substring(srcset.lastIndexOf(' ') + 1);
            }
    },
    created() {
        this.$emit('update:authors', this.reasons.map(r => r.author));
    }
}
</script>