import React from 'react'
import { TbCategory } from "react-icons/tb";
import { createQueryObject } from './helpers/helpers';
import styles from "./SideBar.module.css";

const categories = [
  {id:1, type:"All"},
  {id:2, type:"Electronics"},
  {id:3, type:"jewelery"},
  {id:4, type:"Men's Clothing"},
  {id:5, type:"Women's Clothing"}
]

function SideBar({query,setQuery}) {
    const categoryHandler = (event) =>{
        const { tagName } =  event.target;
        const category = event.target.innerText.toLowerCase();
        if(tagName !== "LI") return;
        setQuery(query => createQueryObject(query,{category}))
 
     }
  return (
    <div className={styles.sidebar}>
    <div >
     <TbCategory />
     <p>Categories</p>
    </div>
    <ul onClick={categoryHandler}>
   {categories.map((item) => (
    <li key={item.id} className={item.type.toLowerCase()=== query.category ? styles.selected : null}>{item.type}</li>
   ))}
    </ul>
   </div>
  )
}

export default SideBar