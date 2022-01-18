<template>
   <div class="about-section">
      <div class="about-section-info">
         <h1>Noa Nissim.</h1>
         <h2><span>Fullstack web</span> developer.</h2>
         <v-btn
            elevation="15"
            x-large
            id="tech"
            class="btn"
            @click="btnClicked"
            text
         >
            <span class="mr-2">View my work</span>
         </v-btn>
      </div>
   </div>
</template>


<script>
export default {
   methods: {
      btnClicked() {
         this.$emit('btnClicked', 'projects')
      }
   }
}
</script>


