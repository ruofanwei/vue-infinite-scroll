import cartStore from '../store/modules/cart'

export const CART_STORAGE = 'CART_STORAGE'

export const usePersistCart = () => {
    const data = cartStore.state.items
    localStorage.setItem(CART_STORAGE, JSON.stringify(data))
}