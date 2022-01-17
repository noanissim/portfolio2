<template id="projects">
   <div v-if="this.projects" class="projects-section">
      <h1>Projects</h1>
      <project-list :projects="projects"></project-list>
   </div>
</template>

<script>
import projectList from '../cmps/project-list'
export default {
   data() {
      return {
         projects: []
      }
   },
   components: {
      projectList
   },
   async created() {
      this.projects = await this.$store.dispatch('loadProjects')
      console.log('created')
   },
   computed: {

   },
}
</script>

