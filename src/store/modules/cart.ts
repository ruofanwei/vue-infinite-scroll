
import {CART_STORAGE} from '../../composables/usePersistCart'


export interface Purchase {
    productId: number
    quantity: number
}

interface CartState {
  items: Purchase[]
  cartCount: number
}

export interface CartPreview {
    id: number
    image: string
    title: string
    quantity: number
    cost: number
}


export default {
  state: {
    items: JSON.parse(localStorage.getItem(CART_STORAGE) as string) ?? [],
    cartCount: 0,
  },
  getters: {

  },
  actions: {},
  mutations: {
    addToCart(state: CartState, item: Purchase) {
      let foundItem = state.items.find(product => product.productId === item.productId)

      if (foundItem) {
        foundItem.quantity++
      }else{
        state.items.push(item)
      }
      state.cartCount++


    },

  },
}