import React from 'react'
import { useCart } from "../context/CartContext";
import BasketCard from '../components/BasketCard';
import BasketSide from '../components/BasketSide';
import styles from './Checkout.module.css'

function CheckoutPage() {
 const [state,dispatch] = useCart()

 const clickHandler = (type,payload)=>{
dispatch({type,payload})
 }

if(!state.itemsCounter){
  return(
    <div className={styles.container}>
    <p>EMPTY</p>
  </div>
  )
}

  return (
    <div className={styles.container}>
      <BasketSide state={state} clickHandler={clickHandler}/>
      <div className={styles.products}>

        {
        state.selectedItems.map((item) => (<BasketCard key={item.id} data={item} clickHandler={clickHandler}/>))
        }
      </div>
    </div>
  
  )
}

export default CheckoutPage