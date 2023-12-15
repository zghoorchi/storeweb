
import React from 'react'
import { Link } from 'react-router-dom';
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from './helpers/helpers';
import styles from "./Card.module.css";

function Card({data}) {
   const {id , title , image , price} = data
  return (
    <div className={styles.container}>
     
      <img src={image} alt={title}/>
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
     
      
        <div className={styles.action}>
          <Link to={`/products/${id}`} className={styles.link}><TbListDetails /></Link>
         <button className={styles.details}><TbShoppingBagCheck /></button>
        </div>
    </div>
  )
}

export default Card