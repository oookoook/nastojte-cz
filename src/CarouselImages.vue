<script>
//import he from "he";

import experience from '../assets/reasons/experience1.jpg?srcset&format=webp'
import users from '../assets/reasons/users1.jpg?srcset&format=webp'
import steering from '../assets/reasons/steering1.jpg?srcset&format=webp'
import wheel from '../assets/reasons/wheel1.jpg?srcset&format=webp'
import learning from '../assets/reasons/learning1.jpg?srcset&format=webp'
import reject from '../assets/reasons/reject1.jpg?srcset&format=webp'
import hammer from '../assets/reasons/hammer1.jpg?srcset&format=webp'
import problems from '../assets/reasons/problems1.jpg?srcset&format=webp'
import practices from '../assets/reasons/practices1.jpg?srcset&format=webp'
import goodbye from '../assets/reasons/goodbye1.jpg?srcset&format=webp'

export default {
    name: 'CarouselImagesMixin',
    data() {
        return {
            reasons: [
                    { 
                        image: require('../assets/reasons/experience1.jpg'), srcset: experience, author: {name: 'Mark Potterton', link: 'https://unsplash.com/@markpot123' }, 
                        title: 'Mám přehled a zkušenosti', dark: true, text: 'Znám všechny aspekty vývoje: od analýzy přes návrh včetně datového modelu přes implementaci až po dlouhodobý provoz systémů.'},
                    {
                        image: require('../assets/reasons/users1.jpg'), srcset: users, author: {name: 'Kaleidico', link: 'https://unsplash.com/@kaleidico' },
                        title: 'Naslouchám uživatelům', text: 'Aplikaci, která je pro uživatele nepřehledná nebo nepohodlná, nebudou používat. Požadavky uživatelů a maximální užitek pro ně je pro mě stejně důležitý jako kvalita návrhu a samotného kódu.'},
                    {
                        image: require('../assets/reasons/steering1.jpg'), srcset: steering, author: {name: 'OC Gonzalez', link: 'https://unsplash.com/@ocvisual' },
                        title: 'Dodávám kompletní řešení', dark: false, text: 'Chápu, že dodávka automaticky musí obsahovat i věci, které nejsou explicitně zmíněny v zadání. Můj bývalý šéf říkal, že když si jde koupit auto, také nemusí říkat, že má mít volant.'},
                    { 
                        image: require('../assets/reasons/wheel1.jpg'), srcset: wheel, author: {name: 'Colter Olmstead', link: 'https://unsplash.com/@colterolmstead' },
                        title: 'Nevynalézám kolo', text: 'Věřím, že je důležité do nejvyšší možné míry používat již existující projekty. Tím šetřím vaše peníze.'},
                    {
                        image: require('../assets/reasons/learning1.jpg'), srcset: learning, author: {name: 'Brett Jordan', link: 'https://unsplash.com/@brett_jordan' },
                        title: 'Neustále se učím', text: 'Uvědomuji si, že zdaleka nevím všechno, a neustále se učím a posouvám dál - ať už úplně nové technologie, nebo vhodné best practices.'},                   
                    {
                        image: require('../assets/reasons/reject1.jpg'), srcset: reject, author: {name: 'Jon Tyson', link: 'https://unsplash.com/@jontyson' },
                        title: 'Umím říct ne', text: 'Umím odmítnout projekt. Spolupráce musí být výhodná pro obě strany a ne vždy je pro klienta zakázkový vývoj to nejlepší řešení. Když není nutný, směruji klienty k vhodnému krabicovému řešení, které bývá levnější. Také se nepouštím do projektů, na které nemám odbornost.'},
                    { 
                        image: require('../assets/reasons/hammer1.jpg'), srcset: hammer, author: {name: 'Jozsef Hocza', link: 'https://unsplash.com/@hocza' },
                        title: 'Nemám jen jedno kladívko', dark: true, text: 'Znám široké spektrum dostupných platforem, jazyků a nástrojů. Cílem je nalézt nástroj, který je nejvhodnější na řešení daného problému, ne snažit se za každou cenu přizpůsobit problém známé technologii.'},
                    {
                        image: require('../assets/reasons/problems1.jpg'), srcset: problems, author: {name: 'Sebastian Herrmann', link: 'https://unsplash.com/@officestock' },
                        title: 'Nevytvářím nové problémy', text: 'Snažím se řešit existující problémy, ne vytvářet nové. Jsem přizpůsobivý. Pokud je to aspoň trochu možné, respektuji váš výběr technologií. Pokud chcete napsat plugin do vašeho hepldesk software, nebudu vás převědčovat, že ho máte změnit, protože se v něm pluginy píší příliš složitě.'},
                    { 
                        image: require('../assets/reasons/practices1.jpg'), srcset: practices, author: {name: 'Ryan Wallace', link: 'https://unsplash.com/@accrualbowtie' },
                        title: 'Znám best practices', text: 'Vždy věnuji čas tomu, abych pochopil a přizpůsobil se filozofii produktů, se kterými pracuji. Nepochopení základních konceptů je často zdrojem nespolehlivých, nevýkonných a neflexibilních řešení.'},
                    { 
                        image: require('../assets/reasons/goodbye1.jpg'), srcset: goodbye, author: {name: 'Mantas Hesthaven', link: 'https://unsplash.com/@mantashesthaven' },
                        title: 'Nezpůsobuji závislost', text: 'Pracuji tak, abyste mě později nepotřebovali. Vždy předám zdrojové kódy a přístupové údaje. Kód komentuji a píši srozumitelně. Práci tedy může převzít kdokoliv jiný.'},
                    //{ text: 'Znám nejenom programovací jazyky, ale i infrastrukturu, ve které kód běží: běhová prostředí (JRE, CLR), cloudová prostředí (AWS), aplikační servery (Tomcat, IIS, HTTPD), databáze (T-SQL, MySQL, DynamoDB), sítě, operační systémy (Windows, Linux).'},

                ],
        }
    },
    methods: {
    }
    
}
</script>