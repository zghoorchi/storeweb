import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/config';

const ProductContext = createContext();

function ProductsProvider({children}) {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        try {
            const getData = async () => {
                const response =await api.get("/products");
                setProducts(response);
            } 
        getData();

        } catch (error) {
            console.log(error.message);
        }
      
    },[])


  return (
   <ProductContext.Provider value={products}>
    {children}
   </ProductContext.Provider>
  )
}

const useProducts = () =>{
    const products =  useContext(ProductContext);
    return products;
}
const useProductDetail = id =>{
    const products =  useContext(ProductContext);
    const result = products.find(product => product.id ===id);
    return result;
}

export default ProductsProvider;
export {useProducts , useProductDetail};