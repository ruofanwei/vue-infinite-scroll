<template>
  <div
    v-if="showing"
    class="
      fixed
      inset-0
      w-full
      h-screen
      flex
      items-center
      justify-center
      bg-light/50

    "
  >
    <div class="w-full max-w-2xl bg-light text-white shadow-lg rounded-lg p-8">
       <button
        aria-label="close"
        class="absolute top-0 right-0 text-xl text-white my-2 mx-4"
        @click="$emit('close')"
      >
        ×
      </button>
       <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CardModal',
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
  },
  emits: ['close'],

})
</script>

<style>
</style>