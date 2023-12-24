import React from 'react'
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import styles from "./BasketSide.module.css";

function BasketSide({state , clickHandler}) {
  return (
    <div className={styles.container}>
        <div className={styles.first}>
            <TbChecklist />
            <p>Total</p>
            <span>{state.total} $</span>
        </div>
        <div className={styles.second}>
            <FaHashtag />
            <p>Quantity</p>
            <span>{state.itemsCounter}</span>
        </div>
        <div className={styles.third}>
            <BsPatchCheck />
            <p>Status:</p>
            <span>{!state.checkout && "Pending..."}</span>
        </div>
        <button onClick={()=> clickHandler("CHECKOUT")}>checkout</button>
    </div>
  )
}

export default BasketSide