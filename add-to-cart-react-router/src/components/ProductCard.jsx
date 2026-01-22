import React from 'react'
import {useCart} from '../Context/CartContext'
 
const ProductCard=({product})=>{
    const {cart,addToCart,removeFromCart}=useCart();
    const inCart=cart.find((item)=>item.id===product.id);

  return (
    <div className="border p-4 rounded shadow bg-[#f5f5f4]">
      <img src={product.image} alt={product.img} className='h-40 mx-auto'/>
      <h3 className='font-bold text-xl mt-4 text-center'>{product.title.slice(0,28)}</h3>
      <h4 className='font-semibold text-sm text-gray-700 mt-3'>{product.description.slice(0,60)}</h4>
      <p className='font-bold mt-3'>₹{product.price}</p>
    

    {inCart ? (
        <button onClick={()=>removeFromCart(product.id)}
        className="bg-red-500 text-white w-full mt-2 p-2">
        Remove From Cart
        </button>
    )
     :
      (
        <button onClick={()=>addToCart(product)}
        className="bg-green-500 text-white w-full mt-2 p-2">
        Add To Cart
        </button>
    )}
    </div>
  );
};

export default ProductCard
