<template>
   <div class="home-section-main">
      <!-- <router-view></router-view> -->
      <about @btnClicked="handleLink($event)" ref="about"></about>
      <projects ref="projects"></projects>
      <tech ref="tech"></tech>
      <contact ref="contact"></contact>
      <appFooter ref="appFooter"></appFooter>
   </div>
</template>

<script>
import appFooter from './app-footer.vue'
import about from './about'
import projects from './projects.vue'
import tech from './tech.vue'
import contact from './contact.vue'
export default {
   name: 'Home',
   props: ['link'],
   components: {
      appFooter,
      about,
      projects,
      tech,
      contact,
   },
   created() {

   },
   methods: {
      handleLink(ev) {
         console.log('ev', ev)
         this.$vuetify.goTo(this.$refs[ev], {
            duration: 500,
            offset: 50,
            easing: "easeInOutCubic",
         })
      }
   },
   watch: {
      '$route.name': {
         // immediate: true,
         deep: true,
         async handler() {
            try {
               // this.$nextTick(() => {
               this.$vuetify.goTo(this.$refs[this.$route.name], {
                  duration: 500,
                  offset: 50,
                  easing: "easeInOutCubic",
               })
               // })
               // var element = this.$refs[this.$route.name]
               // var top = element.offsetTop

               // window.scrollTo(0, top)
            } catch (err) {
               console.log(err)
            }
         }
      }
   }
}
</script>
