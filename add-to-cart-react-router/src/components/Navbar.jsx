import React from 'react'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../Context/CartContext';
const Navbar=()=>{
   const {cart}=useCart();

  return (
    <nav className='flex justify-between bg-[#1d4ed8] p-4'>
        
        <Link to="/" className='text-white font-bold text-3xl p-10'>FakeStore</Link>
        <Link to="/cart" className='text-white font-semibold text-2xl  p-10 flex items-center gap-2'><span>Cart -  {cart.length}  </span><FaShoppingCart size={34}/></Link>
    </nav>
  )

}
export default Navbar
