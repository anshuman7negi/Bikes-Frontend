import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getBikes } from "../redux/Bikes/bikeSlice";
import { createReservation } from "../redux/reserve/reservationSlice";


const Reserve = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { message } = useSelector((store) => store.bikes);
    const selectedBike = id && message && message.bikes && message.bikes
        .find((bike) => bike.id === Number(id));

    useEffect(() => {
        dispatch(getBikes());
    }, [dispatch]);

    const [formData, setFormData] = useState({
        date: '',
        bike_id: selectedBike && selectedBike.id,
        city: '',
    })

    const [backgroundImage, setBackgroundImage] = useState(selectedBike && selectedBike.image);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === 'bike_id') {
            const selectedImage = message.bikes.find((bike) => bike.id === Number(value));
            setBackgroundImage(selectedImage ? selectedImage.image : '');
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        dispatch(createReservation(formData));
        
        setFormData({
            date: '',
            bike_id: '',
            city: '',
        })
    }

    if (!message || !message.bikes) {
        return <h1 className="font-bold text-xl m-auto">Loading.......</h1>
    }

    if (message && message.bikes) {
        return (
            <div
                className="relative z-20 flex flex-col items-center justify-center w-full p-4 gap-3 h-screen bg-cover"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <h2 className="z-20 text-2xl text-white font-bold">Book Your Bike</h2>
                <p className="z-20 text-lg text-white max-w-4xl text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta dolore voluptate saepe dignissimos atque. Amet voluptas nulla id explicabo quibusdam voluptatum,
                    sequi tenetur praesentium dolores nostrum ea et cupiditate saepe totam neque.
                </p>
                <form className="z-20 w-full p-3 flex flex-col gap-6 items-center justify-center" onSubmit={handleFormSubmit}>
                    <div className="w-full p-3 flex flex-col sm:flex-row gap-6 items-center justify-center">
                        <input type="date"
                            name="date"
                            placeholder="Select Date"
                            className="shadow-lg border-2 rounded-xl p-1 text-center w-full md:w-1/4"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                        />
                        <select
                            name="bike_id"
                            className="shadow-xl border-2 rounded-xl p-1 text-center w-full md:w-1/4"
                            value={formData.bike_id}
                            onChange={handleInputChange}
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
                            value={formData.city}
                            onChange={handleInputChange}
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
                <div className="absolute bg-[#96bf01] w-full h-full opacity-70 op  top-0 z-0"/>
            </div>
        )
    }

    return (
        <h1 className="font-bold text-xl m-auto">No Bikes To show</h1>
    )
}


export default Reserve;