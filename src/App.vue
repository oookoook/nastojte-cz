<template>
  <div id="app">
    <Menu :title="title" :ico="icon">
      <li class="nav-item dropdown mx-2">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarAppsLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Aplikace</a>
        <div class="dropdown-menu" aria-labelledby="navbarAppsLink">
          <a
            class="dropdown-item"
            href="https://schranky.nastojte.cz"
            target="blank"
          >Mapa poštovních schránek</a>
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
      <li class="nav-item dropdown mx-2">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarAuthorMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >O autorovi</a>
        <div class="dropdown-menu" aria-labelledby="navbarAuthorMenuLink">
          <router-link class="dropdown-item" to="/">Kdo jsem</router-link>
          <router-link class="dropdown-item" to="/#what">Co nabízím</router-link>
          <router-link class="dropdown-item" to="/#tools">Co umím</router-link>
          <router-link class="dropdown-item" to="/#contact">Jak mě kontaktovat</router-link>
          <router-link class="dropdown-item" to="/#pricing">Co za to</router-link>
          <router-link class="dropdown-item" to="/#refs">Reference</router-link>
        </div>
      </li>
    </Menu>
    <router-view></router-view>
    <footer class="py-3 mt-5 bg-dark">
      <div class="container text-center">
        <span class="text-muted">Adam Kučera, 2019</span>
      </div>
    </footer>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import articlesList from "./articles/list"
export default {
  name: "nastojteApp",
  components: {
    Menu
  },
  data: function() {
    return {
      title: "Nastojte.cz",
      icon: require("../assets/favicon-dark.png")
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

#article img {
        width: 100px;
    }
    #article blockquote {
        font-size: 5em;
    }
</style>