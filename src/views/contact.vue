<template id="contact">
   <div v-if="contact" class="contact-section">
      <h1>Contact Me!</h1>
      <h2>Have a question or want to work together?</h2>
      <contact-form></contact-form>
      <!-- <v-btn id="contact" @click="linkClicked" text>
         <span class="mr-2">Resu</span>
      </v-btn> -->
      <!-- <router-link class="logo-link" to="/resume">
         <div class="logo-img-container">
            <div class="logo-content">
               <p>Download cv</p>
            </div>
         </div>
      </router-link> -->
   </div>
</template>

<script>
import contactForm from '../cmps/contact-form'
export default {
   data() {
      return {
         contact: []
      }
   },
   components: {
      contactForm
   },
   async created() {
   },
   computed: {

   },
   methods: {

   }


}
</script>

