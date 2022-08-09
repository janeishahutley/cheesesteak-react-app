import { useContext } from 'react'
import CartIcon from './CartIcon'
import classes from './CartButton.module.css'
import CartContext from '../../state/cart-context'

const CartButton = ({ onRoute }) => {
  const cartCtx = useContext(CartContext)
  const totalItemsInCart = cartCtx.productCart.reduce(
    (startingQuantity, addedItem) => startingQuantity + addedItem.quantity,
    0
  )

  return (
    <button onClick={onRoute} className={classes.button}>
      <span className={classes['cart-icon']}>
        <CartIcon />
      </span>
      <span className={classes['cart-badge']}>{totalItemsInCart}</span>
    </button>
  )
}

export default CartButton
