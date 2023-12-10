import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBike } from "../redux/Bikes/bikeSlice";

const AddBikes = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        image: "",
        name: "",
        detail: "",
        price: "",
        finance_fee: "",
        option_to_purchase_fee: "",
        duration: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.image || !formData.detail || !formData.price || !formData.finance_fee
            || !formData.option_to_purchase_fee || !formData.duration) {
            alert('Please fill all the fields.');
            return;
        }
        dispatch(createBike(formData));

        setFormData({
            image: "",
            name: "",
            detail: "",
            price: "",
            finance_fee: "",
            option_to_purchase_fee: "",
            duration: "",
        });
    };

    return (
        <div className="flex flex-col w-full p-3 gap-16 items-center ">
            <h2 className="text-center font-bold text-xl">Add New Bike</h2>
            <form className="flex flex-col gap-4 w-3/4" onSubmit={handleSubmit}>
                <div className="flex flex-col  w-full gap-1">
                    <label className="font-bold">Bike Name</label>
                    <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="rounded-md border-solid border-4 p-1"
                    />
                </div>

                <div className="flex flex-col  w-full gap-1">
                    <label className="font-bold">Bike Image</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="rounded-md border-solid border-4 p-1"
                    />
                </div>

                <div className="flex flex-col  w-full gap-1">
                    <label className="font-bold">Description</label>
                    <textarea
                        name="detail"
                        value={formData.detail}
                        onChange={handleInputChange}
                        cols="10"
                        className="rounded-md border-solid border-2 p-1"
                        rows="10"
                    ></textarea>
                </div>

                <div className="flex flex-col  w-full gap-1">
                    <label className="font-bold">Price</label>
                    <input
                        type="text"
                        name="price"
                        autoComplete="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="rounded-md border-solid border-2 p-1"
                    />
                </div>

                <div className="flex flex-col  w-full gap-1">
                    <label className="font-bold">Finance Fees</label>
                    <input
                        type="text"
                        name="finance_fee"
                        autoComplete="finance_fee"
                        value={formData.finance_fee}
                        onChange={handleInputChange}
                        className="rounded-md border-solid border-2 p-1"
                    />
                </div>

                <div className="flex flex-col  w-full gap-1">
                    <label className="font-bold">Option to Purchase Fee</label>
                    <input
                        type="text"
                        name="option_to_purchase_fee"
                        autoComplete="option_to_purchase_fee"
                        value={formData.option_to_purchase_fee}
                        onChange={handleInputChange}
                        className="rounded-md border-solid border-2 p-1"
                    />
                </div>

                <div className="flex flex-col  w-full gap-1">
                    <label className="font-bold">Duration</label>
                    <input
                        type="text"
                        name="duration"
                        autoComplete="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="rounded-md border-solid border-2 p-1"
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBikes;
