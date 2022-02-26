<template>
    <b-container class="text-justify" id="article">
        <div v-html="articleHtml">Nic tu není...</div>
    </b-container>
</template>

<script>
    import VueResource from 'vue-resource'
    import articlesList from './articles-md/list'
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
                 md: this.initParser()
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
                console.debug('article', id);
                console.debug('articleList', articlesList);
                var record = articlesList[id];
                // adding markdown references to images
                this.$http.get(`${record.content}`).then((response) => {
                this.article = response.body + '\n\n' + record.images.map(i => `[${i.key}]: /${i.img}`).join('\n\n');
                //console.log(this.article);
                });
           },
           initParser() {
                let md = new MarkdownIt({html: true, typographer: true, quotes: '„“‚‘',})
        
                //https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer
                // Remember old renderer, if overridden, or proxy to default renderer
                var defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
                    return self.renderToken(tokens, idx, options);
                };

                md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
                // If you are sure other plugins can't add `target` - drop check below
                    var aIndex = tokens[idx].attrIndex('target');

                    if (aIndex < 0) {
                        tokens[idx].attrPush(['target', '_blank']); // add new attribute
                    } else {
                        tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
                    }

                    // pass token to default renderer.
                    return defaultRender(tokens, idx, options, env, self);
                };
                return md;
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
            console.debug('article created');
            this.load();
        },
        mounted() {
            /*
            console.debug('article mounted');
            this.load();
            */
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