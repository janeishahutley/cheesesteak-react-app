import { createContext } from 'react'

const CartContext = createContext({
  productCart: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
})

export default CartContext
