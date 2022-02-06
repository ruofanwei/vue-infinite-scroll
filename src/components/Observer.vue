<template>
  <div ref="target" class="target" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'Observer',

  setup: (props, context) => {

    let observer: IntersectionObserver
    const target = ref()

    onMounted(() => {

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          context.emit('intersect')
        }
      })

      observer.observe(target.value)
    })

    onBeforeUnmount(() => {
      observer.disconnect()
    })

    return {
      target,
    }
  },
})
</script>