import { Commit} from 'vuex'
const fakeStoreUrl = 'https://fakestoreapi.com'

export interface Product {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

interface ProductState {
  items: Product[]
  productId: number[]
}

export default {
  state: {
    items: [],
    productId: [],
  },
  getters: {
    list(state: ProductState): Product[] {
      return state.productId.map((i) => state.items[i])
    },
    loaded(state: ProductState): boolean {
      return state.items.length > 0
    },
  },
  actions: {
    async fetchAll({ commit}: { commit: Commit}) {

      const res = await fetch(`${fakeStoreUrl}/products`)
      const data: Product[] = await res.json()
      commit('setProducts', data)
    },
  },
  mutations: {
    setProducts(state: ProductState, products: Product[]) {
      state.items = products
    },
  },
}