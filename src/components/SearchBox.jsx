import { TbSearch } from "react-icons/tb";
import { createQueryObject } from "./helpers/helpers";
import styles from "./SearchBox.module.css";

function SearchBox({search,setSearch,setQuery}) {

    const inputHandler = (event) =>{
        setSearch(event.target.value.toLowerCase().trim());
      }
      const searchHandler = () =>{
        setQuery(query => createQueryObject(query,{search}))
    
        }
  return (
    <div className={styles.search}>
    <input type="text" placeholder='Search ...' value={search} onChange={inputHandler}/>
    <button onClick={searchHandler}><TbSearch /></button>

  </div>
  )
}

export default SearchBox