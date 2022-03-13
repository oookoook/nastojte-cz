# Zákazníkova dilemata při vývoji software

Při vývoji zakázkového software na míru čekají zákazníka různá rozhodnutí, která mohou celou záležitost zásadně prodražit (nebo naopak zlevnit), nebo třeba učinit nepoužitelnou (nebo samozřejmě naopak -- použitelnost zvýšit).

![Otazník](towfiqu-barbhuiya-oZuBNC-6E2s-unsplash.jpg)
*Photo by [Towfiqu barbhuiya](https://unsplash.com/@towfiqu999999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/question?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*
  
Různých větších i menších rozhodnutí během zadání a vývoje aplikace jsou samozřejmě spousty. V tomto článku se budu věnovat jen některým vybraným, které mají tři společné věci:

* Výrazně můžou ovlivnit cenu vývoje,
* Týkají se použitelnosti aplikace, ne technických detailů,
* Nemůže je rozhodnout vývojář sám.

Softwarový vývojář je zde samozřejmě od toho, aby Vám s těmito rozhodnutími pomohl a nasměroval vás správným směrem. Mějte však na paměti, že konečnými uživateli jste vy. Ne každá otázka má jednoznačnou odpověď a v důsledku je na vašem zvážení, jakou cestou se vydat. Konečné rozhodnutí bude na vás, a hlavně jen vy ponesete důsledky těchto rozhodnutí během užívání aplikace.

Stejně jako je do určité míry subjektivní rozhodování o zde probíraných dilematech, nevyhnutelně je subjektivní i tento článek. Snažím se poskytovat objektivní argumenty pro každou možnost, ale mějte na paměti, že i já se zde dopouštím hodnocení, která jsou ovlivněna mými osobními názory a preferencemi a jako vývojáře.

::: note

Na úvod drobný *Disclaimer* pro kolegy vývojáře. Tento článek značně zjednodušuje. Čtenář, na kterého myslím, když toto píšu, je někdo bez IT vzdělání, který ale zadává vývoj software. Obvykle tedy projektový nebo produktový manažer a podobně. Určitá vágnost je nutná pro zachování srozumitelnosti a rozumné délky.
Pokud vám tu něco zásadního chybí, dejte vědět. Článek plánuji postupně rozšiřovat.

:::

Rozhodnutí jsem rozdělil několika různých **zákaznických dilemat**:

* [Dilema první: Z krabice nebo na míru?](#dilema-první-z-krabice-nebo-na-míru)
* [Dilema druhé: Mobil nebo počítač?](#dilema-druhé-mobil-nebo-počítač)
* [Dilema třetí: Web nebo aplikace?](#dilema-třetí-web-nebo-aplikace)
* [Dilema čtvrté: Vlastní design nebo šablona?](#dilema-čtvrté-vlastní-design-nebo-šablona)
* [Dilema páté: Do cloudu nebo klasicky?](#dilema-páté-do-cloudu-nebo-klasicky)
* [Dilema šesté: Jen kód nebo kompletní správa?](#dilema-šesté-jen-kód-nebo-kompletní-správa)
* [Dilema sedmé: Je funkce opravdu nutná? Aneb Co vás bude stát nejvíce](#dilema-sedmé-je-funkce-opravdu-nutná-aneb-co-vás-bude-stát-nejvíce)
* [Dilema neexistující: Na čem trvat](#dilema-neexistující-na-čem-trvat)
* [Závěrem](#závěrem)

## Dilema první: Z krabice nebo na míru?

![Krabice](christopher-bill-3l19r5EOZaw-unsplash.jpg)
*Photo by [Christopher Bill](https://unsplash.com/@umbra_media?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/box?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Vůbec nejzásadnější rozhodnutí musí proběhnout hned na úvod: Potřebujete opravdu software na míru?

Hotové produkty, které se dají koupit buď k instalaci, nebo dnes často jako služba (*SaaS -- Software As a Service*), jsou v IT hantýrce označované jako "krabicový software". Důvod je ten, že kdysi se software opravdu dal koupit v krabičce, ve které byly diskety, později CD nebo DVD, a manuál.

Typickými příklady jsou:

* E-shopy -- [Shoptet](https://shoptet.cz), [ExitShop](https://www.exitshop.cz/), [Shopify](https://www.shopify.com/), [WooCommerce](https://woocommerce.com/), [SimpleShop](https://www.simpleshop.cz/).
* CRM (systémy evidenci zákazníků) -- [Raynet](https://raynet.cz), [Salesforce](https://www.salesforce.com/).
* Fakturační systémy -- [Fakturoid](https://fakturoid.cz/), [iDoklad](https://www.idoklad.cz/), [Vyfakturuj](https://www.vyfakturuj.cz/).
* Účetní systémy -- [Pohoda](https://www.stormware.cz/), [Money S3](https://money.cz/produkty/ekonomicke-systemy/money-s3/), [Ježek Duel](https://www.jezeksw.cz/duel/), [Ekonom](https://ekonom-system.cz/), [Premier](https://www.premier.cz/), [Abra FlexiBee](https://www.abra.eu/flexi/).
* Řízení projektů -- [Trello](https://trello.com/), [Freelo](https://www.freelo.cz/), [Lamael](https://www.lamael.cz/), [Easy Project](https://www.easyproject.cz/), [Asana](https://asana.com/), [Caflou](https://www.caflou.cz/), [Monday.com](https://monday.com/).
* Marketingové nástroje a rozesílače e-mailových kampaní -- [DreamROI.com](https://www.dreamroi.com/) (pracuji na něm), [SmartEmailing](https://www.smartemailing.cz/), [Ecomail](https://ecomail.cz/), [ActiveCampaign](https://www.activecampaign.com/), [MailChimp](https://mailchimp.com/)

Vždy se klientů při poptávce na software nejprve ptám, jestli opravdu zakázkový vývoj je nutný -- jaká je ta nutná a klíčová funkce, kterou potřebují, a kvůli které jim nevyhovuje nic už hotového? Je totiž třeba si uvědomit, že zakázkový produkt je prakticky vždy dražší než hotové řešení, které výrobce prodává jak housky na krámě.
To je jednoduchá matematika. Když se software vyvíjí na míru, platíte ho celý vy. Cena krabicového řešení se rozpočítává mezi velké množství klientů. Pokud vás od hotových řešení odrazuje např. zdánlivě vysoký měsíční poplatek, vezměte si pro jistotu do ruky kalkulačku, cenovou nabídku na vývoj na míru, a počítejte. Prakticky určitě vám vyjde, že se oproti předplatnému zakázkový vývoj vyplatí až po dlouhých letech, během kterých už ale budete muset investovat další peníze do udržování aplikace a nutných změn (reakce na vývoj legislativy a technologií). Vývoj řešení na míru obvykle je třeba zdůvodnit funkčními požadavky, které žádné dostupné řešení nemá, protože ekonomicky se to nevyplácí.

::: note

Snad jediným případem, kdy zakázkový vývoj má ekonomický smysl i u ne-unikátních funkcí, je situace, kdy funkce je sice dostupná, ale jen v drahých komplexních systémech, jejichž ostatní části nevyužijeme. Proto necháme na zakázku vyvinout vlastně jen "výřez" toho komplexního systému.

:::

Existuje tedy pak ještě jeden důvod, proč zvolit vývoj vlastního řešení -- a to ve chvíli, kdy je to opravdu jádro vašeho byznysu a nechcete být závislí na cizím produktu. V takové chvíli si ale začněte stavět tým vývojářů a počítejte s náklady ve statisících, možná spíš milionech za rok.

Pokud už tedy tu unikátní funkci identifikujeme, je třeba provést ještě jednu kontrolu -- opravdu je tato odlišnost daná podstatou toho, co děláte a vyrábíte? Není to prostě tak, že máte historicky zažitý nějaký specifický proces, který by se ale dal dělat trochu jinak a přizpůsobit dostupným řešením?

Nyní se tedy dostáváme do stavu, kdy si jste jisti, že potřebujete vývoj na míru. Stále zde ale jsou i jiné možnosti než vyloženě zakázkový vývoj celé aplikace od základů.

Jednak jsou zde systémy, které jsou rozšiřitelné pomocí rozšiřujících modulů/aplikací. Další kategorií přizpůsobitelných řešení jsou modulární podnikové systémy. Poslední roky jsou populární také tzv. low-code nebo no-code řešení. Jednotlivé kategorie si rozebereme podrobněji.

### Pluginy a aplikace

Mnoho SaaS systémů nabízí možnost rozšíření pomocí pluginů nebo aplikací. Rozšíření si obvykle můžete vybrat z nějakého obchodu (*store*) nebo tržiště (*marketplace*). Typickými příklady jsou e-commerce řešení [Shopify App Store](https://apps.shopify.com/) nebo [doplňky pro český Shoptet](https://doplnky.shoptet.cz/). Podstatné je ale to, že systémy obvykle umožňují i instalaci vlastních rozšíření, které si necháte napsat na míru. Typické použití zrovna u e-shopů jsou nějaké vlastní konfigurátory produktů, napojení na systém dopravce, které v základu systém neobsahuje, a podobně.

### Modulární systémy

Toto je běžné u podnikových systémů (ERP, CRM) jako je [SAP](https://www.sap.com/), [Microsoft Dynamics](https://dynamics.microsoft.com/cs-cz/), různé varianty systému [Helios](https://www.helios.eu/), [Money S5](https://money.cz/produkty/ekonomicke-systemy/money-s5/) a podobně. Nasazení aplikace v podstatě probíhá tak, že si koupíte jednak licenci od výrobce, a jednak zaplatíte tzv. implementátora, který systém přizpůsobí vašim konkrétním potřebám a zavedeným procesům. Je třeba říct, že toto bývají velice nákladná řešení.

### No code

V podstatě vždy se jedná o cloudové aplikace, kde si typicky v nějakém editoru "naklikáte" strukturu dat, různé pohledy na data a řezy, a systém sám vytvoří uživatelské rozhraní. Vlastně programujete jen ty speciální funkce, které potřebujete -- exporty, kontroly životního cyklu, a další. Zbytek máte hotový velice rychle.

Příklady:

* [Google AppSheet](https://www.appsheet.com/)
* [Microsoft Power Apps](https://powerplatform.microsoft.com/en-us/power-apps/)

Funguje to v podstatě tak, jak píšu výše. Načtete si datový zdroj (databázi, Excelovou tabulku), pak si připravíte různé pohledy a řezy nad daty, a vybíráte si, jak je zobrazit -- v tabulce, jako karty, nebo jako jednoduchý graf. Ty možnosti jsou samozřejmě omezené, ale důležité je, že pro složitější akce můžete zavolat nějakou externí službu (např. pro generování exportů), a můžete si přes vývojové diagramy definovat algoritmy -- např. když se hodnota ve sloupci X změní na Y, tak se spustí nějaký kontrolní mechanismus, který pošle notifikaci. No-code má hlavní výhodu: Aplikaci může upravovat i ne-programátor, i když technické myšlení to chce. I když původní implementaci bude dělat vývojář (což bych asi doporučoval), bude to mnohem rychlejší než vývoj úplně na míru.

Nevýhody jsou v podstatě tři:

* Možnosti nejsou neomezené a u opravdových specialit můžete narazit.
* Jste zcela závislí na poskytovateli no-code platformy (Google, Microsoft, ...). Službu můžou kdykoliv zdražit nebo zrušit a vám nezbývá, než se s tím smířit.
* Poměrně vysoká cena za provoz, licencování za uživatele. (I když jsem přesvědčený, že cena je oproti zakázkovému vývoji velice konkurenceschopná)

### Low code

Možnosti low code budu ilustrovat na české platformě [Jetveo](https://jetveo.io/) (určitě budou existovat i konkurenční služby, já trochu lépe znám jenom tuto). Je to v podstatě pomoc pro vývojáře, která usnadňuje vývoj častých kusů kódu. Jetveo zajišťuje provoz aplikace a platíte měsíční poplatek za každého uživatele. V tomto případě ušetříte vývoji, i když je vlastně úplně zakázkový, ale zase platíte více každý měsíc za provoz.

### Zakázkový vývoj

Po vyloučení všech předchozích možností přichází na řadu samotný zakázkový vývoj.

Zakázkový vývoj samozřejmě trvá nejdéle. Výhody plně zakázkového vývoje jsou asi hlavně dvě:

* S nepříliš velkou nadsázkou -- co si vymyslíte, to se dá udělat. Můžete mít aplikaci, která naprosto přesně vyhovuje vašim požadavkům.
* Po dokončení aplikace byste měli dostat zdrojové kódy a dokumentaci (o tom více dále), to je vaše a nejste na nikom závislí. Když Google zruší AppSheet, jste bez aplikace. Když Jetveo službu ukončí, tak těžko říct, co se stane. Možná z nich kódy aplikace ještě nějak získáte, ale nevím, jestli se na to dá spoléhat. U zakázkového vývoje po dokončení zakázky je to celé vaše. Sice to možná máte hostované v Cloudu někde u Amazonu, ale když Amazon přestane poskytovat služby, vy zdrojové kódy máte a nic vám nebrání (za určitých podmínek -- ještě se k tomu dostanu níže) aplikaci rozjet jinde.

<!--
## Dilema druhé: Uživatelské rozhraní

Jedna z prvních otázek zní, jakým způsobem se bude aplikace používat. A to konkrétně: Bude se s aplikací pracovat na mobilním telefonu? Bude to webová aplikace nebo aplikace pro počítače? Jak vidíte, podvádím. Nejde o dilema, možností je mnohem více, v zásadě jsou tyto:

* Aplikace pro počítač -- "desktopová" aplikace, která se instaluje. Má smysl v odůvodněných případech.
* Webová aplikace pro počítače -- Vymírající druh, ale opět, v určitých případech dává smysl.
* Responzivní webová aplikace -- Cenově výhodná varianta umožňující práci z mobilu.
* Aplikace pro mobilní telefony -- Existuje vce variant, rozebraných níže.

Správnou variantu vám určií vyřešení následujících dvou dílčích dilemat.

Třetí dílčí dilema se týká toho, jak bude aplikace vypadat.

-->

## Dilema druhé: Mobil nebo počítač?

![Počítač](joshua-woroniecki-lzh3hPtJz9c-unsplash.jpg)
*Photo by [Joshua Woroniecki](https://unsplash.com/@joshua_j_woroniecki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/laptop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Jedna z prvních otázek zní, jakým způsobem se bude aplikace používat. A to konkrétně: Bude se s aplikací pracovat na mobilním telefonu?

U některých aplikací to vůbec nedává smysl (z mé praxe: editor e-mailových šablon, konfigurátor pluginu pro e-shop), u jiných je to naprosto samozřejmé (aplikace pro zobrazení technické dokumentace zařízení, umožňující skenování QR kódů).

U jiných to zase možná tak samozřejmé není, protože se to "nikdy takhle nedělalo", ale vlastně není žádný důvod, proč by se to tak dělat nemohlo. Z posledních let jsou takovými příklady internetové bankovnictví, fakturační služby ([Fakturoid](https://fakturoid.cz/), [iDoklad](https://www.idoklad.cz/)), nebo kancelářské programy jako Excel/Spreadsheets nebo Word/Docs. K těmhle věcem vždy byl potřeba počítač, ale ukazuje se, že i na mobilu vlastně jsou pro určité případy v pohodě použitelné.

Jaký případ je zrovna vaše aplikace?

Dnešní webové technologie jsou připravené na to, že lidé na stránky přistupují z různých zařízení, a podporují proto tzv. responzivní zobrazení. To znamená, že se vzhled přizpůsobuje ("přeskládává" podle toho, na jak velké obrazovce na něj koukáte. Co je na počítači vedle sebe, se na mobilu seřadí pod sebe, aby vše bylo čitelné. Dá se tedy říct, že dnes není problém udělat webovou aplikaci, která bude funkční jak na počítači, tak na mobilu, bez nějaké práce navíc.

Je tu ale velké **ALE**. Píšu, že bude *funkční*. To ale neznamená, že bude i přehledná a pohodlná na používání. Pokud víme, že aplikace bude na mobilech běžně používaná, je třeba na to při vývoji myslet a věnovat tomu nějaký čas a potřebnou péči navíc. Jde třeba o takové věci, jako jakým způsobem "přeskládávat" ty samé prvky na obrazovce v závislosti na velikosti obrazovky. Automatické přeskládávání rozložení stránky například občas sníží přehlednost aplikace, protože se změní pořadí, v jakém uživatel části stránky vidí. Ta nejjednodušší řešení obvykle fungují dobře buď jen na mobilu, nebo jen na počítači. Pokud to má být dobré na obojím, je třeba do vzhledu investovat více a uživatelské rozhraní přizpůsobit zvlášť pro obě platformy.

::: note
Opět drobná poznámka. To prakticky v žádném případě neznamená, že se nějaké části uživatelského rozhraní budou psát dvakrát, jen je třeba uživatelské rozhraní napsat o něco složitěji. Mluvíme o zvýšení nákladů maximálně o nižší desítky procent.
:::

## Dilema třetí: Web nebo aplikace?

![Mobilní aplikace](brett-jordan-ZVhbwDfLtYU-unsplash.jpg)
*Photo by [Brett Jordan](https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/app?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Nejviditelnější rozdíl je to, jakým způsobem bude uživatel spouštět aplikaci. Jestli bude muset do webového prohlížeče a zadávat adresu, nebo bude mít ikonku v seznamu aplikací/na ploše. Vývoj aplikací je poměrně rozsáhlé téma s velkým množstvím možností. Začnu od těch nejjednodušších možností, které nabízejí nejméně přidané hodnoty, a budu pokračovat k nákladným variantám, které mají nejvíce možností.

* Na jedné straně jsou tzv. PWA (*Progressive web applications*), což jsou vlastně webové stránky, které umožňují přidat ikonku do seznamu aplikací. To je ta nejjednodušší možnost, jak vytvořit "něco jako" aplikaci. S trochou nadsázky toto stačí na webu zapnout a je to prakticky zdarma.
* Dále existují nástroje, které umožňují vzít Vaši webovou aplikaci a "přebalit" ji tak, že se dá instalovat z tržiště aplikací daného operačního systému (App Store, Google Play, Windows store). Takovéto aplikace se označují za *hybridní*. Výhodou pak je, že máte jen kód společný jak pro web, tak pro všechny aplikace. Zároveň ale můžete pohodlně využívat funkce zařízení -- navigaci, fotoaparát, ... Co se týče pracnosti, zprovoznění je záležitostí hodin, maximálně několika málo dnů. Ekonomicky to tedy nabízí zřejmě nejlepší poměr cena/výkon.
* Další možností už jsou aplikace, které už nefungují zároveň jako webová aplikace, ale jsou určeny čistě k instalaci (tady mluvíme zejména o mobilních telefonech). Existují ale nástroje, které umožňují vyvíjet jednu aplikaci a poté ji zveřejnit jak pro iOS (Apple), tak Android (Google). Takové aplikace označujeme typicky za multiplatformní. Výhodou oproti předchozí variantě bude zejména vyšší výkon aplikace a možnost zvolit jiné uživatelské rozhraní, lépe přizpůsobené danému prostředí. Weby, tvářící se jako aplikace, mohou totiž na uživatele působit trochu nepřirozeně.
* Poslední možností jsou tzv. nativní aplikace. V podstatě potom máte zcela samostatnou aplikaci pro každou platformu/operační systém. To je velice nákladné a měly by existovat opravdu dobré důvody, proč se vydat touto cestou. Ty důvody bývají buď nutnost pracovat s nějakými specifickými funkcemi, který má daný operační systém, nebo ve chvíli, kdy je aplikace velmi náročná na výkon.

Doporučení vhodného typu aplikace by zřejmě měl udělat vývojář na základě analýzy vašich potřeb. Pro většinu běžných použití budou zřejmě vyhovující možnosti 1 nebo 2.

## Dilema čtvrté: Vlastní design nebo šablona?

Pokud už jste rozhodli, jakým způsobem budou uživatelé k aplikaci přistupovat, zbývá vyřešit, jak bude aplikace vypadat. Toto se řeší hlavně pro webové a mobilní aplikace a dále se budu věnovat hlavně jim.

První možnost je vlastní, unikátní design aplikace. Toto řešení je vhodné zejména v situaci, kdy vytváříte aplikaci pro širokou veřejnost a chcete se výrazně odlišovat vizuálním stylem od konkurence. Pochopitelně se ale jedná o nejnákladnější řešení:

* Potřebujete grafika, který připraví vzhled,
* Potřebujete UI (*User interface*) designéra, který prvky navržené grafikem poskládá do podoby kompletní aplikace,
* Ideálně byste měli zapojit i UX (*User experience*) experta, který rozhraní domyslí tak, aby bylo dobře použitelné,
* Potřebujete front-end kodéra, který design převede do zdrojového kódu a "rozhýbe"

Grafik, UI a UX designér může být jeden člověk, ale pochopitelně nebude levný. Zejména UX je velice komplexní oblast. Pokud narazíte na člověka, který nabízí jak služby grafika, tak kodéra, nejdříve si pečlivě prověřte jeho reference a zjistěte, jestli se vám jeho práce líbí. Jsou to totiž dva velice odlišné obory a lidí, kteří umí dobře udělat oboje, bude málo.

Pokud chcete na vzhledu aplikace něco ušetřit, ale zároveň nedělat příliš veliké kompromisy v samotné použitelnosti, můžete vycházet z existujících designových systémů nebo šablon. Nejpopulárnější příklady jsou [Bootstrap](https://getbootstrap.com) nebo [Material Design](https://material.io/design) implementovaný např. v systému [Vuetify](https://vuetifyjs.com/en/), ale dají se najít i propracovanější šablony např. pro vytváření administračních rozhraní, jako například [Lux Admin Pro](https://indielayer.com/template/lux-admin-pro/preview).

Jedná se vlastně o knihovny komponent (tlačítka, formulářové prvky, tabulky), ze kterých vývojář skládá aplikaci podobně jako když stavíte z Lega. To má několik výhod:

* Výrazně to šetří čas při vývoji.
* Komponenty jsou připravené tak, aby byly dobře použitelné a srozumitelné pro uživatele.
* Vývojáře vedou tyto systémy k použití tzv *best practices*. Pravděpodobně tedy dostanete obstojný výsledek i bez toho, abyste museli zapojit UX experta. I když je třeba říct, že živý UX designér odvede mnohem lepší práci, protože velká část UX se týká umístění prvků na stránce, které tyto šablony obvykle nijak neřeší a nechávají na vývojáři.

![Lego](xavi-cabrera-kn-UmDZQDjM-unsplash.jpg)
*Photo by [Xavi Cabrera](https://unsplash.com/@xavi_cabrera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/lego?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Kdy je vhodné použít šablony a knihovny komponent?

* Pokud vytváříte aplikaci pro interní potřebu,
* Pokud vlastní design nepotřebujete k odlišení od konkurence (nebo vlastní design použijete jen pro prezentační web),
* Pokud chcete mít aplikaci ve známém, povědomém designu (Material Design využívá Google ve svých službách, Bootstrap je dílem Twitteru),
* Pokud potřebujete funkční uživatelské rozhraní s co nejmenšími náklady.

Aby to rozhodování nebylo tak jednoduché, existují i různé další zajímavé varianty. Například je možné vytvořit vzhled ve službě [Webflow](https://webflow.com), což je vizuální editor stránek, a poté vyexportovat kód. Služba tedy může odbourat nutnost grafika, pokud si na tvorbu designu troufáte sami. Upřímně řečeno bych to příliš nedoporučoval, spíše nedosáhnete tak dobrého výsledku, jako někdo, kdo se tomu dlouhodobě věnuje -- zase je ale třeba říct, že Webflow nabízí velké množství připravených šablon, které si můžete koupit a vycházet z nich).

Webflow ale umožňuje importovat hotové designy z designerského nástroje [Figma](https://figma.com), případně grafik nebo UI/UX designér může rovnou vzhled připravit ve Webflow. Hlavní výhoda je v tom, že Webflow udělá velkou část práce frontend kodéra. Webflow totiž vygeneruje zdrojový kód, vývojáři poté jen stačí napojit kód na aplikační logiku aplikace. Výsledkem by tedy měla být unikátní grafika za rozumné náklady. V tomto případě ale musím přiznat, že s tím nemám zatím žádnou přímou zkušenost a čerpám jen z dokumentace.

## Dilema páté: Do cloudu nebo klasicky?

Tady trochu podvádím, nejedná se totiž o dilema. Těch variant, jak aplikaci provozovat je mnohem více.

V prvé řadě můžeme chtít vyvinout tzv. desktopovou aplikaci, kterou si každý uživatel nainstaluje k sobě na počítač. Dnes k tomu obvykle musí být dobrý důvod a nebývá to příliš časté. Mezi dobré důvody můžou patřit následující:

* Nutnost komunikace s nějakým speciálním hardwarovým prvkem, který má uživatel připojený k počítači. Například nějaký převodník.
* Opravdu specifické uživatelské rozhraní, které se na webu dělá těžko (např. grafické programy)
* Nutnost práce s velkými objemy dat, které má uživatel u sebe (např. editory videa)

Aby to nebylo tak jednoduché, i desktopové aplikace můžou komunikovat po internetu s nějakou jinou částí systému (kterou obvykle nazýváme *backend*) a tu také musíte nějak provozovat.

Tomu se tedy věnuje zbytek této části. Jakým způsobem provozovat aplikaci, která má být nějakým způsobem dostupná po internetu? Obvykle jde o klasickou webovou aplikaci nebo mobilní aplikaci, ve řidších případech o desktopovou.

První variantou, dnes už snad ne moc používanou, je provoz na **vlastním serveru**. To je většinou varianta u větších firem, které mají vlastní IT infrastrukturu. Někdy může být použití veřejných hostingových služeb nebo cloudových platforem nemožné například kvůli tomu, že aplikace potřebuje přímý přístup do privátní sítě organizace. Jinak pro to dnes nevidím příliš mnoho důvodů, snad jen když máte server a nevíte co s ním.

**Webovou aplikací** myslíme obvykle aplikaci, běžící na klasickém hostingu. Napsaná je v jazyce PHP, hostingů jsou mraky, v případě problémů s poskytovatelem není problém přejít jinam. Aplikace takto určitě může být provozovaná, i když to je věc, kterou třeba já vůbec nenabízím, ale to je věc čistě mých osobních preferencí. Vyhnul bych se jen nabídkám, které budou navrhovat řešení typu že přizpůsobí tzv. WordPress nebo podobný redakční systém. Podle mého názoru to pro aplikace nedává příliš smysl. WordPress je vhodný na prezentační weby, případě na E-shopy (WooCommerce).

**Cloudové aplikace** neběží na hostingu, ale v cloudovém prostředí (Amazon AWS, Microsoft Azure, Google Cloud Platform).

![Cloud](jose-ramos-BWCgQw25XUE-unsplash.jpg)
*Photo by [José Ramos](https://unsplash.com/@joser0337?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/cloud?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Při vývoji na míru je bez problémů možné umístit aplikaci do cloudu. Je několik možností, jak to udělat, které jsou rozepsané níže. Vždy můžete mít cloud jenom jako možnost, kterou můžete a nemusíte využít -- to znamená, že vyvinete v podstatě klasickou aplikaci, kterou byste si mohli nainstalovat klidně i na klasický fyzický server, jen se ji rozhodnete provozovat v cloudu (obvykle tak, že si místo toho fyzického serveru koupíte virtuální server, o který se musíte starat, jen nemusíte řešit to "železo" (chlazení, elektřinu, poruchy).

Na druhé straně spektra jsou tzv. cloud-native aplikace, které už jsou přímo psané tak, že poběží v cloudu. Mají určitě spoustu výhod, ale není to řešení všech problémů.

Základní varianty provozu aplikace v cloudu jsou tedy následující:

1) Koupíte si v cloudu vlastní server nebo tzv. kontejner a na něm provozujete webovou aplikaci. Oproti hostingu je výhoda v tom, že máte na výběr z většího množství jazyků. To je taková klasická varianta, která mi pro většinu účelů přijde nejvhodnější. Toto řešení budou preferovat vývojáři v Pythonu, Javě nebo Javascriptu. Za mě je jedno, v jakém jazyce to bude napsané, nedá se říct, který by byl vhodnější.
2) Budete v cloudu provozovat desktopovou aplikaci, která se bude připojovat k databázovému serveru, aby v aplikaci mohlo pracovat více uživatelů zaráz. Na server se budete připojovat přes tzv. vzdálenou plochu, zase je více variant. Toto bych nedoporučoval. Toto se většinou používá u aplikací, které pro cloud původně psané nebyly, a je třeba je tam dostat.
3) Tzv. nativní cloudové aplikace -- protože toto je moje specializace, rozepíšu se o těchto aplikacích více.

### Cloud-native aplikace

Jedná se opět z pohledu uživatele o webové nebo mobilní aplikace. V takové chvíli nemáte žádný vlastní server, ale aplikace se skládá ze velkého množství nezávislých komponent, které využívají různé služby, které daná cloudová platforma nabízí. Tato řešení mají své výhody i nevýhody:

* Není třeba se starat o servery -- Aktualizace, kompatibilita software, apod. Vše je zajištěno provozovatelem.
* Automaticky je zajištěna vysoká dostupnost -- Vaše služby budou dostupné prakticky kdykoliv, postará se o to provozovatel cloudové platformy.
* Skvělé škálování jak ceny, tak výkonu * to znamená, že pokud je aplikace správně navržená, má k dispozici prakticky neomezený výkon (tzn. snadno snese velký nárůst uživatelů) a zároveň provozní náklady rostou (a klesají) v závislosti na tom, kolik uživatelů aplikaci používá. To je velká výhoda pro aplikace, které mají být dostupné veřejnosti.
* Do určité míry méně starostí se zálohováním dat, jakási základní redundance a zálohování je cloudovou platformou poskytováno automaticky (i když dělat si vlastní zálohy je samozřejmě stále vhodné)
* V určitých situacích umožňuje snížit náklady na vývoj (je možné používat už existující služby v cloudu).
 Má to ale i svoje nevýhody:
* Ne každý toto umí správně navrhnout a zprovoznit, bude tedy těžší sehnat vývojáře, a hlavně ho nahradit.
* Stanete se závislým na poskytovateli cloudové platformy (Microsoft, Google, Amazon).
* V určitých situacích zvyšuje náklady na vývoj (je třeba se přizpůsobit způsobu fungování cloudové platformy).

Při rozhodování, jakou cestou se vydat, asi bude důležité, jestli plánujete aplikaci nabízet veřejně a očekáváte tedy velký nárůst uživatelů. Pokud ano, je dnes volba jasná -- cloud-native. Pokud ne, varianta cloud-native je stále ve hře, ale v mnoha případech pak už lépe vychází varianta vlastního virtuálního serveru v cloudu.

## Dilema šesté: Jen kód nebo kompletní správa?

![Administrátor](arif-riyanto-1DRq1ZsE2N0-unsplash.jpg)
*Photo by [Arif Riyanto](https://unsplash.com/@arifriyanto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/programmer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Je dobré si s Vaším vývojářem předem ujasnit, co vše od něj očekáváte. Jestli jen dodání zdrojového kódu (v horším případě jen spustitelné aplikace -- k tomu dále), nebo chcete, aby zajišťoval i zprovoznění aplikace, její provoz, správu, aktualizace a podobně.

Pokud zprovozněn aplikace nebudete požadovat, nebo vám nebude nabídnuta, vývojář vám odevzdá sadu souborů, které si budete muset zprovoznit (ve vývojářské hantýrce *nasadit*) sami. Někdy dostanete od vývojáře dokumentaci, podle které to budete schopni udělat, jindy dokumentaci nedostanete (předpokládám tedy, že jste si ji neobjednali), nebo je to tzv. vývojářská dokumentace, se kterou si nevíte rady. V takovém případě budete nejspíše muset sehnat nějakého IT odborníka, který je schopný aplikaci zprovoznit.

Obvyklé úkony, které je třeba pro zprovoznění aplikace udělat, jsou:

* Zřízení hostingu nebo účtu u poskytovatele cloudu,
* Nahrání souborů do hostingu nebo do cloudu, případně zprovoznění "automatické linky", která zajišťuje aktualizaci aplikace vždy, když se změní zdrojové kódy,
* Nastavování přístupových údajů,
* Nastavení tzv. DNS serverů -- jde o to, aby webová adresa vedla na vaši aplikaci.

Obvykle platí, že vývojářům to přijde triviální a nechápou, proč by to měli dělat oni, vždyť je to maximálně na půl hodiny, a zákazníci to nesnáší, nechtějí dělat, a tráví tím půl dne. Podle mě je lepší, když toto dělá vývojář. Znamená to ale, že mu buď musíte udělit přístupy k vašim účtům (hosting/cloud, registrátor domény), nebo se ním potkat nebo nějak vzdáleně spojit tak, aby mohl ovládat váš počítač, a nechat ho to udělat. To samozřejmě ne každý je ochotný podstoupit.

Po prvotním zprovoznění aplikace by vývojář měl být schopný aplikaci průběžně aktualizovat, např. v případě, že bude dodělávat nové funkce.

Nečekejte však, že se vám vývojář bude o aplikaci po odevzdání nějak sám od sebe starat -- to se týká třeba instalace bezpečnostních aktualizací a podobně. Stejně tak se nemůžete spoléhat na to, že v případě problémů s aplikací nebo nějaké havárie bude okamžitě dostupný a že opravu provede zdarma. Pokud o tyto služby stojíte, budete s vývojářem řešit tzv. *SLA (Service License Agreement)*. Jedná se o dlouhodobou smlouvu, kdy se vývojář zaváže, že za měsíční poplatek bude udržovat aplikaci v "dobré kondici". Součástí dobré smlouvy by měly být nastaveny i určité časové rámce (a související smluvní pokuty):

* Čas první reakce -- Tato doba udává, jak dlouho od nahlášení vývojář musí zareagovat. Reakce neznamená vyřešení problému! Jen potvrzení toho, že ví o jeho existenci, plán dalších prací a podobně. Tady se pravděpodobně bude čas měřit v hodinách -- např. do osmi hodin, do 24 hodin, do jednoho pracovního dne.
* Čas do vyřešení -- Udává maximální dobu, kterou může trvat řešení nahlášeného problému. Zde pravděpodobně budete počítat spíše ve dnech a budete řešit, jestli jde o pracovní nebo kalendářní dny. Pokud opravdu potřebujete mít aplikaci opět zprovozněnou v rámci hodin, postavte si buď vlastní IT tým, nebo aplikaci poptávejte u větších softwarových společností, které jsou schopné zajistit nepřetržité služby.
* Dostupnost služby -- udává se v procentech a slangově se setkáte s pojmy *pět devítek* (99,999%) a podobně. Pro ilustraci, pět devítek znamená, že aplikace nepojede [maximálně pět a půl minuty v roce](https://managementmania.com/cs/dostupnost-availability).

Asi není třeba říkat, že konkrétní nastavení těchto veličin velice výrazně ovlivňuje cenu.

## Dilema sedmé: Je funkce opravdu nutná? Aneb Co vás bude stát nejvíce

Podle mých zkušeností klienti při zadávání vývoje tápou v tom, jak je která funkce náročná. Ve výsledku potom nevhodně určují úkoly, na kterých má vývojář pracovat. Konkrétně jde o dvě rizika:

* Odkládání relativně triviální funkce (na naprogramování), která by výrazně zvýšila pohodlí uživatelů, pod dojmem, že to je moc složité a dodělá se to později (např. až bude víc klientů nebo až se systém zavede),
* Trvání na komplexní funkci, která neúměrně ztěžuje vývoj aplikace, a jejíž využití je diskutabilní (často po ní touží jeden člověk od zadavatele), pod dojmem, že to musí být jen drobnost ("však je to jen jedno tlačítko", vizte dále).

Ostatní situace, tedy jednoduchou funkci, která není potřeba, případně složitou funkci, která je naprosto nutná, pochopitelně nemá smysl řešit.

![Chaos](charlesdeluvio-OWkXt1ikC5g-unsplash.jpg)
*Photo by [charlesdeluvio](https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/diagram?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Co jsou tedy ti žrouti času a peněz? Pozor, vůbec netvrdím, že jakákoliv z těch věcí je *zbytečná*, jen že je třeba dobře posoudit, jestli je nutná. Seznam samozřejmě není kompletní, je to jen pár příkladů z mé praxe.

* Vizualizace, reporty a analýzy -- U těchto funkcí bývá složité jak programování aplikační logiky (příprava dat pro zobrazení), tak jejich samotné zobrazování. Udělat pěkné a vyladěné grafy nějaký čas zabere. V rámci webové aplikace a rozumných nákladů ale nejspíš bude aplikace obsahovat jen několik vybraných pohledů na data. Proto je v některých případech vhodnějším řešením připojit k databázi aplikace oddělený analytický nástroj -- ať už se jedná o obyčejný Excel, Power BI, nebo dokonce data z aplikace kopírovat do specializované databáze pro analýzu (ElasticStack a vizualizace pomocí nástroje Kibana).
* Systémy uživatelských práv -- Při vymýšlení toho, který typ uživatele má mít možnost vidět která data, je snadné nechat se unést. Ve chvíli, kdy začínáte uvažovat nad tím, že na budově A má uživatel X vidět všechna zařízení typu B jen pro čtení, ale na budovách D a E zařízení B vůbec vidět nemá, ale zato má vidět zařízení typu F pro čtení a typu G i pro zápis, je třeba uvědomit si značné nevýhody takto detailního nastavování uživatelských práv. Je to drahé na naprogramování, zpomaluje to aplikaci, a je to složité na nastavování při přidávání nového uživatele. Možná to takto opravdu musí být, vím, že ve velkých organizacích se zaběhané zvyklosti mění těžko, ale pokud se tomu dá vyhnout, vyhněte se tomu.
* Hromadné operace -- Jde například o hromadnou editaci více položek zaráz. Hromadné mazání je ještě relativně bez problémů, ale funkce pro hromadnou editaci jsou řádově náročnější než editace záznamů po jednom a navíc často neintuitivní pro uživatele. Nicméně toto je funkcionalita, která i přes svou náročnost bývá vyžadována, protože může výrazně zvýšit efektivitu práce u dobře zaškolených uživatelů.
* Tiskové výstupy -- Pokud je požadovaný opravdu přesný vzhled výstupu, odladění vzhledu může zabrat velké množství času. Přiznám se, že toto jsem sám zatím nikdy neprogramoval. Existují nástroje, které jsou schopné vyplnit programově např. Wordový dokument nebo vygenerují PDF podle zadání. Není to neřešitelné, ale bude stát mnoho úsilí, než bude výsledek dokonalý.
* "Vždyť je to jen jedno tlačítko" -- Tím myslím funkci, která z uživatelského pohledu je velice jednoduchá, ale skrývá se za ní složitá operace. Google je ve výsledku taky vlastně jedno textové pole a jedno tlačítko a rozhodně se nejedná o jednoduchou aplikaci. Chci tím říct, že ve skutečnosti platí to, že čím je funkce jednodušší pro uživatele, tím je obvykle dražší, zvlášť když se za ní skrývá složitý proces.
* "Nelíbí se mi, jak se to dělá normálně" -- Můžete mít naprosto legitimní důvod, proč například nějaký prvek uživatelského rozhraní chcete mít udělaný úplně jinak, že mají všichni ostatní a než jak se běžně dělá. To ale znamená, že programátor nebude moci použít už hotové knihovny nebo komponenty, které pro standardní řešení možná už budou existovat.
* "Nechápu, proč to takto nedělají všichni" -- Pokud máte nápad, který vám přijde naprosto skvělý, ale zdá se vám, že ho nikdo jiný nepoužívá, může to mít v zásadě tři důvody. První, který bych vám sice přál, ale je nejméně pravděpodobný: opravdu přišli na něco nového, unikátního a skvělého. Důvod druhý: Hledáte to pod špatným názvem a existuje pro to nějaký jiný zažitý pojem. Důvod třetí: Nikdo jiný to nedělá kvůli tomu, že to není zase tak dobrý nápad. Občas až v průběhu programování se začnou vynořovat problémy, které tento návrh má, a rázem už je jasné, proč se do toho nikdo jiný nepustil. Pak jen zbývá rozhodnout, jestli to celé rovnou zahodit, nebo s kompromisy dokončit kulhavou nápodobu původní zářné myšlenky. Této chyby se může snadno dopustit i sám vývojář, kdy bez znalosti celého kontextu navrhne elegantní řešení určitého problému, které se později začne obalovat nejrůznějšími výhybkami pro různé výjimky a dalšími nánosy, které odrážejí skutečnou realitu.

![Vizualizace](markus-winkler-IrRbSND5EUc-unsplash.jpg)
*Photo by [Markus Winkler](https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/chart?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Nakonec bych se rád věnoval několika věcem, ze kterých naopak klienti mívají strach, ale jedná se o naprosto běžné a nepříliš náročné věci:

* Lokalizace do dalších jazyků -- Na vše jsou postupy a nástroje. Nakonec nejnáročnější je opatřit srozumitelný překlad, což ale není práce pro vývojáře. Je dobré si už na začátku vývoje říct, jestli lokalizace do jiných jazyků může být v budoucnu potřeba. Vývojáři to dá šanci se na tuto variantu připravit a může to ušetřit práci později, až se lokalizace bude doopravdy dělat.
* Čtení a vytváření QR kódů, čárových kódů,... -- Jsou na to nástroje.
* Import dat do aplikace z Excelu -- Toto si určitý čas vyžádá, ale pokud je pevně daný formát importu, nejedná se o neřešitelný problém.
* Napojení na externí službu (rozhraní/API) -- Klienti z tohoto mají obavy. Jestli to vůbec půjde, jestli to není moc práce. Pokud je služba na připojení přes rozhraní připravena, vždy to jde a vždy je to levnější, než danou funkci programovat vlastními silami, pokud je to vůbec možné. Prakticky vždy se vyplácí i koupit si externí službu, která vám potřebné rozhraní nabídne než se snažit naprogramovat si vlastní verzi této placené služby. Nejčastěji se budete chtít připojit na platební bránu, registry ekonomických subjektů, odeslílače e-mailů a SMS, CRM systémy a další.
* Model životního cyklu entity -- Pod tímto složitým názvem se skrývá to, že v procesu, který modelujeme, je pro přechody mezi jednotlivými stavy/kroky vyžadováno splnění určitých podmínek, nebo naopak přechod mezi stavy vyvolá nějakou další akci. Například: *Aby pracovník mohl pracovní požadavek označit za dokončený, musí vyplnit komentář. Po dokončení požadavku systém musí zaslat e-mail nadřízenému. Nadřízený potom může požadavek označit za uzavřený nebo ho opět otevřít. Před uzavřením požadavku musí vyplnit finanční nálady požadavku.*. Prakticky každý systém vyžaduje definici takovýchto pravidel. Samozřejmě je to práce navíc oproti tomu, když žádná taková pravidla nastavena nejsou. Na druhou stranu je to natolik častý požadavek, že je k dispozici mnoho nástrojů, jak toto rozumně řešit. A hlavně se bez toho systém neobejde a představuje to jednu z hlavních přidaných hodnot.

Určitě toho bude mnohem, mnohem víc. Určitě vývojáři řekněte i ty požadavky, o kterých si myslíte, že budou pracné. Možná vás intuice klame. Dobrý vývojář by vás na oplátku měl upozornit na věci, kde by bylo nutné vynaložit enormní množství času a kde si není jistý prospěšností nákladné funkce.

## Dilema neexistující: Na čem trvat

Naopak existují věci, o kterých nemá smysl vůbec přemýšlet, protože pokud je nedostanete, koledujete si v budoucnu o značné problémy. Pokud vám je vývojář nechce dát, může to být známka toho, že to s vámi nemyslí úplně dobře.

### Vždy chtít zdrojové kódy

![Zdrojový kód](pankaj-patel-_SgRNwAVNKw-unsplash.jpg)
*Photo by [Pankaj Patel](https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

První a nejdůležitější věcí je to, abyste vždy dostali zdrojové kódy od aplikace. Zdrojové kódy jsou to, co vytvoří programátor. Ze zdrojových kódů se potom vytváří spustitelná aplikace. Důležité je říct, že pokud máte spustitelnou aplikaci (EXE soubor, soubory na hostingu nebo na serveru), ve velké částí případů se z ní zpětně nedají zdrojové kódy získat. Dnes to platí i pro mnoho webových aplikací.

Pozor! Nejsem právník, tak to berte s rezervou, ale kromě toho, že dostanete zdrojové kódy, měli byste mít i smluvně ošetřeno, že s nimi můžete nakládat podle potřeb. Měli byste mít rozhodně právo je upravovat, zveřejňovat, a podobně, a pravděpodobně i prodat někomu jinému. Toto je ale opravdu spíše otázka na právníka.

Proč vlastně zdrojové kódy tak moc potřebujete? Důvod je jednoduchý -- bez zdrojových kódů nemůže na aplikaci pracovat žádný jiný vývojář. Takže pokud váš původní přestane fungovat, nepohodnete se, příliš zdraží -- nemáte jak od něj odejít. Pokud vím, toto se stalo např. finanční správě, která je nucena dlouhé roky používat nevyhovující systém ADIS, protože [nemůže nechat na aplikaci pracovat jiného vývojáře](https://www.idnes.cz/ekonomika/domaci/financni-sprava-ibm-generalni-financni-reditelstvi-zakazka-konec.A190814_210434_ekonomika_chtl).

Rozumný vývojář má zdrojové kódy uložené v tzv. repozitáři na některé z veřejných služeb ([GitHub](https://github.com), [GitLab](https://gitlab.com), [Bitbucket](http://bitbucket.com)) a neměl by mít problém s tím, aby vám k repozitáři dal přístup, ideálně správcovský. Zde možná u některých vývojářů narazíte na odpor kvůli strachu, že v repozitáři provedete nějaké změny, které aplikaci znefunkční. Nicméně pro účely získání přístupu ke kódu samozřejmě stačí i jen přístup ke čtení.

Repozitář má několik výhod:

* Je místo, kde jsou zdrojové kódy uloženy na serveru (jsou tak chráněny např. proti poruše disku),
* Udržuje historii veškerých verzí kódu a aplikace,
* Umožňuje spolupráci více lidí na projektu.

Nenechte se však ukolébat tím, že máte k repozitáři přístup, a jednou za čas si možná čistě pro jistotu zdrojové kódy stáhněte k sobě do počítače. Přístup k prepozitáři vám může být kdykoliv odebrán nebo může dojít k nějakému problému na straně poskytovatele služby.

Pokud vývojář repozitář nepoužívá, nechce udělit přístup, nebo je to příliš složité pro vás, můžete si nechat kódy klidně poslat v e-mailu. Ale pak je těžší udržovat si přehled o tom, jestli máte opravdu poslední verzi.

### Vždy chtít veškeré přístupové údaje

Stejně jako zdrojové kódy byste měli mít k dispozici i všechny přihlašovací údaje ke správcovským účtům např. hostingu, cloudového prostředí, do administrace aplikace a podobně. To je důležité v situaci, kdy za provoz platíte vy přímo majiteli infrastruktury (cloud, hosting) a vývojář pro vás jen zajišťuje správu. Pokud platíte za provoz přímo vašemu dodavateli, je pochopitelné, že přístupy k serveru, do cloudu nebo do hostingu mít nebudete, protože dodavatel aplikaci provozuje pod svými účty.

Hesla jsou důležitá opět v případě neshod s vývojářem, ale také ve chvíli havárií, kdy váš vývojář zrovna leží někde na pláži nebo leze po horách bez připojení k internetu. Pak se hodí, pokud můžete na opravu předat přístupy někomu jinému nebo to třeba zkusit opravit vlastními silami s vývojářem jako "přítelem na telefonu".

Přístupové údaje jsou často stejně tak kritické jak zdrojové kódy. Na jednu stranu přinejhorším prostě stávající servery opustíte a pomocí zdrojových kódů rozjedete aplikaci od začátku někde jinde. Jenže to taky znamená, že můžete přijít o veškerá data, která jsou na původních serverech. A data jsou často důležitější než samotná aplikace.

### Alespoň základní dokumentace

Součástí díla by měla být aspoň základní dokumentace. Není vždy nutné psát např. uživatelskou příručku nebo podrobný popis všech částí programu. Měly by se v ní nacházet následující informace:

* Základní architektura aplikace -- z jakých se skládá částí, kde části běží, jak spolu komunikují, kde se ukládají data,
* Použité technologie,
* Odkazy na zdrojové kódy,
* Přístupové údaje (v takovém případě dokumentace nesmí být veřejná),
* Postup úvodního zprovoznění aplikace a případné aktualizace.

### Zálohování proti technické chybě a proti lidské chybě

Jsou v zásadě dva způsoby, jak můžete přijít o data. Jeden je technická chyba nebo přírodní či jiná katastrofa. Rozbije se pevný disk, napájecí zdroj, nebo dokonce praskne trubka v datacentru a vytopí počítače. To v podstatě řeší umístění aplikace do cloudu nebo na hosting a není třeba na to nijak zvlášť myslet. Zajištění zálohování je zodpovědnost provozovatele. Vše je zálohované a takovéto nepředpokládané události nezpůsobí ztrátu dat. Zálohování v tomto případě technicky funguje tak, že aktuální data jsou neustále kopírována na záložní úložiště, které je ideálně umístěné i v geograficky odlišné lokalitě, aby nebezpečí nepředstavovala např. ani stoletá voda nebo tornádo.

![Povodeň](kelly-sikkema-_whs7FPfkwQ-unsplash.jpg)
*Photo by [Kelly Sikkema](https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/disaster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Zrádná je však lidská chyba, a to je riziko, na které mnozí zapomínají a nechrání se proti němu -- rozejdete se ve špatném se zaměstnancem nebo externím vývojářem a on Vám stihne v systému smazat data, než mu zrušíte přístupy. Stážista špatně pochopí, co má dělat, a přepíše nějaká data. V takové chvíli je Vám k ničemu, že máte aktuální data dostupná v osmi kopiích na různých místech světa, protože ve všech těch kopiích je aktuální stav, tedy ten poškozený. Proti těmto chybám je tedy třeba se bránit odlišně, a to pravidelným vytvářením tzv. off-line záloh (každý den, každý týden), které někde leží a čekají na svoji chvíli a po nějaké době se automaticky mažou.

Ne každý systém takové zálohy potřebuje, ale ve chvíli, kdy aplikace pracuje s nějakými cennými unikátními daty, je toto zálohování třeba zprovoznit. Mimo jiné vás taky takovéto zálohy alespoň částečně chrání před situací, kdy něco zanedbá váš provozovatel infrastruktury a ukáže se, že jeho zálohování nakonec nebylo funkční. Pokud chcete mít opravdu maximální jistotu, že zálohy budete mít k dispozici, ukládejte je mimo infrastrukturu, na které vám běží aplikace. Stahujte zálohy do svého počítače (nebo ideálně na síťové úložiště -- NAS). Můžete je ukládat i do jiného cloudu, ale tady pozor -- poskytovatelé služeb občas nakupují navzájem od sebe. Nedávno se například ukázalo, že iCloud (úložiště Applu) běží na infrastruktuře Amazonu.

## Závěrem

Je toho hodně, že? Softwaroví vývojáři jsou zde od toho, aby vám pomohli se tímto bludištěm variant a možností co nejrychleji proplést k funkční aplikaci, která vám bude dobře a dlouho sloužit. Neváhejte se tedy na některého obrátit. Podívejte i na [moji nabídku služeb](/).

Hodně zdaru!
