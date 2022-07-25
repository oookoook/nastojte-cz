<template>
    <b-container class="m-0 p-0">
    <b-carousel
        dark
      id="carousel"
      v-model="slide"
      controls
      indicators
      :interval="7000"
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide v-for="(r,i) in reasons" :key="`r${i}`" >
      <template #img>
          <b-img 
          :src="getImage(r.srcset, r.image)" 
          :srcset="getSrcSet(r.srcset, r.image)" 
          sizes="(max-width: 320px) 320px, (max-width: 320px) 480px, (max-width: 640px) 640px, (max-width: 800px) 800px, 1024px"
          width="1024" height="480" class="img-fluid w-100 d-block" alt="illustration image" />
      </template>
      <div :style="{ backdropFilter: 'blur(4px)', borderRadius: '35px', color: r.dark ? '#50023B' : '#FFD447', textShadow: `2px 2px 2px ${r.dark ? '#FFD447': '#50023b'}` }">
      <h3>{{ r.title}}</h3>
      <p class="d-none d-md-block"><span>{{r.text}}</span></p>
      <!-- <div :style="{ position: absolute, bottom: 40, right: 40 }">Fotka od <a :href="r.author.link">{{r.author.name}}</a></div> -->
        </div>
    </b-carousel-slide>
    </b-carousel>
    <ul class="list-unstyled d-block d-md-none">
        <code-li v-for="(r,i) in reasons" :key="`r${i}`"><b>{{ r.title }}</b> &ndash; {{r.text}}</code-li>
    </ul>
    </b-container>
</template>
<script>
import CodeLi from './CodeLi.vue'
import CarouselImages from './CarouselImages.vue'
import Srcset from './Srcset.vue'
export default {
    name: 'ReasonsCarousel',
    components: {CodeLi},
    mixins:[CarouselImages, Srcset],
    props: { authors: Array},
    data() {
        return {
            showDetail: false,
            slide: 0,
            sliding: null,
        }
    },
    methods: {
            toggleOverlay(isHovered) {
                this.showDetail = isHovered;
            },
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            },
            
    },
    created() {
        this.$emit('update:authors', this.reasons.map(r => r.author));
    }
}
</script>