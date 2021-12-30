<template>
  <button :class="` rounded-${rounded} bg-${bg} active:bg-${active}`" class="m-auto font-medium leading-6  text-center px-4 py-2 inline-block focus:outline-none transition shadow ripple" >
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
        active: {type: String, default: "cyan-600"},
    }
})
</script>

