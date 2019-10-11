<template>
    <div class="container text-justify" id="article">
        <vue-markdown :source="article">Nic tu není...</vue-markdown>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    import VueResource from 'vue-resource'
    import articlesList from './articles/list'

    export default {
        name: 'Article',
        props: [],
        components: {
            VueMarkdown,
            VueResource
        },
        data: function () {
            return {
                article: null
            }
        },
        computed: {
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
                console.log(this.article);
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