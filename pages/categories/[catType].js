import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import BackBtn from "../../components/BackBtn";
import CarsPage from "../../components/templates/CarsPage";
export default function categoryType() {
  const router = useRouter();
  const carsType = router.query.catType;
  const cars = carsData.filter((car) => car.category == carsType) || [];
  return (
    <>
      <BackBtn />
      <CarsPage data={cars} />
    </>     
  );
}
