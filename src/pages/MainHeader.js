import { useNavigate } from 'react-router-dom'
import CartButton from '../components/cart/CartButton'
import classes from './MainHeader.module.css' 

const MainHeader = () => {
  const navigate = useNavigate()

  const routeToCartHandler = () => {
    navigate('/cart')
  }

  const navigateHandler = () => {
    navigate(-1)
  }


  return (
    <header className={classes['main-header']}>
      <h1  onClick={navigateHandler} className={classes.header}>Philly Steaks</h1>
      <CartButton className={classes.button}onRoute={routeToCartHandler} />
    </header>
  )
}

export default MainHeader
