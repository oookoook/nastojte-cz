<template>
    <div class="container text-justify" id="article">
        <div v-html="articleHtml">Nic tu není...</div>
    </div>
</template>

<script>
    import VueResource from 'vue-resource'
    import articlesList from './articles/list'
    import MarkdownIt from 'markdown-it'

    export default {
        name: 'Article',
        props: [],
        components: {
            VueResource
        },
        data: function () {
            return {
                article: null,
                 md: new MarkdownIt()
            }
        },
        computed: {
            articleHtml() {
                return this.article ? this.md.render(this.article) : null;
            },
            /*
            article() {
                var id = this.$route.params.article;
                var record = articlesList[id];
                // adding markdown references to images
                return record.content + '\n\n' + record.images.map(i => `[${i.key}]: ${i.img}`).join('\n\n');
            }
            */   
        },
        methods: {
           load() {
               var id = this.$route.params.article;
                var record = articlesList[id];
                // adding markdown references to images
                this.$http.get(record.content).then((response) => {
                this.article = response.body + '\n\n' + record.images.map(i => `[${i.key}]: ${i.img}`).join('\n\n');
                //console.log(this.article);
                });
           } 
        },
        watch: {
            $route(to, from) {
                this.load();
            }
        },
        timers: {
        },
        created() {
            this.load();
        },
        mounted() {
         }
    }
</script>
<style>
    #article img {
        width: 100%;
    }
    #article blockquote {
        font-size: 1.2em;
        font-style: italic;
    }
</style>