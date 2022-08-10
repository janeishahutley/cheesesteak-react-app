// import { useNavigate } from 'react-router-dom'
import ProductItem from '../components/products/ProductItem'
import classes from './Products.module.css'

const DUMMY_DATA = [
  {
    id: 's1',
    title: 'Traditional Cheesesteak',
    description: 'ribeye steak, choice of American cheese or mild provolone',
    price: 12.99,
  },
  {
    id: 's2',
    title: 'Chicken Cheesesteak',
    description: 'chicken, choice of American cheese or mild provolone',
    price: 13.99,
  },
  {
    id: 's3',
    title: 'Pizza Steak',
    description: 'ribeye steak, pizza sauce, mozzarella, pepperoni optional',
    price: 14.99,
  },
  {
    id: 's4',
    title: 'Chicken Pizza Steak',
    description: 'chicken, pizza sauce, mozzarella, pepperoni optional',
    price: 14.99,
  },
]

const Products = () => {
  // const navigate = useNavigate()

  // const routeToMain = () => {
  //   navigate(-1)
  // }

  const steakList = DUMMY_DATA.map((steak) => (
    <ProductItem
      key={steak.id}
      id={steak.id}
      title={steak.title}
      description={steak.description}
      price={steak.price}
    />
  ))

  return (
    <div>
      <div className={classes.product}>
        <ul className={classes['product-list']}>{steakList}</ul>
        {/* <p className={classes['product-text']} onClick={routeToMain}>
          back
        </p> */}
      </div>
    </div>
  )
}

export default Products
