import Vue from 'vue'
import goTo from 'vuetify/lib/services/goto'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import projects from '../views/projects.vue'
import contact from '../views/contact.vue'
import appFooter from '../views/app-footer.vue'
import tech from '../views/tech.vue'
import resume from '../views/resume.vue'

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'home',
      component: home,
      children: [
         {
            path: 'about',
            name: 'about',
            component: about
         },
         {
            path: 'projects',
            name: 'projects',
            component: projects
         },
         {
            path: 'contact',
            name: 'contact',
            component: contact
         },
         {
            path: 'app-footer',
            name: 'appFooter',
            component: appFooter
         },
         {
            path: 'tech',
            name: 'tech',
            component: tech
         }
      ]
   },
   {
      path: '/resume',
      name: 'resume',
      component: resume
   }
]

const router = new VueRouter({
   routes
})

export default router
