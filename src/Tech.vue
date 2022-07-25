<template>
  <b-container class="text-justify" id="content">
    <h1>Co umím</h1>
    <p>Konkrétním technologiím nepřikládám zas tak velkou důležitost, přizpůsobuji se konkrétnímu projektu, jak se můžete přesvědčit v mých <a href="/references">referencích</a>. Samozřejmě ale neznám všechno 
                (i když se rád něco nového naučím). V tabulce najdete seznam technologií, se kterými mám zkušenosti. Pro úplnost také uvádím, které 
                volím, když si můžu vybrat.</p>
          <tech-table />  

<h2 id="cloud">Cloud</h2>
        <p>Jak své vlastní, tak některé projekty pro zákazníky vyvíjím pro cloud, konkrétně pro <b>Amazon Web Services</b> (AWS). Kromě obecně platných výhod,
        jako jsou nižší požadavky na správu (aktualizace, zabezpečení) je cloud obzvlášt vhodný pro začínající služby, kde jsou problémem
    vyšší počáteční náklady a horší škálování v závislosti na vytíženosti služby. Řešení se nabízí v podobě tzv. serverless aplikací, které nevyžadují
    dedikovaný (a stále běžící) web server. Ve výsledku to funguje tak, že když na stránku nikdo nepřijde, neplatíte nic, a celkové cena se odvíjí od počtu požadavků,
    které do služby uživatelé pošlou. I když už je služba používána, náklady se pohybují v řádu korun nebo desetikorun měsíčně. Příkladem takového projektu je moje
    <a href="https://schranky.nastojte.cz">Mapa poštovních schránek</a>. Lepší představu o tom, co vývoj aplikace v cloudu obnáší, si můžete udělat z mého <router-link to="/articles/serverless-aws">článku</router-link>.</p>
    <p>Nabízím vývoj aplikací pro cloud (AWS) jako <b>kompletní balíček</b>. Aplikaci <b>naprogramuji</b> tak, aby v cloudu levně, spolehlivě a efektivně běžela, poskytnou
    <b>skripty pro nasazení</b>, díky kterým aplikaci snadno zprovozníte, a nastavím tak, aby se aplikace <b>automaticky aktualizovala</b> na základě aktualizací zdrojového kódu 
    (tzv. <i>continuous deployment</i>). Žádné zdlouhavé kopírování souborů na FTP server a podobně.</p>
        

        <h2 id="repos">Jak vypadá můj kód</h2>
            <p>Na ukázky kódu se můžete nejpohodlněji podívat do následujících veřejných Git repozitářů:</p>
            <ul>
                <code-li><a href="https://github.com/oookoook?tab=repositories" rel="noopener" target="_blank">GitHub</a></code-li>
                <code-li><a href="https://gitlab.fi.muni.cz/xkucer16/semanticBMS" rel="noopener" target="_blank">GitLab @ FI MU</a></code-li>
            </ul>


 <h2>Bzukot</h2>
        <p>V IT jsou poměrně oblíbená tzv. buzzwords. Jasně, jsou to jenom takové nálepky, pod kterými si každý představuje něco jiného a které samy o sobě žádnou zvláštní informaci nenesou. Ale přesto - rád bych
        zde zmínil pár trendů a technologií, které mi přijdou zajímavé, užitečné, použitelné, a se kterými již mám zkušenosti. Klikejte na termíny pro více informací.</p>
        <buzzwords/>

  </b-container>
</template>
<script>

import CodeLi from './CodeLi.vue'
import TechTable from './TechTable.vue'
import Buzzwords from './Buzzwords.vue'

export default {
    name: 'Tech',
    components: { CodeLi, TechTable, Buzzwords }
}
</script>