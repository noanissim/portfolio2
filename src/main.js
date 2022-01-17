import Vue from 'vue'
import app from './app.vue'
import vuetify from './plugins/vuetify'
import '@/styles/styles.scss'
import store from './store'
import router from './router'
import VuePdfApp from 'vue-pdf-app'
Vue.component('vue-pdf-app', VuePdfApp)

Vue.config.productionTip = false

//The accordion - rights reserved to https://github.com/yasinatesim/vue-horizontal-collapse

new Vue({
   vuetify,
   store,
   router,
   render: h => h(app)
}).$mount('#app')
