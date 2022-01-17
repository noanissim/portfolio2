<template>
   <v-footer dark padless>
      <v-card
         flat
         tile
         width="100%"
         class="blue darken-1 white--text text-center"
      >
         <v-card-text>
            <v-btn
               v-for="(icon, idx) in icons"
               :key="icon"
               target="_blank"
               :href="links[idx]"
               class="mx-4 white--text"
               icon
            >
               <v-icon size="24px">
                  {{ icon }}
               </v-icon>
            </v-btn>
         </v-card-text>

         <v-divider></v-divider>

         <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Noa Nissim</strong>
         </v-card-text>
      </v-card>
   </v-footer>
</template>

<script>
export default {
   name: 'footerCmp',
   data: () => ({
      icons: [
         'mdi-facebook',
         'mdi-linkedin',
         'mdi-github',
      ],
      links: [
         "https://www.facebook.com/profile.php?id=100000469753848",
         "https://www.linkedin.com/in/noanissim/",
         "https://github.com/noanissim"
      ]
   }),
}
</script>