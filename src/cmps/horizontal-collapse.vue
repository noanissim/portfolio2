<template>
   <section class="js-horizontal-collapse horizontal-collapse">
      <ul class="horizontal-collapse__inner">
         <HorizontalCollapseItem className="horizontal-collapse__item--1">
            <div class="horizontal-collapse__inactive-content">
               <h2 class="horizontal-collapse__heading">Frameworks</h2>
            </div>
            <div class="horizontal-collapse__active-content">
               <h2 class="horizontal-collapse__heading">Frameworks</h2>
               <div class="horizontal-collapse__body">
                  <p>React</p>
                  <v-img
                     height="50"
                     width="50"
                     :src="require(`../assets/img/skills/react.png`)"
                  ></v-img>
                  <p>Angular 13</p>
                  <v-img
                     height="80"
                     width="80"
                     :src="require(`../assets/img/skills/angular.png`)"
                  ></v-img>
                  <p>Vue.js</p>
                  <v-img
                     height="60"
                     width="60"
                     :src="require(`../assets/img/skills/vue.png`)"
                  ></v-img>
                  <p>Node.js</p>
                  <v-img
                     height="60"
                     width="60"
                     :src="require(`../assets/img/skills/nodejs.png`)"
                  ></v-img>
                  <p>jQuery</p>
                  <v-img
                     height="60"
                     width="60"
                     :src="require(`../assets/img/skills/jquery.png`)"
                  ></v-img>
               </div>
            </div>
         </HorizontalCollapseItem>

         <HorizontalCollapseItem className="horizontal-collapse__item--2">
            <div class="horizontal-collapse__inactive-content">
               <h2 class="horizontal-collapse__heading">Languages</h2>
            </div>
            <div class="horizontal-collapse__active-content">
               <h2 class="horizontal-collapse__heading">Languages</h2>
               <div class="horizontal-collapse__body">
                  <p>Javascript</p>
                  <v-img
                     height="50"
                     width="50"
                     :src="require(`../assets/img/skills/javascript.png`)"
                  ></v-img>
                  <p>Typescript</p>
                  <v-img
                     height="50"
                     width="50"
                     :src="require(`../assets/img/skills/typescript.png`)"
                  ></v-img>
                  <p>Java</p>
                  <v-img
                     height="50"
                     width="50"
                     :src="require(`../assets/img/skills/java.png`)"
                  ></v-img>
                  <p>HTML5</p>
                  <v-img
                     height="50"
                     width="50"
                     :src="require(`../assets/img/skills/html.png`)"
                  ></v-img>
                  <p>CSS3</p>
                  <v-img
                     height="50"
                     width="50"
                     :src="require(`../assets/img/skills/css.png`)"
                  ></v-img>
                  <p>SCSS</p>
                  <v-img
                     contain
                     height="50"
                     width="100"
                     :src="require(`../assets/img/skills/scss.png`)"
                  ></v-img>
               </div>
            </div>
         </HorizontalCollapseItem>

         <HorizontalCollapseItem className="horizontal-collapse__item--3">
            <div class="horizontal-collapse__inactive-content">
               <h2 class="horizontal-collapse__heading">Programs</h2>
            </div>
            <div class="horizontal-collapse__active-content">
               <h2 class="horizontal-collapse__heading">Programs</h2>
               <div class="horizontal-collapse__body">
                  <p>VS Code</p>
                  <v-img
                     height="50"
                     width="50"
                     :src="require(`../assets/img/skills/vscode.png`)"
                  ></v-img>
                  <p>Atom</p>
                  <v-img
                     height="50"
                     width="50"
                     :src="require(`../assets/img/skills/atom.png`)"
                  ></v-img>
                  <p>Trello</p>
                  <v-img
                     height="50"
                     width="50"
                     :src="require(`../assets/img/skills/trello.png`)"
                  ></v-img>
                  <p>Azure Devops</p>
                  <v-img
                     height="50"
                     width="50"
                     :src="require(`../assets/img/skills/azure.png`)"
                  ></v-img>
                  <p>Microsoft products(Office-365, Excell...)</p>
                  <v-img
                     contain
                     height="70"
                     width="120"
                     :src="require(`../assets/img/skills/office.png`)"
                  ></v-img>
                  <p>Eclipse</p>
                  <v-img
                     contain
                     height="70"
                     width="120"
                     :src="require(`../assets/img/skills/eclipse.png`)"
                  ></v-img>
               </div>
            </div>
         </HorizontalCollapseItem>

         <HorizontalCollapseItem className="horizontal-collapse__item--4">
            <div class="horizontal-collapse__inactive-content">
               <h2 class="horizontal-collapse__heading">
                  Services &#38; Databases
               </h2>
            </div>
            <div class="horizontal-collapse__active-content">
               <h2 class="horizontal-collapse__heading">
                  Services &#38; Databases
               </h2>
               <div class="horizontal-collapse__body">
                  <p>MongoDB</p>
                  <v-img
                     height="70"
                     width="120"
                     :src="require(`../assets/img/skills/mongodb1.png`)"
                  ></v-img>
                  <p>Firebase</p>
                  <v-img
                     height="70"
                     width="120"
                     :src="require(`../assets/img/skills/firebase.png`)"
                  ></v-img>
                  <p>Github</p>
                  <v-img
                     contain
                     height="70"
                     width="70"
                     :src="require(`../assets/img/skills/github.png`)"
                  ></v-img>
                  <p>MySQL</p>
                  <v-img
                     contain
                     position="center center"
                     height="70"
                     width="70"
                     :src="require(`../assets/img/skills/mysql.png`)"
                  ></v-img>
               </div>
            </div>
         </HorizontalCollapseItem>
      </ul>
   </section>
</template>

<script>
import HorizontalCollapseItem from "./horizontal-collapse-item"

export default {
   name: "HorizontalCollapse",
   components: {
      HorizontalCollapseItem
   }
};
</script>

