<template>
  <button :class="` rounded-${rounded} bg-${bg} hover:bg-${hover}`" class="m-auto font-medium leading-6  text-center px-4 py-2 inline-block focus:outline-none transition shadow ripple" >
      <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue"
export default defineComponent({
    name: "Button",
    props:{
        rounded: {type: String, default: "lg"},
        bg: {type: String, default: "transparent"},

    }

})
</script>

