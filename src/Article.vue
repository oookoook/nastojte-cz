<template>
    <b-container class="text-justify" id="article">
        <div v-html="articleHtml">Nic tu není...</div>
    </b-container>
</template>

<script>
    //import VueResource from 'vue-resource'
    //import articlesList from './articles-md/list'
    import MarkdownIt from 'markdown-it'
    import * as MarkdownContainer from 'markdown-it-container'
    import MarkdownAnchor from 'markdown-it-anchor'
    //import Slugify from '@sindresorhus/slugify'
    export default {
        name: 'Article',
        props: [],
        components: {
            VueResource
        },
        data: function () {
            return {
                article: null,
                id: null,
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
                // make sure to get rid of the current loaded article
                this.article = null;
                this.id = this.$route.params.article;
                console.debug('article', this.id);
                //console.debug('articleList', articlesList);
                //var record = articlesList[id];
                // adding markdown references to images
                let articleurl = require(`./articles-md/${this.id}.md`);
                console.debug('md url', articleurl);
                /*
                this.$http.get(article).then((response) => {
                this.article = response.body; // obsolete + '\n\n' + record.images.map(i => `[${i.key}]: /${i.img}`).join('\n\n');
                //console.log(this.article);

                });
                */
                fetch(articleurl).then(response => response.text()).then(response => { /*console.debug('fetch response', response);*/ this.article = response});
           },
           initParser() {
                let md = new MarkdownIt({html: true, typographer: true, quotes: '„“‚‘',})
                    .use(MarkdownAnchor, { 
                        /*slugify: s => Slugify(s), */
                        permalink: MarkdownAnchor.permalink.ariaHidden({placement: 'after', space: true, class: 'header-anchor ml-1'}), 
                        level: 2,
                        // custom slugify compatible with github format (used by Markdown All vSCode extension)
                        slugify: s => s.replace(/\?|:/g, '').replace(/ /g,'-').toLowerCase()
                        })
                    .use(MarkdownContainer, 'note', {
                    
                    // copied from https://github.com/markdown-it/markdown-it-container/blob/adb3defde3a1c56015895b47ce4c6591b8b1e3a2/index.js
                    render(tokens, idx, _options, env, slf) {
                        // add a class to the opening tag
                        if (tokens[idx].nesting === 1) {
                            tokens[idx].attrJoin('class', 'alert alert-warning');
                        }
                        return slf.renderToken(tokens, idx, _options, env, slf);
                    }
                });
                //https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer
                // Remember old renderer, if overridden, or proxy to default renderer
                var defaultLinkRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
                    return self.renderToken(tokens, idx, options);
                };

                md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
                // If you are sure other plugins can't add `target` - drop check below
                    var aIndex = tokens[idx].attrIndex('target');
                    var hIndex = tokens[idx].attrIndex('href');
                    
                    // ignore TOC links
                    //console.debug(`TOC link?`, tokens[idx].attrs[hIndex][1][0], tokens[idx].attrs[hIndex][1]);
                    if(!['#', '/'].includes(tokens[idx].attrs[hIndex][1][0])) {
                        if (aIndex < 0) {
                            tokens[idx].attrPush(['target', '_blank']); // add new attribute
                        } else {
                            tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
                        }
                    } else {
                        // fix links from TOC
                        tokens[idx].attrs[hIndex][1] = decodeURI(tokens[idx].attrs[hIndex][1]);
                    }

                    // pass token to default renderer.
                    return defaultLinkRender(tokens, idx, options, env, self);
                };

                
                var defaultImgRender = md.renderer.rules.image;
                var getArticleId = () => {
                    return this.id;
                }
                md.renderer.rules.image = function (tokens, idx, options, env, self) {
                    var token = tokens[idx],
                    aIndex = token.attrIndex('src');
                    tokens[idx].attrs[aIndex][1] = require(`../assets/articles-md/${getArticleId()}/${token.attrs[aIndex][1]}`);
                    tokens[idx].attrPush(['class', '_blank']);
                    //console.debug(`Image renderer called, adjusting src to ${tokens[idx].attrs[aIndex][1]}`);

                    // pass token to default renderer.
                    return defaultImgRender(tokens, idx, options, env, self);
                };
                

                /*
                md.renderer.rules.blockquote_open = function (tokens, idx, options, env, self) {
                
                    tokens[idx].attrPush(['class', 'alert alert-warning']); // add new attribute
                    

                    // pass token to default renderer.
                    return defaultRender(tokens, idx, options, env, self);
                }
                */
                return md;
             } 
        },
        watch: {
            $route(to, from) {
                if(to.path == from.path) {
                    console.debug('This is only anchor navigation');
                    return;
                }
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
        max-width: 100%;
        display: flex;
        margin: auto;
    }
    #article blockquote {
        font-size: 1.2em;
        font-style: italic;
    }

    #article .header-anchor {
        color: #999;
        font-weight: 400;
        font-size: 0.8em;
        margin-top: auto;
        margin-bottom: auto;
    }
    #article .header-anchor:hover {
        color: #000;
        font-weight: 500;
        text-decoration: none;
    }

/*

NOT WORKING, DESTROYS SCROLLING TO ANCHOR
https://stackoverflow.com/questions/3997983/how-to-vertically-align-2-different-sizes-of-text
 
#article h2,h3,h4,h5,h6 {
        display: flex;
        align-items: center;
    }
*/


</style>