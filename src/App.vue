<template>
  <div id="app">
    <page-menu :title="title" :ico="icon">
      <li class="nav-item dropdown mx-2">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarAuthorMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >O mně</a>
        <div class="dropdown-menu" aria-labelledby="navbarAuthorMenuLink">
          <router-link class="dropdown-item" to="/"><b>Kdo jsem</b></router-link>
          <router-link class="dropdown-item" to="/#why"><b>Výhody</b> • Proč si vybrat mě</router-link>
          <router-link class="dropdown-item" to="/#what"><b>Služby</b> • Co nabízím</router-link>
          <router-link class="dropdown-item" to="/#tools"><b>Schopnosti</b> • Co umím</router-link>
          <router-link class="dropdown-item" to="/#contact"><b>Kontakt</b> • Jak mě oslovit</router-link>
          <router-link class="dropdown-item" to="/#pricing"><b>Ceník</b> • Co za to</router-link>
          <router-link class="dropdown-item" to="/#refs"><b>Reference</b> • Co už mám za sebou</router-link>
        </div>
      </li>
      <li class="nav-item dropdown mx-2">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarAppsLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Projekty</a>
        <div class="dropdown-menu" aria-labelledby="navbarAppsLink">
          <a
            class="dropdown-item"
            href="https://schranky.nastojte.cz"
            target="blank"
          >Mapa poštovních schránek</a>
          <a
            class="dropdown-item"
            href="https://spidertraits.sci.muni.cz"
            target="blank"
          >World Spider Trait Database</a>
        </div>
      </li>
      <li class="nav-item dropdown mx-2">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarArticlesLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Články</a>
        <div class="dropdown-menu" aria-labelledby="navbarArticlesLink">
          <router-link v-for="a in articles" :key="a.key"
            class="dropdown-item"
            :to="`/articles/${a.key}`"
          >{{ a.title }}</router-link>
          <a
            class="dropdown-item"
            href="https://medium.com/@akucera/%C3%BAvod-o-%C4%8Dem-to-bude-e57c8b397ea0"
            target="blank"
          >Produktivita na volné noze</a>
          <a
            class="dropdown-item"
            href="https://www.tzb-info.cz/facility-management/11078-bms-na-masarykove-univerzite"
            target="blank"
          >BMS na Masarykově univerzitě</a>
          <a
            class="dropdown-item"
            href="https://www.tzb-info.cz/fm-sluzby/11421-zajisteni-spolehlivosti-bms"
            target="blank"
          >Zajištění spolehlivosti BMS</a>
          <a
            class="dropdown-item"
            href="https://doi.org/10.1016/j.aei.2018.01.002"
            target="blank"
          >Semantic BMS</a>
          
        </div>
      </li>
      <li class="nav-item mx-2">
        <router-link class="nav-link" to="/vonnegut">Proč Nastojte?</router-link>
      </li>
      
    </page-menu>
    <router-view></router-view>
    <!--
    <footer class="py-3 mt-5 bg-nastojte">
      <div class="container text-center">
        <span class="text-white">Adam Kučera, 2020</span>
      </div>
    </footer>
    -->
    <page-footer :email="'adam@nastojte.cz'"  :title="title" :ico="icon"/>
  </div>
</template>

<script>
import PageMenu from "./Menu.vue";
import PageFooter from "./Footer.vue"
import articlesList from "./articles-md/list"
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