<template class=" bg-gray-100 h-screen">
  <nav
    class="
      bg-neutral-200
      shadow
      font-mono
      p-4
      font-bold
      text-amber-900
      w-screen
      fixed
      top-0
      left-0
      right-0
    "
  >
    Infinite Scroll
  </nav>
  <div class="p-14 h-screen">

      <div
        v-for="product in products"
        :key="product.id"
        class="pb-5 pt-5 font-mono text-primary leading-10"
      >
        <div>
          {{ product.title }}
          <div>$ {{ product.price }}</div>
          <div class="text-gray-400">{{ product.description }}</div>
        </div>
      </div>

    <div class="flex justify-center p-10 h-32">
      <Loading v-show="loading" />
    </div>

    <Observer @intersect="intersected" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import Loading from '@/components/Loading.vue'
import Observer from '@/components/Observer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Loading,
    Observer,
  },
  setup: () => {
    const store = useStore()
    const limit = ref(5)
    const loading = computed(() => store.getters['loading'])
    const products = computed(() => store.getters['products'])
    const total = computed(() => store.getters['total'])

    function intersected() {
        store.dispatch('GET_PRODUCT', limit.value)
        if (products.value.length >= total.value) return
        limit.value += 5
    }
    return {
      products,
      loading,
      intersected,
    }
  },
})
</script>
