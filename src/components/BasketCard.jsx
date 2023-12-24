import React from 'react'
import { shortenText } from './helpers/helpers'
import { MdDeleteOutline } from "react-icons/md";
import styles from './BasketCard.module.css'

function BasketCard({data ,clickHandler}) {

  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title} />
        <p>{shortenText(data.title)}</p>
        <div className={styles.actions}>
            {data.quantity === 1 && (
                <button className={styles.removeitem} onClick={()=>clickHandler("REMOVE_ITEM" , data)}> <MdDeleteOutline /> </button>
            )}

            {data.quantity >1 && (
                <button className={styles.decreaseitem} onClick={()=>clickHandler("DECREASE" , data)}>-</button>
            )}
            <span>{data.quantity}</span>
            <button className={styles.increase}onClick={()=>clickHandler("INCREASE" , data)}>+</button>
        </div>
    </div>
  )
}

export default BasketCard