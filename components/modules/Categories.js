import Link from "next/link";
import styles from "../../styles/Categories.module.css";
import Sedan from "../icons/Sedan";
import SUV from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

export default function Categories() {
  return (
    <div className={styles.container}>
      <Link href="categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="categories/suv">
        <div>
          <p>SUV</p>
          <SUV />
        </div>
      </Link>
      <Link href="categories/hatchback">
        <div>
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>
      <Link href="categories/sport">
        <div>
          <p>Sport cars</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
}
