import Link from "next/link";
import styles from "../../styles/Card.module.css";
import Location from "../icons/Location";
export default function Card({ car }) {
  const { id, name, model, year, image, distance, price, location } = car;

  return (
    <Link href={`/cars/${id}`} scroll={false}>
      <div className={styles.container}>
        <img src={image} alt={name} className={styles.image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year} . ${distance}km`}</p>
        <div className={styles.footer}>
          <p className={styles.price}>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
}
