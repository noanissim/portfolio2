<template>
   <div class="home-section-main">
      <about @btnClicked="handleLink($event)" ref="about"></about>
      <projects ref="projects"></projects>
      <tech ref="tech"></tech>
      <contact ref="contact"></contact>
      <cv ref="cv"></cv>
      <appFooter ref="appFooter"></appFooter>
   </div>
</template>

<script>
import appFooter from './app-footer.vue'
import about from './about'
import projects from './projects.vue'
import tech from './tech.vue'
import contact from './contact.vue'
import cv from './cv.vue'
export default {
   name: 'Home',
   props: ['link'],
   components: {
      appFooter,
      about,
      projects,
      tech,
      contact,
      cv
   },
   created() {

   },
   methods: {
      handleLink(ev) {
         this.$vuetify.goTo(this.$refs[ev], {
            duration: 500,
            offset: 50,
            easing: "easeInOutCubic",
         })
      }
   },
   watch: {
      '$route.name': {
         deep: true,
         async handler() {
            try {
               this.$vuetify.goTo(this.$refs[this.$route.name], {
                  duration: 500,
                  offset: 50,
                  easing: "easeInOutCubic",
               })
            } catch (err) {
               console.log(err)
            }
         }
      }
   }
}
</script>
