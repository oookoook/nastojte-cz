<template>
  <div class="table-responsive">
    <table class="table">
      <thead class="thead-dark bg-nastojte">
        <tr>
          <th scope="col" class="bg-nastojte">Kategorie</th>
          <th scope="col" class="bg-nastojte">Mám rád</th>
          <th scope="col" class="bg-nastojte">Znám</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in tools" :key="c.category">
          <th scope="row">{{ c.category }}</th>
          <td><tech-icon v-for="(t, i) in c.like" :key="i" :tech="t" /></td>
          <td><tech-icon v-for="(t, i) in c.know" :key="i" :tech="t" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

import TechIcon from './TechIcon.vue';

export default {
  name: "TechTable",
  components: { TechIcon },
  data() {
    return {
        tools: [
                    { category: 'Jazyky',
                        like: [ 'Javascript', 'Java' ], know: [{name: 'C#', cname: 'c-sharp'}, 'C', 'Python'] },
                    { category: 'Frontend',
                        like: [ 'Vuetify.js', 'Bootstrap', {name: 'Vue.js', cname: 'vue' } ], know: [ {name: 'AngularJS', icon: 'angularjs.png' }, 'jQuery', 'Javascript', { name: '.NET Framework', cname: 'dotnet'} ] },
                    { category: 'Backend',
                        like: [ 'Node.js', 'Express', 'Spring' ], know: [ 'Java', { name: '.NET Framework', cname: 'dotnet'} ] },
                    { category: 'Skriptování',
                        like: [ 'Node.js', 'PowerShell'], know: [ 'Python', 'Bash' ] },
                    { category: 'Databáze',
                        like: [{ name: 'Microsoft SQL Server', cname: 'mssql' }, 'AWS DynamoDB' ], know: [ 'SOLR', 'MySQL' ] },
                    { category: 'Komunikace a rozhraní',
                        like: [ 'REST', 'GraphQL' ], know: [ { name: 'WCF', text: true, color: '#f00' }, { name: 'SOAP', text: true } ] },
                    { category: 'OS, servery, platformy',
                        like: [ {name: 'Windows', cname: 'microsoft-windows' }, 'AWS' ], know: [ {name: 'Linux', cname: 'linux-tux'}, 'OpenStack', 'Tomcat', 'Docker' ] },
                    { category: 'Vývojová prostředí',
                         like: [ 'Eclipse', { name: 'Visual Studio Code', cname: 'vscode' }, ], know: [ 'NetBeans', ] },
                    { category: 'Správa kódu a závislostí',
                         like: [ 'Webpack', 'Maven', 'Git' ], know: [ 'Subversion' ] }
                ]
    };
  },
};
</script>