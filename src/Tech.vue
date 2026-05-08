<template>
  <b-container class="text-justify" id="content">
    <h1>Co umím</h1>
    <p>Konkrétním technologiím nepřikládám zas tak velkou důležitost, přizpůsobuji se konkrétnímu projektu, jak se můžete přesvědčit v mých <a href="/references">referencích</a>. Samozřejmě ale neznám všechno 
                (i když se rád něco nového naučím). V tabulce najdete seznam technologií, se kterými mám zkušenosti. Pro úplnost také uvádím, které 
                volím, když si můžu vybrat.</p>
          <tech-table />  


          <h2 id="integrations">Integrace systémů a služeb</h2>
        
          <p>Mám mnoho zkušeností s psaním integrací mezi systémy. Jednak mí klienti obykle už nějaké systémy používají a já rozhodně nechci, aby je nahrazovali. A jednak je využívání existujících služeb obvykle výrazně levnější než zakázkový vývoj na míru. Co vše si pod takovými integracemi můžeme představit? Níže uvádím příklady integrací, na kterých jsem pracoval.</p>

    <ul class="list-unstyled">
        <code-li>Odesílání SMS ze systému (což může být např. i tabulka <a href="https://workspace.google.com/products/sheets/">Google Sheets</a> nebo databáze <a href="https://airtable.com">Airtable.com</a>) přes SMS bránu při provedení akce</code-li>
        <code-li>Automatické vystavování faktur ve fakturačním systému (např. <a href="https://fakturoid.cz">Fakturoid</a>) a označení objednávky za zaplacenou, když fakturační systém zaregistruje platbu.</code-li>
        <code-li>Integrace platební brány (např. <a href="https://gopay.cz">GoPay</a>, <a href="https://stripe.com">Stripe</a>).</code-li>
        <code-li>Automatický přenos záznamů v Vašeho systému do RCM i s příšlušnými metadaty.</code-li>
        <code-li>Integrace fyzického platebního terminálu s POS systémem.</code-li>
        <code-li>Rozšíření pro Goodle kalendář, které nabízí boční panel s doplňujícími informacemi  a akcemi z externího systému (např. rezervace místností).</code-li>
        <code-li>Skriptování pro <a href="https://workspace.google.com/products/sheets/">Google Sheets</a> nebo databázi <a href="https://airtable.com">Airtable.com</a>, které automatizuje často prováděné úlohy.</code-li>
        <code-li>Skriptování pro cloudové WYSIWYG platformy (<a href="https://webflow.com">Webflow</a>, <a href="https://wix.com">Wix.com</a>) - např. vyplnění formuláře na základě IČ a napojení na ARES.</code-li>
    </ul>

          <h2 id="ai">AI při vývoji</h2>
        <p>AI beru jako další nástroj pro efektivní práci, ne jako náhradu za zkušenosti a odpovědnost vývojáře. Největší přínos pro mě má tam, kde umí zrychlit
        průzkum možností, odhalit slepá místa a pomoct s rutinními částmi vývoje, které by dříve byly příliš nákladné.</p>

    <ul class="list-unstyled">
        <code-li><b>Analýza a návrh</b> &ndash; porovnávání různých způsobů řešení problému, hledání kompromisů a kontrola, jestli jsem nepřehlédl důležitou variantu.</code-li>
        <code-li><b>Tvorba kódu</b> &ndash; rychlejší příprava robustních řešení, která počítají i se situacemi, na které by bez dostatečného rozpočtu často nezbyl čas.</code-li>
        <code-li><b>Code review</b> &ndash; hledání chyb, optimalizace, ošetření okrajových případů, lepší logování a rychlejší debugging.</code-li>
        <code-li><b>Dokumentace a testy</b> &ndash; příprava srozumitelných popisů, technických poznámek a testů, které pomáhají udržet projekt dlouhodobě čitelný a bezpečně upravitelný.</code-li>
        <code-li><b>Refaktoring</b> &ndash; úpravy existujícího kódu, sjednocování stylu a postupné snižování technického dluhu bez zbytečného rizika.</code-li>
    </ul>

        <p>Současně si uvědomuji, že AI je potřeba pečlivě kontrolovat. Zvlášť opatrný jsem u bezpečnostních klíčů a credentials, zabezpečení systémů,
        datových modelů a také u spouštění příkazů na produkčních serverech i vývojových strojích, kde mohou být uložené citlivé údaje.</p>

        <p>Aby AI nástroje dávaly smysluplné výsledky, nestačí jen otevřít chat a doufat. Používám skills, MCP servery, další dostupné nástroje a agent mode.
        Zároveň udržuji pomocné soubory typu <code>AGENTS.md</code>, aby měl model v kontextu potřebné informace, nebloudil po projektu a zbytečně nehalucinoval.</p>
    
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
