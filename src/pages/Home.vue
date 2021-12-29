<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'


import { store } from '@/store'

export default defineComponent({
  name: 'Home',
  components: {

  },
  setup() {
    const addTwo = () => store.commit('add', 2)
    const count = computed(() => store.state.count)

    return {
      addTwo,
      count,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
