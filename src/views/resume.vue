<template id="resume">
   <div class="resume-section">
      <h1>Resume</h1>
      <iframe width="500" height="750" id="pdf-iframe" :src="pdfLink"></iframe>
   </div>
</template>

<script>

export default {
   name: "resume",

   data() {
      return {
         pdfLink: './cv.pdf'
      }
   },
   created() {
   },
   methods: {

   },
};
</script>
