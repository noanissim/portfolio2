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
            <!-- <v-btn
               :class="{ active: navLinks[0].isActive }"
               id="about"
               @click="linkClicked('about')"
               text
            >
               <span class="mr-2">Home</span>
            </v-btn> -->

            <v-btn
               :class="{ active: navLinks[0].isActive }"
               id="projects"
               @click="linkClicked('projects')"
               text
            >
               <span class="mr-2">Projects</span>
            </v-btn>

            <v-btn
               :class="{ active: navLinks[1].isActive }"
               id="tech"
               @click="linkClicked('tech')"
               text
            >
               <span class="mr-2">Tech</span>
            </v-btn>

            <v-btn
               :class="{ active: navLinks[2].isActive }"
               id="info"
               @click="linkClicked('info')"
               text
            >
               <span class="mr-2">About</span>
            </v-btn>

            <v-btn
               :class="{ active: navLinks[3].isActive }"
               id="contact"
               @click="linkClicked('contact')"
               text
            >
               <span class="mr-2">Contact</span>
            </v-btn>

            <v-btn
               :class="{ active: navLinks[4].isActive }"
               id="cv"
               @click="linkClicked('cv')"
               text
            >
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
            // {
            //    name: 'Home',
            //    link: 'about',
            //    isActive: false,
            // },
            {
               name: 'Projects',
               link: 'projects',
               isActive: false,
            },
            {
               name: 'Technologies',
               link: 'tech',
               isActive: false,
            },
            {
               name: 'About',
               link: 'info',
               isActive: false,
            },
            {
               name: 'Contact',
               link: 'contact',
               isActive: false,
            },
            {
               name: 'CV',
               link: 'cv',
               isActive: false,
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
         this.navLinks.forEach(obj => {
            if (obj.link !== link) obj.isActive = false
            else obj.isActive = true
         })
      },
      onResize() {
         this.isMobile = window.innerWidth < 650
      },
   },
   computed: {

   }
}
</script>
