<template>
   <ul id="project-list">
      <project-preview
         v-for="project in projects"
         :key="project._id"
         :project="project"
      />
   </ul>
</template>

<script>
import projectPreview from './project-preview.vue'
export default {
   props: {
      projects: Array,
   },
   components: {
      projectPreview,
   },
};
</script>
