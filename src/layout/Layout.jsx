import React from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from '../context/CartContext';
import styles from './Layout.module.css'

function Layout({children}) {
    const [state] =  useCart();
  return (
    <>
    <header className={styles.header}>
        <Link to="/products" className={styles.link}>TinyShop</Link>
       
        <Link to="/checkout" className={styles.checkout}>
            <CiShoppingCart /> 
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
            
        </Link>
    </header>
    {children}
    <footer className={styles.footer}>
       <p>Developed by zahra ghoorchi</p>
    </footer>
    </>
  )
}

export default Layout