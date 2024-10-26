import styles from "../../styles/carsPage.module.css";
import Card from "../modules/Card";

export default function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} car={car}/>
      ))}

    </div>
  );
}