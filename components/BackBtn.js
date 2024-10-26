import { useRouter } from 'next/router'
import styles from '../styles/BackBtn.module.css'
import Back from './icons/Back'

export default function BackBtn(){
    const router =useRouter()
    
    return(
        <div className={styles.container}>
            <div className={styles.back} onClick={()=>router.back()}>
            <Back/>
            <p>back</p>
        </div>
        </div>
    )
}