<template>
  <div id="app">
    <page-menu :title="title" :ico="icon">
      <!--
      <b-nav-item-dropdown text="O mně">
        <b-dropdown-item to="/"><b>Kdo jsem</b></b-dropdown-item>
        <b-dropdown-item to="/#why"><b>Mé zásady</b> • Proč si vybrat mě</b-dropdown-item>
        <b-dropdown-item to="/#what"><b>Služby</b> • Co nabízím</b-dropdown-item>
        <b-dropdown-item to="/#tools"><b>Schopnosti</b> • Co umím</b-dropdown-item>
        <b-dropdown-item to="/#contact"><b>Kontakt</b> • Jak mě oslovit</b-dropdown-item>
        <b-dropdown-item to="/#pricing"><b>Ceník</b> • Co za to</b-dropdown-item>
        <b-dropdown-item to="/#refs"><b>Reference</b> • Co už mám za sebou</b-dropdown-item>
      </b-nav-item-dropdown>
      -->
      <b-nav-item to="/">O mně</b-nav-item>
      <b-nav-item to="/#what">Služby</b-nav-item>
      <b-nav-item to="/#tools">Technologie</b-nav-item>
      <b-nav-item to="/#pricing">Ceník</b-nav-item>
      <b-nav-item to="/references">Reference</b-nav-item>
      <b-nav-item-dropdown text="Projekty">
        <b-dropdown-item href="https://schranky.nastojte.cz" target="_blank">Mapa poštovních schránek</b-dropdown-item>
        <b-dropdown-item href="https://spidertraits.sci.muni.cz" target="_blank">World Spider Trait Database</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown text="Články">
        <b-dropdown-item v-for="a in articles" :key="a.key"
            :to="`/articles/${a.key}`"
          >{{ a.title }}</b-dropdown-item>
        <b-dropdown-item href="https://medium.com/@akucera/%C3%BAvod-o-%C4%8Dem-to-bude-e57c8b397ea0" target="_blank">Produktivita na volné noze</b-dropdown-item>
        <b-dropdown-item href="https://www.tzb-info.cz/facility-management/11078-bms-na-masarykove-univerzite" target="_blank">BMS na Masarykově univerzitě</b-dropdown-item>
        <b-dropdown-item href="https://www.tzb-info.cz/fm-sluzby/11421-zajisteni-spolehlivosti-bms" target="_blank">Zajištění spolehlivosti BMS</b-dropdown-item>
        <b-dropdown-item href="https://doi.org/10.1016/j.aei.2018.01.002" target="_blank">Semantic BMS</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item to="/#contact">Kontakt</b-nav-item>
    </page-menu>
    <router-view></router-view>
    <page-footer :title="title" :ico="icon"/>
  </div>
</template>

<script>
import PageMenu from "./Menu.vue";
import PageFooter from "./Footer.vue";
import articlesList from "./articles-md/list";

export default {
  name: "nastojteApp",
  components: {
    PageMenu,
    PageFooter
  },
  data: function() {
    return {
      title: "Nastojte.cz",
      icon: require("../assets/favicon-purple.png")
    };
  },
  computed: {
    articles() {
      return Object.keys(articlesList).map(k => { return { key: k, title: articlesList[k].title }});
    }
  },
  methods: {},
  created() {}
};
</script>
<style scoped>
img.photo {
  width: 200px;
}


</style>