import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getBikes } from "../redux/Bikes/bikeSlice";


const Reserve = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { message } = useSelector((store) => store.bikes);

    useEffect(() => {
        dispatch(getBikes());
    })

    if (!message && !message.bikes) {
        return <h1>Loading.......</h1>
    }

    return (
        <div className="flex flex-col items-center justify-center w-full p-4 gap-3">
            <h2 className="text-2xl font-bold">Book Your Bike</h2>
            <p className="text-lg max-w-4xl text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dicta dolore voluptate saepe dignissimos atque. Amet voluptas nulla id explicabo quibusdam voluptatum,
                sequi tenetur praesentium dolores nostrum ea et cupiditate saepe totam neque.
            </p>
            <form className="w-full p-3 flex flex-col gap-6 items-center justify-center">
                <div className="w-full p-3 flex gap-6 items-center justify-center">
                    <input type="date"
                        name="date"
                        placeholder="Select Date"
                        className="shadow-lg border-2 rounded-xl p-1 text-center w-full md:w-1/4"
                        required
                    />
                    <select
                        name="bike_id"
                        className="shadow-xl border-2 rounded-xl p-1 text-center w-full md:w-1/4"
                        required
                    >
                        <option value="">Select Your Bike</option>
                        {message && message.bikes && message.bikes.map((bike) => (
                            <option value={bike.id} key={bike.id}>{bike.name}</option>
                        ))}
                    </select>

                    <select
                        name="city"
                        className="shadow-xl border-2 rounded-xl p-1 text-center w-full md:w-1/4"
                    >
                        <option value="">Select your country</option>
                        <option>Uttarakhand</option>
                        <option>Dehradun</option>
                        <option>Almora</option>
                        <option>Nainital</option>
                    </select>
                </div>
                <button type="submit" className=" bg-green-400 font-bold text-white text-lg px-6 py-1 shadow-xl rounded-lg">Book</button>
            </form>
        </div>
    )
}


export default Reserve;