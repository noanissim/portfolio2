<template>
   <li
      v-on-clickaway="away"
      @click="isActive = !isActive"
      :style="`width: ${
         isActive ? itemMaxWidth : itemMinWidth
      }px;min-width: ${itemMinWidth}px;max-width: ${itemMaxWidth}px;cursor:pointer;`"
      class="js-horizontal-collapse-item horizontal-collapse__item"
      :class="{ 'is-active': isActive, [className]: true }"
      tabindex="0"
      role="button"
   >
      <div
         :style="`width: ${itemMaxWidth}px;cursor:pointer;`"
         class="
            js-horizontal-collapse-item-inner
            horizontal-collapse__item-inner
         "
      >
         <slot></slot>
      </div>
   </li>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway"

export default {
   name: "HorizontalCollapseItem",
   mixins: [clickaway],
   props: ["className"],

   data() {
      return {
         isActive: false,
         itemMinWidth: 100,
         itemMaxWidth: 300
      }
   },
   mounted() {
      this.onResize()
      window.addEventListener('resize', this.onResize, { passive: true })
   },
   methods: {
      away() {
         this.isActive = false
      },
      onResize() {
         this.itemMaxWidth = window.innerWidth * 0.35
         this.itemMinWidth = (window.innerWidth * 0.65) / 4
      },
   },

};
</script>


