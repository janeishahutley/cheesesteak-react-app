import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultState = {
  productCart: [],
  totalPrice: 0.00,
}

const DISPATCH_ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove',
  CLEAR: 'clear',
}

const reducer = (state, action) => {
  if (action.type === DISPATCH_ACTIONS.ADD) {
    const updatedTotalPrice =
      state.totalPrice + action.payload.quantity * action.payload.price

    const cartIndex = state.productCart.findIndex(
      (item) => item.id === action.payload.id
    )
    const foundItem = state.productCart[cartIndex]

    let updatedProductCart

    if (foundItem) {
      const updatedItem = {
        ...foundItem,
        quantity: foundItem.quantity + action.payload.quantity,
      }
      updatedProductCart = [...state.productCart]
      updatedProductCart[cartIndex] = updatedItem
    } else {
      updatedProductCart = state.productCart.concat(action.payload)
    }
    return {
      productCart: updatedProductCart,
      totalPrice: updatedTotalPrice,
    }
  }
  if (action.type === DISPATCH_ACTIONS.REMOVE) {
    const cartIndex = state.productCart.findIndex((item) => {
      return item.id === action.payload
    })

    const foundItem = state.productCart[cartIndex]
    console.log(foundItem)

    const updatedTotalPrice = state.totalPrice - foundItem.price

    let updatedProductCart

    if (foundItem) {
      const updatedItem = {
        ...foundItem,
        quantity: foundItem.quantity - 1,
      }
      updatedProductCart = [...state.productCart]
      updatedProductCart[cartIndex] = updatedItem
    }
    if (foundItem.quantity === 1) {
      updatedProductCart = state.productCart.filter((item) => {
        return item.id !== action.payload
      })
    }
    return {
      productCart: updatedProductCart,
      totalPrice: updatedTotalPrice,
    }
  }
  if (action.type === DISPATCH_ACTIONS.CLEAR) {
    return defaultState
  }

  return defaultState
}

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, defaultState)

  const addItemToCartHandler = (item) => {
    dispatch({
      type: DISPATCH_ACTIONS.ADD,
      payload: item,
    })
  }

  const removeItemFromCartHandler = (id) => {
    dispatch({
      type: DISPATCH_ACTIONS.REMOVE,
      payload: id,
    })
  }

  const clearCartHandler = () => {
    dispatch({
      type: DISPATCH_ACTIONS.CLEAR,
    })
  }

  const cartObject = {
    productCart: cartState.productCart,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  }

  return (
    <CartContext.Provider value={cartObject}>{children}</CartContext.Provider>
  )
}

export default CartProvider
