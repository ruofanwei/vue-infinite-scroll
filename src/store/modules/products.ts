/* eslint-disable no-unused-vars */
import { Commit } from 'vuex'

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
  limit: number
  loading: boolean
  total: number
}

export default {
  state: {
    items: [],
    limit: 5,
    loading: false,
    total: 20,
  },
  getters: {
    products(state: ProductState): Product[] {
      return state.items
    },
    loading(state: ProductState): boolean {
      return state.loading
    },
    total(state: ProductState): number {
      return state.total
    },
  },
  actions: {
    async GET_PRODUCT(
      {
        commit,
        state,
      }: {
        commit: Commit
        state: ProductState
      },
      payload: number
    ) {
      return new Promise((resolve, reject) => {
        const limit = state.limit

        if (state.total <= state.items.length)
          return commit('convertLoadStatus', false)
        commit('convertLoadStatus', true)
        fetch(`${import.meta.env.VITE_API_URL}/products?limit=${payload}`)
          .then(async (res) => {
            const data = await res.json()
            resolve(data)
            commit('setProducts', data)
            commit('convertLoadStatus', false)
            commit('nextPage')
          })
          .catch((error) => {
            commit('convertLoadStatus', false)
            reject(error)
          })
      })
    },
    async LOAD_MORE_PRODUCT({
      commit,
      state,
    }: {
      commit: Commit
      state: ProductState
    }) {
      return new Promise((resolve, reject) => {
        const limit = state.limit
        if (state.total <= state.items.length)
          return commit('convertLoadStatus', false)
        commit('convertLoadStatus', true)
        fetch(`${import.meta.env.VITE_API_URL}/products?limit=${limit}`)
          .then(async (res) => {
            const data: Product[] = await res.json()
            resolve(data)
            commit('setProducts', data)
            commit('convertLoadStatus', false)
          })
          .catch((error) => {
            commit('convertLoadStatus', false)
            reject(error)
          })
      })
    },
  },
  mutations: {
    setProducts(state: ProductState, products: Product[]) {
      state.items = products
    },
    nextPage(state: ProductState) {
      state.limit += 5
    },
    convertLoadStatus(state: ProductState, status: boolean) {
      state.loading = status
    },
  },
}
