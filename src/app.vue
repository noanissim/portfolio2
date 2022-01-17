<template>
   <v-app>
      <v-main>
         <app-header @scrollToMe="handleScroll($event)"></app-header>
         <!-- <router-view /> -->
         <!-- <v-sheet
               v-if="this.maxHeight"
               id="scrolling-techniques-7"
               class="overflow-y-hidden"
               :max-height="this.maxHeight"
            > -->
         <!-- <home :link="this.link"></home> -->
         <router-view :link="this.link"></router-view>
         <!-- <VuePdfApp
            @after-created="afterCreated"
            page-scale="100"
            pdf="cv.pdf"
         /> -->
         <!-- </v-sheet> -->
         <!-- </v-card> -->
      </v-main>
   </v-app>
</template>

<script>
import appHeader from '@/cmps/app-header'
import home from '@/views/home'
import VuePdfApp from "vue-pdf-app"
export default {
   name: 'App',
   components: {
      appHeader,
      home,
      VuePdfApp,
   },
   data() {
      return {
         link: '',
         maxHeight: null
      }
   },
   async created() {
      // this.onScroll()
      // window.addEventListener('scroll', this.onScroll)
   },
   methods: {
      // onScroll() {
      //    console.log('window.page', window)
      //    this.maxHeight = 10000 || window.screen.height
      //    console.log('this.maxHeight :>>', this.maxHeight)
      // },
      handleScroll(ev) {
         this.link = ev
         this.$router.push(ev)


      },
      async interact() {
         if (!this.pdfjs) return

         await this.pdfjs.pdfViewer.pagesPromise
         console.log(document.querySelectorAll(".page"))
      },
      afterCreated(pdfjs) {
         // non-reactive
         this.pdfjs = pdfjs
         window._pdf = pdfjs
      },
   }
};
</script>
