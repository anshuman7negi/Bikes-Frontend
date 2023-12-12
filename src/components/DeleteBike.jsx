import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteBike, getBikes } from "../redux/Bikes/bikeSlice";


const DeleteBike = () => {
    const dispatch = useDispatch();
    const { message } = useSelector((store) => store.bikes)

    useEffect(() => {
        dispatch(getBikes());
    }, [dispatch])

    const handleDelete = (bikeId) => {
        dispatch(deleteBike(bikeId))
    }

    if (!message || !message.bikes) {
        return <h1>Loading.......</h1>;
    }

    if (message && message.bikes) {
        return (
            <div className="w-full flex flex-col gap-14 items-center p-4">
                <h1 className="text-xl font-bold">Bikes</h1>
                <div className="w-full flex flex-col gap-4">
                    {message.bikes.map((bike) => (
                        <ul key={bike.id} className="flex flex-col gap-2 sm:flex-row items-center justify-between border-2 p-2 rounded-lg shadow-lg">
                            <li>
                                <img src={bike.image} alt="" className="sm:max-w-[100px] min-w-[40px] rounded-lg" />
                            </li>
                            <li className="font-bold md:text-lg">
                                {bike.name}
                            </li>
                            <li>
                                <button
                                    className="bg-red-600 rounded-lg hover:bg-red-800 font-bold px-2 py-1 text-white"
                                    onClick={() => handleDelete(bike.id)}
                                >
                                    Delete
                                </button>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className="text-lg md:text-2xl font-bold absolute top-[50%]">No Cars to show</div>
    )
}

export default DeleteBike;