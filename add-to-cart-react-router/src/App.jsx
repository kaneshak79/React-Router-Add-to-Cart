import React from 'react'
import { HashRouter,Routes,Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import { CartProvider } from './Context/CartContext'

function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
