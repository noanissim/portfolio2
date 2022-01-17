import Vue from 'vue'
import Vuex from 'vuex'

import { projectService } from '../services/project-service.js'
Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      projects: null
   },
   getters: {
      // getProjects(state) {
      //    return state.projects
      // }
   },
   mutations: {
      setProjects(state, { projects }) {
         state.projects = projects
      }
   },
   actions: {
      async loadProjects({ commit }) {
         try {
            console.log('here')
            const projects = await projectService.getProjects()
            commit({ type: 'setProjects', projects })
            console.log('projects :>>', projects)
            return projects
         } catch (err) {
            console.log(err)
         }
      },
      async ownloadCv({ commit }) {
         try {
            console.log('here download')
            const cv = await projectService.getProjects()
            // commit({ type: 'setProjects', projects })
            // console.log('projects :>>', projects)
            return cv
         } catch (err) {
            console.log(err)
         }
      }
   }
})
