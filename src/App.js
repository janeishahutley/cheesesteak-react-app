import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import MainPage from './pages/MainPage'
import Product from './pages/Products'
import Cart from './pages/Cart'
import CartProvider from './state/CartProvider'

function App() {
  return (
    <CartProvider>
      <Layout/>
        <Routes>
          {/* <Route path='/' element={<Navigate to='/main-page' />} /> */}
          <Route path='/' element={<MainPage />} />
          <Route path='products' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          {/* set up a notFound page */}
        </Routes>
  
    </CartProvider>
  )
}

export default App

