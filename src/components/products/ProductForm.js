import { useState } from 'react'
import classes from './ProductForm.module.css'

const ProductForm = ({onAddQuantity}) => {
  const [enteredQuantity, setEnteredQuantity] = useState('')
  const [isValid, setIsValid] = useState(true)

  const inputOnChangeHandler = (e) => {
    setEnteredQuantity(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (
      enteredQuantity.trim() === '' ||
      +enteredQuantity < 0 ||
      +enteredQuantity > 3
    ) {
      setIsValid(false)
      return
    }
    onAddQuantity(+enteredQuantity)
    console.log(enteredQuantity)
    setEnteredQuantity('')
    setIsValid(true)
  }

  const formValidation = !isValid ? <p className={classes['form-text']}>Please enter valid values between 1 and 3! </p> : ''

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        type='text'
        className={classes['form-input']}
        value={enteredQuantity}
        onChange={inputOnChangeHandler}
      />
      <button className={classes['form-btn']}>+</button>
      {formValidation}
    </form>
  )
}

export default ProductForm
