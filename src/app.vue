<template>
   <v-app>
      <v-main>
         <app-header @scrollToMe="handleScroll($event)"></app-header>
         <router-view :link="this.link"></router-view>
      </v-main>
   </v-app>
</template>

<script>
import appHeader from '@/cmps/app-header'
import home from '@/views/home'
export default {
   name: 'App',
   components: {
      appHeader,
      home,
   },
   data() {
      return {
         link: '',
         maxHeight: null
      }
   },
   async created() {

   },
   methods: {
      handleScroll(ev) {
         this.link = ev
         this.$router.push(ev)
      },

   }
};
</script>
