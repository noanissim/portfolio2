<template id="resume">
   <!-- <vue-pdf-app pdf="cv.pdf" @open="openHandler"></vue-pdf-app> -->
   <div>
      <h1>resuuuu</h1>
      <h1>resuuuu</h1>
      <h1>resuuuu</h1>
      <h1>resuuuu</h1>
      <VuePdfApp
         listenToURL="false"
         @after-created="afterCreated"
         page-scale="100"
         pdf="cv.pdf"
      />
   </div>
</template>

<script>
// VuePdfApp component is registered in src/main.js
import VuePdfApp from "vue-pdf-app"

export default {
   name: "resume",
   components: {

      VuePdfApp
   },
   created() {
   },
   methods: {
      // openHandler(pdfApp) {
      //    window._pdfApp = pdfApp
      // },
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
   },
};
</script>
