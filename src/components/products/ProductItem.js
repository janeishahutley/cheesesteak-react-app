import { useContext } from 'react'
import ProductForm from './ProductForm'
import CartContext from '../../state/cart-context'
import classes from './ProductItem.module.css'

const ProductItem = ({ id, title, description, price }) => {
  const cartCtx = useContext(CartContext)
  const priceToFixed = `$${price.toFixed(2)}`

  const addToCart = (quantity) => {
    cartCtx.addItem({
      id,
      title,
      quantity,
      price,
    })
  }

  return (
    <li className={classes['product-item']}>
      <div className={classes['product-content']}>
        <div className={classes.info}>
          <h1 className={classes['product-title']}>{title}</h1>
          <div className={classes['product-price']}>{priceToFixed}</div>
        </div>

        <div className={classes['product-description']}>{description}</div>
        <div className={classes['product-form']}>
          <ProductForm onAddQuantity={addToCart} />
        </div>
      </div>
    </li>
  )
}

export default ProductItem
