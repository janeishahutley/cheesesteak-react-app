import { Fragment, useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import CartContext from '../state/cart-context'
import CartItem from '../components/cart/CartItem'
import OrderForm from '../components/cart/OrderForm'
import classes from './Cart.module.css'

const Cart = () => {
  const [showOrderForm, setShowOrderForm] = useState(false)
  const ctxCart = useContext(CartContext)
  const totalPrice = `$${ctxCart.totalPrice.toFixed(2)}`
  const hasItemsInCart = ctxCart.productCart.length > 0

  const orderFormHandler = () => {
    setShowOrderForm(!showOrderForm)
  }

  const increaseQuantityHandler = (item) => {
    ctxCart.addItem({ ...item, quantity: 1 })
  }

  const decreaseQuantityHandler = (id) => {
    ctxCart.removeItem(id)
  }

  // const navigate = useNavigate()

  // const routeToMain = () => {
  //   navigate(-1)
  // }

  const cartItems = ctxCart.productCart.map((item) => {
    return (
      <CartItem
        key={item.id}
        title={item.title}
        quantity={item.quantity}
        price={item.price}
        onAdd={increaseQuantityHandler.bind(null, item)}
        onRemove={decreaseQuantityHandler.bind(null, item.id)}
      />
    )
  })

  const cartState = hasItemsInCart ? (
    <button className={classes['cart-btn-order']} onClick={orderFormHandler}>
      Order
    </button>
  ) : (
    <p className={classes['cart-btn-text']}>No Items Found</p>
  )

  return (
    <Fragment>
      <section className={classes.cart}>
        <div className={classes['cart-section']}>
          <div className={classes['cart-content']}>
            <div className={classes['cart-info']}>
              <span className={classes['cart-title']}>Total Amount: </span>
              <span className={classes['cart-price']}>{totalPrice}</span>
              {cartState}
            </div>

            <div></div>
            <ul className={classes['cart-items-list']}>{cartItems}</ul>
          </div>

          {showOrderForm && (
            <div>
              <OrderForm onCloseOrderForm={orderFormHandler} />
            </div>
          )}
          {/* <p className={classes['cart-text']} onClick={routeToMain}>
            Back
          </p> */}
        </div>
      </section>
    </Fragment>
  )
}

export default Cart
