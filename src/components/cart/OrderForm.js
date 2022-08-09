import { useState, useContext } from 'react'
import CartContext from '../../state/cart-context'
import classes from './OrderForm.module.css'

const OrderForm = ({ onCloseOrderForm }) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredStreet, setEnteredStreet] = useState('')
  const [enteredCity, setEnteredCity] = useState('')
  const [enteredState, setEnteredState] = useState('')
  const [enteredCode, setEnteredCode] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const ctxCart = useContext(CartContext)

  const nameHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const streetHandler = (e) => {
    setEnteredStreet(e.target.value)
  }

  const cityHandler = (e) => {
    setEnteredCity(e.target.value)
  }

  const stateHandler = (e) => {
    setEnteredState(e.target.value)
  }

  const codeHandler = (e) => {
    setEnteredCode(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    if (
      enteredName.trim() === '' ||
      enteredStreet.trim() === '' ||
      enteredCity.trim() === '' ||
      enteredState.trim() === '' ||
      enteredCode.trim() === '' ||
      enteredCode.length !== 5 ||
      !+enteredCode
    ) {
      setIsFormValid(true)
      return
    }
    const orderInfo = {
      enteredName,
      enteredStreet,
      enteredCity,
      enteredState,
      enteredCode,
    }
    console.log(orderInfo)

    setIsFormValid(false)
    ctxCart.clearCart()
    setEnteredName('')
    setEnteredStreet('')
    setEnteredCity('')
    setEnteredState('')
    setEnteredCode('')
    onCloseOrderForm(false)
  }

  return (
    <div className={classes['form-container']}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes['form-content']}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={enteredName}
            onChange={nameHandler}
          />
          <label htmlFor='street'>Street</label>
          <input
            type='text'
            id='street'
            value={enteredStreet}
            onChange={streetHandler}
          />
          <label htmlFor='city'>City</label>
          <input
            type='text'
            id='city'
            value={enteredCity}
            onChange={cityHandler}
          />
          <label htmlFor='state'>State</label>
          <input
            type='text'
            id='state'
            value={enteredState}
            onChange={stateHandler}
          />
          <label htmlFor='zip-code'>Zip code</label>
          <input
            type='text'
            id='zip-code'
            value={enteredCode}
            onChange={codeHandler}
          />
          {isFormValid && (
            <p className={classes['error-msg']}>Please complete all fields!</p>
          )}
        </div>
        <div className={classes['form-actions']}>
          <button className={`${classes['form-submit-btn']} ${classes.btn}`}>
            Submit
          </button>
          <button
            type='button'
            onClick={() => onCloseOrderForm(false)}
            className={`${classes['form-cancel-btn']} ${classes.btn}`}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrderForm
