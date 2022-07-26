<template>
  <b-container class="text-justify" id="content">
    <h1>Kdo jsem</h1>
 
<!-- https://codepen.io/machal/pen/mqmNyz -->
<b-row class="justify-content-center">
    
    <b-col class="order-2 order-md-1" cols="12" md="8" xl="9">
    <p class="lead">
        Začal jsem programovat ve třetí třídě v QBASICu podle návodů v časopise ABC a pořád mě to baví.
    </p>
    <p>Jsem softwarový vývojář z Brna. V IT a SW vývoji pracuji od roku 2008.</p>

                <p>Působím jako vývojář na volné noze. Specializuji se na moderní <b>Javascriptové</b> aplikace v <router-link to="/tech#cloud"><b>cloudu</b></router-link> (Amazon).</p>
                <p>Mám zkušenosti se startupovými projekty (<a href="https://dreamroi.com" rel="noopener" target="_blank">DreamROI</a>), s prací 
                na informačních systémech ve velké organizaci (<a href="https://ofm.ukb.muni.cz/" rel="noopener" target="_blank">Masarykova univerzita – Facility management a inteligentní budovy</a>)
                i se zahraničními klienty (USA, Austrálie). Provedu Vás <router-link to="articles/customer-dilemmata">všemi úskalími</router-link>
                 softwarového vývoje a dodám výsledek přesně podle Vašich požadavků. Včetně těch, o kterých ještě ani nevíte, že byste je vůbec měli mít.</p>
                 <b-row class="justify-content-center">
                 <b-col xl="4" md="6">
                 <b-button block class="bg-nastojte text-nastojte" :href="'mailto:'+email"  @click="decode" rel="noopener" target="_blank">Napište mi</b-button>
                 </b-col>
                 </b-row>
                <!--
                <p>Zároveň působím na částečný úvazek na <a href="https://ofm.ukb.muni.cz/" rel="noopener" target="_blank">Masarykově univerzitě</a>
                jako vývojář a systémový administrátor zaměřený na oblast Facility managementu a inteligentní budovy. Zároveň
                Díky spolupráci s firmou <a href="http://www.microton.cz/" rel="noopener" target="_blank">Microton</a> jsem
                se dostal i k práci na projektech pro zahraniční klienty (USA, Austrálie) prostřednictvím platformy 
                <a href="https://www.upwork.com/" rel="noopener" target="_blank">Upwork</a> (<a href="https://www.upwork.com/fl/adamkucera3"  rel="noopener" target="_blank">můj profil</a> 
                je viditlený pouze pro příhlášené uživatele).</p>
                -->
  </b-col>
  <b-col cols="12" md="4" xl="3" class="order-1 order-md-2 text-center text-md-right">
      <b-img :src="photo" :srcset="photoSrcSet" width="200" height="243" sizes="200px" class="mb-3 mb-md-0" alt="My face" />
  <!--
  <p class="mb-3 ml-md-3 mt-3 mt-md-0 w-50">
        
    </p>
    -->
  </b-col>
</b-row>
<!--
<div class="jumbotron bg-light border border-warning">
<p class="lead">Proč si vybrat právě mě?</p>
<hr>
 <ul class="list-unstyled">
<code-li>Znám všechny aspekty vývoje: od analýzy přes návrh včetně datového modelu přes implementaci až po dlouhodobý provoz systémů.</code-li>
<code-li>Chápu, že nejdůležitější jsou požadavky uživatele. Aplikaci, která je pro uživatele nepřehledná nebo nepohodlná, nebudou používat. To samé platí ve chvíli, kdy její vývoj trvá příliš dlouho. Dokonalý produkt doručený ve chvíli, kdy už není potřeba, je stejně špatný jako nepohodlná a chybami zamořená aplikace, která se navíc nedá udržovat. Požadavky uživatelů a maximální užitek pro ně je pro mě stejně důležitý jako kvalita návrhu a samotného kódu. Tyto věci musí být v rovnováze.</code-li>
<code-li>Věřím, že je důležité nevynalézat znovu kolo a do nejvyšší možné míry používat již existující projekty. Tím šetřím vaše peníze.</code-li>
<code-li>Uvědomuji si, že zdaleka nevím všechno, a neustále se učím a posouvám dál - ať už úplně nové technologie, nebo vhodné best practices.</code-li>
<code-li>Umím odmítnout projekt. Spolupráce musí končit výledkem <i>win-win</i> a ne vždy je pro klienta zakázkový vývoj to nejlepší řešení. Mnoho klientů, poptávajících zakázkový vývoj, jsem odmítl a nasměroval je k existujícímu hotovému <i>krabicovému</i> řešení, které bývá výrazně levnější. Také se nepouštím bezhlavě do projektů, na které nemám odbornost.</code-li>
<code-li>Vždy věnuji čas tomu, abych pochopil a přizpůsobil se filozofii produktů, se kterými pracuji. Nepochopení základních konceptů je často zdrojem nespolehlivých, nevýkonných a neflexibilních řešení.</code-li>
<code-li>Pokud je to aspoň trochu možné, respektuji váš výběr technologií. Pokud máte vše na vlastních serverech na flatformě .NET. nebud vám nutit serverless řešení v Amazon cloudu. Pokud chcete napsat plugin do vašeho hepldesk software, nebudu vás převědčovat, že ho máte změnit, protože se v něm pluginy píší příliš složitě. Snažím se řešit existující problémy, ne vytvářet nové.</code-li>
<code-li>Znám široké spektrum dostupných platforem, jazyků a nástrojů. Na některé věci je nejlepší Java, na jiné .NET, někdy je nejlepší Python a jindy stačí PowerShell. Cílem je nalézt nástroj, který je nejvhodnější na řešení daného problému, ne snažit se za každou cenu přizpůsobit problém známé technologii.</code-li>
<code-li>Znám nejenom programovací jazyky, ale i infrastrukturu, ve které kód běží: běhová prostředí (JRE, CLR), cloudová prostředí (AWS), aplikační servery (Tomcat, IIS, HTTPD), databáze (T-SQL, MySQL, DynamoDB), sítě, operační systémy (Windows, Linux).</code-li>

</ul>
</div>
-->
<h2 class="mt-5" id="why">Proč si vybrat právě mě</h2>
<reasons-carousel :authors.sync="authors"/>
<!--
<p class="text-center lead pt-5">Zaujalo vás to?
<b-button size="lg" :href="`mailto:${email}`" class="text-nastojte bg-nastojte ml-4">Napište mi</b-button></p>
-->
<h2 class="mt-5" id="what">Co nabízím</h2>

<p>V zásadě nabízím řešení problémů, které lze řešit pomocí softwarových systémů. Nechci zde vypisovat seznamy technologií, 
    které nabízím, protože jejich výběr obvykle není něco, co by musel dělat zákazník. <b>Navržení správného řešení Vašeho problému 
    je moje práce, ne Vaše.</b> Vaším úkolem naopak je ujasnit si, <router-link to="/articles/customer-dilemmata">co přesně chcete a potřebujete</router-link>.</p>

        <p>Jak své vlastní, tak některé projekty pro zákazníky vyvíjím pro <router-link to="/tech#cloud"><b>cloud</b></router-link>. Cloud je obzvlášt vhodný pro začínající služby, kde jsou problémem
    vyšší počáteční náklady a naopak zhroucení ve chvíli, kdy služba začne být úspěšná, kvůli nedostatečnému výkonu. Ve výsledku to funguje tak, že když na stránku nikdo nepřijde, neplatíte nic, a celkové cena se odvíjí od počtu uživatelů. A jejich počet může růst v podstatě neomezeně a aplikace bude stále stíhat.</p>
    <p>Co je pro Vás důležité &ndash; Nabízím vývoj aplikací pro cloud jako <b>kompletní balíček</b>. Aplikaci <b>naprogramuji</b> tak, aby v cloudu levně, spolehlivě a efektivně běžela, poskytnou
    <b>skripty pro nasazení</b>, díky kterým aplikaci snadno zprovozníte, a nastavím tak, aby se aplikace <b>automaticky aktualizovala</b> vždy, když se v kódu provede nějaká úprava.</p>

<p>Níže se podívejte i na další typy úkolů, na kterých pro Vás budu rád pracovat.</p>

<!--
    <h3 id="cloud">Typy zakázek</h3>
-->
    <services />

<h2  class="mt-5" id="contact">Jak mě kontaktovat</h2>
<ul class="list-unstyled">
    <code-li>E-mail: <a :href="'mailto:'+email" v-html="email"  @click="decode" target="_blank" rel="noopener"></a></code-li>
    <code-li><a href="https://www.linkedin.com/in/adam-kucera-sw-dev/" rel="noopener" target="_blank">Profil na LinkedIn</a></code-li>
    <code-li><a href="https://navolnenoze.cz/prezentace/adam-kucera/">Profil na Na volné noze</a></code-li>
    <code-li>Fakturační údaje: RNDr. Adam Kučera, Voříškova 667/45, 623 00 Brno - Kohoutovice. IČ 06422268, Neplátce DPH.</code-li>
</ul>

<h2  class="mt-5" id="pricing">Co za to</h2> 

<p>Moje aktuální hodinová sazba je <strong>1000 Kč/hod</strong>. Nejsem plátcem DPH. Pro dlouhodobé projekty jsem
ochotný poskytovat slevu z hodinové sazby.</p>
<p>Pokud se domluvíme na úkolovém ocenění, budu cenu zakládat na svém časovém odhadu a této hodinové sazbě, ale chápu, 
že pro mnoho zákazníků je to preferovaná varianta. Moje nabídkové ceny za kompletní projekty vždy počítají (kromě času na vývoj) i s dostatečným časem na analýzu a návrh
řešení, dostatečné testování, zapracování připomínek uživatele a finální nasazení. Pokud se neobjeví zásadní neočekávatelné problémy, cena je konečná. Nebudu z vás
tahat vícepráce za to, že chcete dát tlačítko na opačnou stranu, než kam jsem ho původně umístil.</p>

<p>Zde bych jen rád doplnil drobnou poznámku &ndash; chápu, že Vám tato sazba může přijít vysoká, nicméně mám pro následující argumenty:</p>
    <ul class="list-unstyled">
    <code-li>Za hodinu své práce po deseti letech praxe a neustálému sebezdokonalování za hodinu stihnu více, než je průměr.</code-li>
    <code-li>Neplatíte mi pronájem kancelář a energie, počítač, software, telefon, stravenky, ani dovolenou nebo nemocenskou. Neplatíte mi zdravotní ani sociální pojištění. 
        Toto jsou náklady, které musím pokrýt ze své hodinové sazby. Mnohem podrobněji je tato argumentace rozvinuta v 
        <a href="https://www.superlectures.com/barcampbrno2017/nenechte-se-sebou-vydrbavat-kolik-doopravdy-stoji-hodina-prace-freelancera" rel="noopener" target="_blank">přednášce</a> 
        Petra "Jezevce" Pouchlého z <a href="https://www.linkedin.com/company/court-of-moravia/" rel="noopener" target="_blank">Court of Moravia</a>.</code-li>
    <code-li>Již ve chvíli, kdy se na práci dohodneme, jsem na Vašem projektu určitý čas strávil &ndash; psaním nabídky, naceňováním, zkoumáním specifických technologií, které používáte.</code-li>
    <code-li>Platíte si profesionála, ovládajícícho technologie, které nabízí. Učení se nové technologii nefakturuji (pokud opravdu není specifická jen pro váš projekt). Nemusíte mě zaučovat.</code-li>
    <code-li>Nacenění zakázky vždy obnáší určitou míru rizika, ale já se vždy snažím, aby moje nabídková cena byla dodržena. Neočekávané problémy se téměř vždy objeví. Vyšší hodinová sazba mi sazba umožňuje 
        pokrýt určitou míru neočekávatelných vícenákladů bez zvyšování celkové ceny.</code-li>
    </ul>

<h2>Odborné vzdělání</h2>
<p>Kromě práce jsem úspěšně dokončil Ph.D. studium na <a href="https://fi.muni.cz/"  rel="noopener" target='_blank'>FI MU</a>. I když jsou požadavky na software vyvíjený v akademické sféře odlišné od těch, které se objevují v komerční, jsem přesvědčen, že tato zkušenost přináší výhody i při "klasickém" vývoji:</p>
<ul class="list-unstyled">
<code-li>Mám solidní teoretické základy, které jsem schopný použít v praxi - např při vývoji vícevláknových aplikací, efektivních datových struktur a datových modelů a dalších problémů, které představují úzká hrdla v aplikacích nebo rovnou způsobují jejich nespolehlivost.</code-li>
<code-li>Jsem schopný konstruktivně přijímat kritiku - pár nelichotivých peer review vás naučí nebrat si věci osobně.</code-li>
<code-li>Umím porovnat dostupné možnosti na základě objektivních kritérií, umět se rozhodnout a svoji volbu si i obhájit.</code-li>
</ul>

  </b-container>
</template>

<script>
    import CodeLi from './CodeLi.vue';
    //import TechIcon from './TechIcon.vue';
    import ReasonsCarousel from './ReasonsCarousel.vue';
    import Services from './Services.vue'
    import Email from './Email.vue';
    export default {
        name: 'AboutMe',
        components: {
            CodeLi,
            //TechIcon,
            ReasonsCarousel,
            Services
        },
        mixins: [Email],
        data: function () {
            return {
                authors: [],
                photo: require('../assets/photo.jpg'),
                photoSrcSet: require('../assets/photo.jpg?srcset&format=webp')
            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>
<style scoped>

img.photo {
    width: 200px;
}

</style>