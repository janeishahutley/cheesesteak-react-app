import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import classes from './MainPage.module.css'

const MainPage = () => {
  return (
   <Fragment>
      <div className={classes.background}></div>
      <div className={classes.summary}>
        <h1>
          The <span>BEST </span>mouthwatering steaks around. We're sure you've
          heard of us, but just in case you have not, ASK ABOUT US!
        </h1>
        <div className={classes.menu}>
          <Link to='/products'>Menu</Link>
        </div>
      </div>
</Fragment>
  )
}

export default MainPage
