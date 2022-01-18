<template id="tech">
   <div v-if="tech" class="tech-section">
      <h1>Technologies</h1>
      <HorizontalCollapse />
   </div>
</template>

<script>
import HorizontalCollapse from "../cmps/horizontal-collapse"
export default {
   data() {
      return {
         tech: []
      }
   },
   components: {
      HorizontalCollapse,
   },
   async created() {
   },
   computed: {
   },
}
</script>

