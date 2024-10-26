import CarsPage from "../../components/templates/carsPage";
import carsData from "../../data/carsData";
import { useRouter } from "next/router";
import BackBtn from '../../components/BackBtn'
export default function filterByPrices(){
    const router=useRouter();
    const [min , max]=router.query.prices||[]
    const cars=carsData.filter(car=>car.price>=min && car.price <=max ) || []
    return(
        <>
        <BackBtn/>
        <CarsPage data={cars}/>
        </>
    )
}