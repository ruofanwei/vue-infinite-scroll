<template>
  <h1>The APP template</h1>
  <RouterLink to="/">Home</RouterLink>
  |
  <RouterLink to="/about">About</RouterLink>
  <RouterView></RouterView>
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'App',
  components: {

  },
})
</script>