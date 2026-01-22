import React from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './Pages/Products'
import Cart from './Pages/cart'
import { CartProvider } from './Context/CartContext'

function App() {
  return (
    <div>
      <CartProvider>
      <HashRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </HashRouter>
      </CartProvider>
    </div>
  )
}

export default App
