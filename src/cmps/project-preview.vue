<template>
   <v-card
      class="project-preview-container mx-auto my-12"
      :loading="loading"
      :max-width="maxWidth"
   >
      <v-img
         height="250"
         :src="require(`../assets/img/projects/${this.project.imgUrl}`)"
      ></v-img>

      <v-card-title class="project-title">{{ project.name }}</v-card-title>

      <v-card-text>
         <ul class="project-desc-ul">
            <li v-for="info in project.desc" :key="info.id">{{ info.desc }}</li>
         </ul>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title class="project-title-actions"
         >View the project</v-card-title
      >
      <v-card-actions class="project-actions">
         <v-btn color="blue lighten-2" text>
            <a :href="project.links[0].link" target="_blank">Github</a>
         </v-btn>

         <v-btn color="blue lighten-2" text>
            <a :href="project.links[1].link" target="_blank">Live</a>
         </v-btn>
      </v-card-actions>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
         <v-chip-group
            column
            active-class="blue accent-2 white--text"
            v-model="selection"
         >
            <v-chip v-for="(tool, idx) in project.tools" :key="idx">{{
               tool
            }}</v-chip>
         </v-chip-group>
      </v-card-text>
   </v-card>
</template>

<script>
export default {
   props: {
      project: Object,
   },
   data: () => ({
      loading: false,
      selection: 0,
      maxWidth: null
   }),
   computed: {
      getImg() {
         let url = `../assets/img/${this.project.imgUrl}`
         return url
      }
   },
   mounted() {
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
   },
   methods: {

      onResize() {
         this.maxWidth = window.innerWidth < 400 ? window.innerWidth - 30 : 374
      },
   },
};
</script>