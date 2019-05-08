<template>
  <div class="container" id="content">
        <h1 class="display-4">Proč Nastojte.cz?</h1>
        
        <div class="d-flex flex-column flex-md-row mb-3">
            <div>
            Říkal jsem si, že když už jsem si vybral tuto doménu, měl bych vysvětlit, kde jsem k názvu přišel. Vězte, že jsem toto slovo potkal v knížkách 
        amerického spisovatele <a href="https://cs.wikipedia.org/wiki/Kurt_Vonnegut" target="_blank">Kurta Vonneguta</a>. Vpravo (nebo dole, pokud koukáte z mobilu) 
        můžete vidět jeho autoportrét.
        Do češtiny jeho dílo překládal <a href="https://cs.wikipedia.org/wiki/Jaroslav_Ko%C5%99%C3%A1n" target="_blank">Jaroslav Kořán</a> (a později George Popel).
        Jeho knížky rozhodně doporučuji k přečtení, ale ve které přesně bylo to předmětné <em>Nastojte</em>, to už nevím. Nejspíš <em>Kolíbka</em> nebo <em>Jatka č. 5</em>. 
                <div class="media mt-4">
                    <img src="../assets/asshole.png" id="logo" class="align-self-center mr-5" alt="Logo stránek"/>
                    <div class="media-body">
                        A jestli vás zajímá, co je to za hvězdičku tady vlevo, tak to je taky od něj. Je to jeho vlastnoruční ilustrace 
                        z knihy <em>Snídaně šampionů</em> &ndash; obrázek řiti.
                    </div>
                </div>
            </div>
            <p class="mb-3 mb-md-0 mr-md-3 w-75">
            <img src="../assets/kurt-vonnegut-signature-self-portrait.jpg" class="img-fluid" alt="Kurt Vonnegut - autoportrét"/>
            </p>
        </div>
        <p>Ale co to slovo vlastně znamená? Mám za to, že <em>Nastojte!</em> znamená něco ve smyslu <em>slyšte</em> nebo <em>pohleďte.</em> Myslím, že obecně je to vnímáno takhle.
        To mi potvrzuje i příspěvek na jednom fóru:</p>
        <blockquote class="blockquote jumbotron">
            <p class="mb-0">Znamená to "pohleďte/poslyšte (a divte se se mnou)!" - výraz, kterým se uvádí něco šokujícího, překvapivého, kterým se upoutává pozornost.</p>
            <footer class="blockquote-footer">Neznámá Jana337 na <a href="https://forum.wordreference.com/threads/nastojte.565006/" target="_blank"><cite title="WordReference.com">WordReference.com</cite></a></footer>
        </blockquote>
        <p>Nicméně jiné zdroje uvádí trochu jiný význam:</p>
        <blockquote class="blockquote jumbotron">
            <p class="mb-0">Nastojte aneb pomagajte volávali naši předkové a vůbec Slované, 
                dopouštěl-li se někdo proti nim trestného činu, jmenovitě násilí anebo v noční době krádeže. 
                Pokřik tento čili úp (úpění, úpěti na súsědy, přiúpěti súsědy, srv. Řád práva zemského), vapaj 
                (= úp, sr. zákon Vinodolský; vapiti = úpěti, ve statutě Polickém), klič (v zák. Vinodolském; klicati, tamtéž), 
                okrzyk (clamor, v právu polském) měl za účel svolati na pomoc a ke svědectví sousedy. Sousedé měli původně 
                povinnost úpění uposlechnouti a, komu se ubližovalo, přispěti. V zemích českých trvala ta povinnost pouze 
                do konce XII. stol. Bylať zrušena § 25. práv Konrádových, dle něhož bylo dobrou vůlí každého jednotlivce, 
                chtěl-li pokřiku »nastojte« uposlechnouti.</p>
                <footer class="blockquote-footer">Heslo v <a href="https://cs.wikisource.org/wiki/Ott%C5%AFv_slovn%C3%ADk_nau%C4%8Dn%C3%BD/Nastojte" target="_blank"><cite title="Ottův slovník naučný">Ottově slovníku naučném</cite></a></footer>
        </blockquote>
        <p><a href="https://vokabular.ujc.cas.cz/hledani.aspx?hw=nastojte">Vokabulář Ústavu pro jazyk český Akademie věd České republiky</a> nabízí hned několik významů,
        které toto slovo má, včechny zhruba ve smyslu <em>pomoc!</em>, <em>běda!</em>, <em>ach!</em>.</p>
        <p>Přiznám se, že ty výklady ve smyslu <em>běda</em> mě překvapily. Tak to samozřejmě myšleno není.</p>
        <p class="lead">Nastojte.cz si proto překládejte ve smyslu Hleďte.cz.</p>
        <p>Jestli chcete, můžete se teď podívat na to, <router-link to="/">čím se živím</router-link>.</p>
  </div>
</template>

<script>
    
    export default {
        name: 'Menu',
        props: [],
        components: {
        },
        data: function () {
            return {
                
            }
        },
        computed: {
                
        },
        methods: {
            
        },
        timers: {
        },
        created() {

        },
        mounted() {
         }
    }
</script>
<style scoped>
.media img {
    width: 15rem;
}

.media img#logo {
    width: 32px;
}
</style>