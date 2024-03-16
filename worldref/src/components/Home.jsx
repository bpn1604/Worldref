import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { Singleproduct } from './Singleproduct';
import Navbar from './Navbar';
export const Home = () => {
    const [products , setProducts] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setProducts(res.data))
    },[])
  return (
    <>
    <Navbar />
      <Singleproduct products={products} />

    </>
  );
}

