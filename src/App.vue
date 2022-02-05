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
  <div class="p-14">
    <div ref="list" class="overflow-scroll">
      <div
        v-for="product in products"
        :key="product.id"
        class="p-5 font-mono text-primary  leading-10"
      >
        <div>
          {{ product.title }}
          <div>$ {{ product.price }}</div>
          <div class="text-gray-400">{{ product.description }}</div>
        </div>
      </div>
    </div>
    <div  class="flex justify-center p-10">
      <Loading v-show="loading"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted} from 'vue'
import { useStore } from 'vuex'
import Loading from '@/components/Loading.vue'


export default defineComponent({
  name: 'App',
  components:{
    Loading
  },
  setup: () => {

    const store = useStore()
    const loading = computed(() => store.getters['loading'])
    const products = computed(() => store.getters['products'])

    onMounted(() => {
      store.dispatch('GET_PRODUCT')
      intersectionObserver()
    })
    function intersectionObserver() {
      window.onscroll = () => {
        const bottomOfWrapper =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight

        if (bottomOfWrapper) {
          store.commit('nextPage')
          setTimeout(() => {
            store.dispatch('LOAD_MORE_PRODUCT')
          }, 1000)
        }
      }
    }
    return {
      products,
      loading

    }
  },
})
</script>
