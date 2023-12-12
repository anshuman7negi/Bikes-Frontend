import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteReservation, displayReservation } from "../redux/reserve/reservationSlice";
import { getBikes } from "../redux/Bikes/bikeSlice";


const ReservationList = () => {
    const dispatch = useDispatch();
    const { display } = useSelector((store) => store.reservation);
    const { message, isLoading } = useSelector((store) => store.bikes);

    useEffect(() => {
        dispatch(getBikes());
        dispatch(displayReservation());
    }, [dispatch]);

    const handleDeletebutton = (reservation_id) => {
          dispatch(deleteReservation(reservation_id));
    }


    if (!display || !display.message || !message.bikes) {
        return (
            <h1 className="font-bold text-xl m-auto">Loading....</h1>
        )
    }

    if (display.message && display.message.length > 0 && message) {
        return (
            <div className="flex flex-col gap-16 items-center w-full p-4 pt-20 md:pt-10">
                <h1 className="font-bold text-xl">My Reservation</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 items-center w-full">
                    {
                        display.message && display.message.map((display) => {
                            const bike = message.bikes && message.bikes.find((bike) => bike.id === display.bike_id);
                            return (
                                <ul key={display.id} className="border-2 flex items-center flex-col gap-2 lg:flex-row p-2 justify-between w-full md:text-lg font-semibold shadow-lg rounded-lg">
                                    <li>
                                        <img src={bike && bike.image} alt={bike.name} className="lg:w-[100px] shadow-lg rounded-lg" />
                                    </li>
                                    <li className="md:font-bold">{bike && bike.name}</li>
                                    <li>{display.city}</li>
                                    <li>{display.date}</li>
                                    <li>
                                        <button type="button"
                                            className="text-white bg-red-700 hover:bg-red-600 font-bold rounded-md px-2 py-2"
                                            onClick={() => { handleDeletebutton(display.id)}}
                                        >
                                            Remove
                                        </button>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    return (
        <h1 className="font-bold text-2xl m-auto"> No Reservation </h1>
    )
}

export default ReservationList;