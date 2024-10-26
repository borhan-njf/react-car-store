import styles from "../styles/AllCarsBtn.module.css";
import Link from "next/link";
export default function AllCarsBtn() {
  return (
    <div className={styles.container}>
      <Link href={'/cars'}>
       See all cars
      </Link>
    </div>
  );
}
