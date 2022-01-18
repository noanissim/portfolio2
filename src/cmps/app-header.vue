<template>
   <div>
      <v-app-bar class="app-header-nav" fixed elevate-on-scroll>
         <img
            @click="linkClicked('about')"
            class="img-logo"
            :src="require(`../assets/img/logos/logo6.png`)"
         />
         <v-spacer></v-spacer>
         <div v-if="!isMobile">
            <v-btn id="about" @click="linkClicked('about')" text>
               <span class="mr-2">Home</span>
            </v-btn>

            <v-btn id="projects" @click="linkClicked('projects')" text>
               <span class="mr-2">Projects</span>
            </v-btn>

            <v-btn id="tech" @click="linkClicked('tech')" text>
               <span class="mr-2">Tech</span>
            </v-btn>

            <v-btn id="contact" @click="linkClicked('contact')" text>
               <span class="mr-2">Contact</span>
            </v-btn>

            <v-btn id="cv" @click="linkClicked('cv')" text>
               <span class="mr-2">CV</span>
            </v-btn>
         </div>
         <v-menu v-if="isMobile" left bottom transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
               <v-btn icon v-bind="attrs" v-on="on">
                  <v-app-bar-nav-icon></v-app-bar-nav-icon>
               </v-btn>
            </template>

            <v-list>
               <v-list-item
                  v-for="(link, idx) in navLinks"
                  :key="idx"
                  @click="linkClicked(link.link)"
               >
                  <v-list-item-title>{{ link.name }}</v-list-item-title>
               </v-list-item>
            </v-list>
         </v-menu>
      </v-app-bar>
   </div>
</template>

<script>
export default {
   name: 'appHeader',
   components: {

   },
   data() {
      return {
         isMobile: false,
         navLinks: [
            {
               name: 'Home',
               link: 'about'
            },
            {
               name: 'Projects',
               link: 'projects'
            },
            {
               name: 'Technologies',
               link: 'tech'
            },
            {
               name: 'Contact',
               link: 'contact'
            },
            {
               name: 'CV',
               link: 'cv'
            }
         ]
      }
   },
   mounted() {
      // console.log(this.$vuetify.breakpoint.width)
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
   },
   methods: {
      linkClicked(link) {
         this.$emit('scrollToMe', link)
      },
      onResize() {
         this.isMobile = window.innerWidth < 650
      },
   },
   computed: {

   }
}
</script>
