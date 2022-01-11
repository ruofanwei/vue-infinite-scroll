
import { CART_STORAGE } from '../../composables/usePersistCart'

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
    cartProducts(state: CartState): Purchase[] {
      return state.items
    },
  },
  actions: {},
  mutations: {
    addToCart(state: CartState, productId: number) {
      console.log('productId', productId)
      console.log(state.items)
      let foundItem = state.items.find((item) => item.id === productId)
      console.log('foundItem', foundItem)
      //const targetIndex = state.items.indexOf(target)

      if (foundItem) {
        foundItem.quantity += 1
      } else {
        foundItem = {
          productId,
          quantity: 1,
        }
        state.items.push(foundItem)

      }
      state.cartCount++
    },
    removeProduct(state: CartState, productId: number) {
      const target = state.items.find((item) => item.id === productId)
      const targetIndex = state.items.indexOf(target!)

      if (!target) {
        return
      } else {
        state.items.splice(targetIndex, 1)
        state.cartCount -= 1
        localStorage.removeItem(CART_STORAGE)
      }
    },
  },
}
