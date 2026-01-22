import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import axios from 'axios'
    const Products=()=>{
        const [products,setProducts] =useState([]);
    
    useEffect(()=>{
        axios
        .get('https://fakestoreapi.com/products/')
        .then(res=>{
        setProducts(res.data);
    })
    .catch(err=>{
        console.error(err);
    });
},[]);

  return (
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3  gap-6 p-6 bg-[#f1f5f9]'>
      {products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  );
    };

export default Products
