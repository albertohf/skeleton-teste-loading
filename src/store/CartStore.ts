import { create } from 'zustand'

interface Item {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
    rating: {
      rate: number
      count: number
    }
}
interface CartStore {
    cart: Item[]
    addToCart: (item: Item) => void
    removeFromCart: (id: number) => void
}


export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(item => item.id !== id) })),
}))
