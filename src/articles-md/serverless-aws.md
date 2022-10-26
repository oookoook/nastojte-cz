# Serverless aplikace v Amazon Web Services

> Napsáno 3. 5. 2019, aktualizováno 11. 10. 2019

::: note

Představme si následující scénář: Chceme rozjet malý projekt, který nemá být aspoň ze začátku nijak výdělečný, návštěvnost aspoň ze začátku neočekáváme nijak velkou, a nám se nechce platit měsíční poplatky. Pokud navíc nepoužíváme PHP, ale např. Node.js, v podstatě jsme odsouzeni k vlastnímu VPS, který už je relativně nákladný i při slabším výkonu. Pokud však aplikaci budeme hostovat v cloudovém prostředí, můžeme zvolit jiný přístup.

:::

Tradiční způsob provozování webových aplikací spočívá v používání webhostingu případně VPS, kde běží webový server vyřizující příchozí požadavky. Tento přístup však nemusí být vhodný pro všechny druhy projektů &ndash; jedná se např. o hobby projekty nebo začínající služby, kde jsou problémem vyšší počáteční náklady a horší škálování v závislosti na vytíženosti služby. Řešení se nabízí v podobě tzv. serverless aplikací, které nevyžadují dedikovaný (a stále běžící) web server. Tento článek představuje architekturu serverless aplikace v prostředí [Amazon Web Services](https://aws.amazon.com/) (AWS). V Azure, Google Cloud Platform nebo Herouku to bude nejspíše obdobné.

Jako use case použiji službu [Mapa poštovních schránek](https://schranky.nastojte.cz) ([zdrojový kód](https://github.com/oookoook/postboxes-frontend)), 0kterou provozuji právě níže popsaným způsobem. Aplikace je napsaná kompletně v Javascriptu, na frontendu využívá Vue.js a backend je napsaný v Express.js, jako databázi využívá DynamoDB. K výběru technologií v rámci AWS se ještě dostaneme.

Nejdříve rozebereme komponenty, ze kterých se aplikace skládá, spolu s požadavky, které zajistí, že aplikaci lze provozovat v serverless režimu. Architektura aplikace je vidět na následujícím schématu:

![Schéma aplikace](serverless-aws-app-schema.png)

## Frontend

Frontendem je myšleno uživatelské rozhraní webové aplikace. Frontend musíme být funkční, i když bude uživatelům poskytovaný ze **statického souborového hostingu** (v AWS použijeme službu [S3](https://aws.amazon.com/s3/), ale jsou i jiné alternativy, např. [GitHub Pages](https://pages.github.com/) nebo [Netlify](https://www.netlify.com/)). To ve výsledku znamená, že frontend nejspíš bude Javascriptová Single-Page Application (SPA) vyvinutá pomocí nekterého z populárních frameworků (Angular, React, Vue).

Toto je myslím největší rozdíl z hlediska architektury aplikace, kdy v typickém MVC pracujeme s šablonou, do kterého controller synchronně vloží obsah z modelu a teprve poté je výsledná stránka odeslána klientovi. Při použití statického hostingu posíláme uživateli obsah souboru tak jak je, žádná data nejsme v tuto chvíli schopni dynamicky doplnit. Statická stránka je samozřejmě ve většině případů k ničemu. Veškerá komunikace s backendem však  probíhá asynchronně pomocí API - obvykle tedy pomocí REST nebo stále oblíbenějšího GraphQL.

Drobná poznámka: S3 bucket je třeba správně nakonfigurovat, aby umožňoval veřejné čtení, a zapnout pro něj funkci *Static website hosting*.

## Backend

Po backendu chceme, aby tvořil prostředníka mezi frontendem a databází (úplně teď zanedbáme řešení postavená na GraphQL). Bude tedy většinou jednat o RESTful API, které bude reagovat na požadavky z frontendu a bude získávat data z databáze, nebo je tam naopak ukládat. Je zřejmé, že na backendu se už nevyhneme provádění kódu. Nechceme ale, abychom pro backend museli provozovat drahý server, zvlášť kdy čekáme jednotky uživatelů za den. Zde proto využijeme služby [AWS Lambda](https://aws.amazon.com/lambda/), která umožňuje vytvořit si funkce, které jsou spouštěné na povel teprve ve chvíli, kdy přijde požadavek od frontendu. Platíme pak pouze za skutečný čas vykonávání našeho kódu, ne za čas, kdy server nečinně čeká, až přijde požadavek. AWS Lambda je navíc navržena tak, aby výborně škálovala se zvyšující se zátěží.

AWS Lambda podporuje širokou škálu jazyků ([v současné době Java, Go, PowerShell, Node.js, C#, Python, Ruby](https://aws.amazon.com/lambda/faqs/)), ovšem má svá specifika. Jednak je třeba si uvědomit, že Lambda není plnohodnotný webserver (přesněji – Lambda **vůbec** není webserver, RESTful API z Lambda funkce udělá jiná služba v AWS, a to [API Gateway](https://aws.amazon.com/api-gateway/)) a nemůže proto například odesílat binární data (obrázky, fonty). Ty ale máme samozřejmě všechny na frontendu, backend bude opravdu jen RESTful API, proto nám to nevadí. Další omezení je, že např. pro Node.js můžeme používat jen **nativní** Javascriptové balíky. Knihovny, které spoléhají na nějaké kompilované binární závislosti v systému, nebudou fungovat. To by teoreticky mohl být problém pro některé databázové klienty, ale např. pro MySQL [nativní klient](https://github.com/mysqljs/mysql) existuje a pro DynamoDB poskytuje Javascript SDK přímo Amazon. Dalším problémem je, že maximální timeout Lambda funkce je 15 minut. To může být problém pro některé dávkové úlohy, typicky importy velkého množství dat.

### Dávkové úlohy

U projektu Mapy poštovních schránek jsem narazil na omezení Lambda funkcí, kdy po 15 minutách běhu byla funkce ukončena. Lambda totiž ani není určena ke spouštění dávkových úloh. Moje služba ale každý měsíc potřebuje stáhnout a aktualizovat seznam všech poštovních schránek, což je operace, která trvá zhruba 20 minut. Pro tyto úlohy je vhodnější použít kontejnerovou službu spolu se spuštěním na základě časového plánu. V AWS se tato služba jmenuje [Elastic Container Service](https://aws.amazon.com/ecs/) (ECS).

Kontejnerovou službou je myšlena služba, které nahrajeme náš kontejner ([Docker](https://docker.com) image) a služba zajistí jeho spuštění bez toho, abychom se museli starat o běhové prostředí (VPS nebo dokonce fyzický server). Takto můžeme pohodlně spouštět naše dávkové importy dat s minimálními náklady, protože opět platíme jen za těch 20 minut běhu jednou za měsíc. V případě ECS zároveň budeme chtít využít integraci se službou [Fargate](https://aws.amazon.com/fargate/), abychom nemuseli spravovat vlastní VPS.

### Databáze

Pro Mapu poštovních schránek používám noSQL databázi [AWS DynamoDB](https://aws.amazon.com/dynamodb), která je opět _fully managed_, to znamená, že se opět nemusíme starat o žádný databázový server. V administračním rozhraní AWS pouze vytvoříme naše tabulky a pak se k nim připojujeme pomocí SDK. Platí se opět za požadavek a za diskovou kapacitu, ale ne za garantovaný výpočetní výkon, který by většinu času běžel naprázdno.

Pokud požadujeme klasickou relační databázi, je situace složitější. Amazon nabízí své řešení [Aurora](https://aws.amazon.com/aurora), které je kompatibilní s MySQL. Aurora je dostupná i v tzv. serverless režimu, kdy se databáze uspává po určité době neaktivity. Platíme pak opět jen za dobu, kdy databáze běží. To vypadá skvěle, je však třeba říct, že start databáze ze spánku trvá 30 sekund až minutu, což je samozřejmě pro webovou službu pro veřejnost nepoužitelné.

Aurora Serverless je tak spíše vhodná pro interní webové aplikace, kdy pracovník potřebuje např. jednou týdně zadávat větší množství dat. V takovém případě na začátku práce chvíli počká a firma platí jenom pár hodin provozu databáze místo celoměsíčního běhu serveru.

### DNS, HTTPS, API a další drobnosti

Pro úspěšný běh aplikace jsou kromě výše zmíněných základních komponent třeba i další doplňkové služby z portfolia AWS. Předně využívám [Route 53](https://aws.amazon.com/route53) pro správu svých DNS záznamů to však není nutné.

Co však už nutné je, je umožnit uživatelům připojit se ke službě pomocí HTTPS. Problém je v tom, že S3 neumožňuje použít vlastní HTTPS certifikát (pravděpodobně chceme mít obsah na vlastní doméně). Proto musíme použít službu [CloudFront](https://aws.amazon.com/cloudfront/), která použití vlastní HTTPS certifikátů umožňuje. Cloudfront slouží jako CDN, jako zdroj nadefinujeme náš S3 bucket a přiřadíme k němu HTTPS certifikát, který vygenerujeme ve službě [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/).

Poslední věc, kterou musíme zajistit, je vytvoření tzv. [API Gateway](https://aws.amazon.com/api-gateway/) pro Lambda funkci. To zajistí vytvoření HTTP endpointu, který bude jako reakci na požadavky spouštět naši backend logiku. Vytvoření API Gateway je pro začátek nejlepší přenechat nějakému specializovanému nástroji. Pro Node.js můžu doporučit projekt [Claudia.js](https://claudiajs.com/). Přímo od Amazonu je k dispozici sada nástrojů [AWS Amplify](https://aws.amazon.com/amplify/), ale to je už poněkud komplexnější projekt.

### Náklady na provoz

V dubnu 2019 krátce po zprovoznění Mapu poštovních schránek navštívilo průměrně kolem deseti uživatelů denně, celkový počet požadavků na čtení databáze (tzv. read request units, což nemusí odpovídat počtu požadavků na API) je 1,5 milionu. Náklady na provoz za celý měsíc dosáhly výše 0,8 USD bez DPH, z toho polovina nákladů připadá na dávkovou aktualizaci dat. Využívání ostatních služeb (S3, CloudFront, API Gateway) se vešlo do objemů, které AWS poskytuje zdarma. To považuji za dostatečně nízkou částku, zvláště vzhledem k výkonu a škálování, které takovéto řešení nabízí v porovnání s nejlevnějšími VPS. Otázkou samozřejmě zůstává, jak cena vzroste, když služba začne být využívaná.

V červenci a srpnu 2019 už se Mapa poštovních schránek dostala do povědomí uživatelů, zároveň byla hlavní séezóna využití poštovních schránek &ndash; posílání pohledů z letních dovolených, takže návštěvnost byla půměrně zhruba 120 uživatelů denně. Počet požadavků na databázi se zvýšil na 17 milionů. Cena za provoz dosáhla zhruba 5 USD za měsíc, a to stále při optimalizaci účtování pro malé projekty, tzn. "pay per request" (platba za požadavek).

Zde je třeba zmínit, že způsob dotazování do NoSQL databáze pro Mapu poštovních schránek je vlastně velice neefektivní - vždy skenuje celou tabulku kvůli využití porvnávacích operátorů a vlastně tak vůbec nevyužívá hlavní výhody DynamDB, což jsou extrémně rychlé přístupy s využitím hashovací tabulky (pro takové přístupy je ale samozřejmě nutné používat logicky jen operátor ekvivalence). Toto je úkol do budoucna - zefektivnit vyhledávání tak, aby jednak bylo rychlejší (i když rychlost není zásadní problém, schránek není v ČR zase tolik) a jednak aby bylo levnější.
