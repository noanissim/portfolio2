<template id="contact">
   <div v-if="contact" class="contact-section">
      <h1>Contact Me!</h1>
      <h2>Have a question or want to work together?</h2>
      <contact-form></contact-form>
   </div>
</template>

<script>
import contactForm from '../cmps/contact-form'
export default {
   data() {
      return {
         contact: [],
      }
   },
   components: {
      contactForm
   },
}
</script>

