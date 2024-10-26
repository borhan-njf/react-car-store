import { useState } from "react";
import {useRouter} from 'next/router'
import styles from "../../styles/SearchBar.module.css";

export default function SearchBar() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const router =useRouter()
  const searchHandler=()=>{
    if(minPrice && maxPrice){
      router.push(`/filter/${minPrice}/${maxPrice}`)
    }else alert('please fill the inputs first')
  }
  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Inter min-price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          placeholder="Inter max-price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}
