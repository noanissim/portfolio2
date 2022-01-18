import Vue from 'vue'
import Vuex from 'vuex'

import { projectService } from '../services/project-service.js'
Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      projects: null
   },
   getters: {},
   mutations: {
      setProjects(state, { projects }) {
         state.projects = projects
      }
   },
   actions: {
      async loadProjects({ commit }) {
         try {
            const projects = await projectService.getProjects()
            commit({ type: 'setProjects', projects })
            return projects
         } catch (err) {
            console.log(err)
         }
      },
      async ownloadCv({}) {
         try {
            console.log('here download')
            const cv = await projectService.getProjects()
            return cv
         } catch (err) {
            console.log(err)
         }
      }
   }
})
