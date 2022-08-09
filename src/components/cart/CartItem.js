import classes from './CartItem.module.css'

const CartItem = ({ title, quantity, price, onAdd, onRemove }) => {
  const itemPrice = `$${price.toFixed(2)}`

  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-item-content']}>
        <h1 className={classes['cart-item-title']}>{title}</h1>
        <div className={classes['cart-item-info']}>
          <span className={classes['cart-item-price']}>{itemPrice}</span>
          <span className={classes['cart-item-quantity']}>x{quantity}</span>
            <div className={classes['cart-item-actions']}>
        <button className={classes['cart-item-btn-add']} onClick={onAdd}>
          +
        </button>
        <button className={classes['cart-item-btn-close']} onClick={onRemove}>
          -
        </button>
      </div>
        </div>
       
      </div>
     
    </li>
  )
}

export default CartItem
