<template>
  <!-- Sidebar starts -->
  <div
    class="
      w-54
      absolute
      sm:relative
      bg-primary
      shadow
      md:h-full
      flex-col
      justify-between
      hidden
      sm:flex
    "
  >
    <div class=" text-white  text-4xl font-mono text-center p-6">
      sidebar
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Aside',

  setup: () => {

  },
})
</script>

<style>
</style>