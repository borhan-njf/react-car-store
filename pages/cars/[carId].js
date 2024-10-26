import { useRouter } from "next/router"
import carsData from '../../data/carsData'
import CarDetail from "../../components/templates/CarDetail";
export default function CarId(){
    const router = useRouter();
    const id=router.query.carId;
    const carDetail=carsData.filter(car=>car.id==id)[0] || []
    
    return (
        <CarDetail car={carDetail}/>
    )
}