
import React from 'react'
import { Link } from 'react-router-dom';
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { ProductQuantity, shortenText } from './helpers/helpers';
import styles from "./Card.module.css";
import { useCart } from '../context/CartContext';

function Card({data}) {
   const {id , title , image , price} = data
   const [state,dispatch] = useCart();
   console.log(state)

   const quantity = ProductQuantity(state,id);
   console.log(quantity)

   const clickHandler = (type) =>{
    dispatch({type , payload: data})
   }
   
  return (
    <div className={styles.container}>
      <img src={image} alt={title}/>
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>

        <div className={styles.action}>
          

          <Link to={`/products/${id}`} className={styles.link}><TbListDetails /></Link>
          <div>

          {quantity > 1 && (
          <button onClick={()=> clickHandler("DECREASE")}>-</button>
          )}

            {quantity===1 &&(
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
             <MdDeleteOutline />
            </button>
            )}
            {!!quantity && <span>{quantity}</span> }
          {quantity === 0 ? (
            <button className={styles.details} onClick={()=> clickHandler("ADD_ITEM")}><TbShoppingBagCheck /></button>) :
             (<button onClick={()=> clickHandler("INCREASE")}>+</button>)
            }

          </div>
        </div>
    </div>
  )
}

export default Card