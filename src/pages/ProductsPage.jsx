import React, { useState ,useEffect } from 'react'
import { useProducts } from '../context/ProductContext'
import styles from './ProductsPage.module.css';
import Card from '../components/Card';
import Loader from '../components/Loader';
import { TbSearch } from "react-icons/tb";
import { TbCategory } from "react-icons/tb";


function ProductsPage() {
    const products = useProducts();
    const [search , setSearch] = useState("");
    const [displayed,setDisplayed] = useState([]);
    const [query,setQuery] =  useState({});

  useEffect(()=>{
  setDisplayed(products);
  },[products])

useEffect(()=>{
  console.log(query);
},[query])

    const inputHandler = (event) =>{
      setSearch(event.target.value.toLowerCase().trim());
        
    }
    const searchHandler = () =>{
    setQuery(query => ({...query,search}))

    }
    const categoryHandler = (event) =>{
       const { tagName } =  event.target;
       const category = event.target.innerText.toLowerCase();
       if(tagName !== "LI") return;
       setQuery(query => ({...query , category}))

    }
  return (
    <>
    <div>
      <input type="text" placeholder='Search ...' value={search} onChange={inputHandler}/>
      <button onClick={searchHandler}><TbSearch /></button>

    </div>
     <div className={styles.container}>
     <div className={styles.products}>
        {!displayed.length && <Loader />}
        {displayed.map((product) => (
            <Card key={product.id} data={product}/>
        ))}
     </div>
     <div>
      <div >
       <TbCategory />
       <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        <li >All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
       <li>women's clothing</li>
      </ul>
     </div>
    </div>
    </>
   
  )
}

export default ProductsPage