import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductDetail } from '../context/ProductContext';
import Loader from "../components/Loader";
import styles from './DetailsPage.module.css';
import { MdAttachment } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";


function DetailsPage() {
  const { id } = useParams();

const productDetails = useProductDetail(+id);
console.log(productDetails);

if(!productDetails) return <Loader />

  return (
    
      <div className={styles.container}>
        <div className={styles.image}>
        <img  src={productDetails.image} alt={productDetails.title} />

        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>{productDetails.title}</h3>
          <p className={styles.description}>{productDetails.description}</p>

          <div className={styles.catprice}>
            <div>
            <div className={styles.men}>
            <span><MdAttachment /></span>
            <span>{productDetails.category}</span>
            </div>
           <div className={styles.price}>
            <span><IoPricetagsOutline /> </span>
            <span>{productDetails.price}</span>
           </div>
            </div>
         
          
            <div className={styles.backtoshop}>
              <IoMdArrowRoundBack />
              <Link to="/products">Back to shop</Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DetailsPage