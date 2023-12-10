import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getBikes } from "../redux/Bikes/bikeSlice";
import { Link, useParams } from "react-router-dom";


const SingleBike = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { message } = useSelector((store) => store.bikes);
    const selectedBike = message.bikes && message.bikes.find((bike) => bike.id == Number(id));

    useEffect(() => {
        dispatch(getBikes());
    }, [dispatch]);

    if (!message.bikes && !selectedBike) {
        return <h1>Loading.......</h1>
    }

    return (
        <div className="flex flex-col lg:flex-row p-2 items-center pt-16 w-full gap-4 justify-center">
            <img src={selectedBike.image} alt="bike" className="w-[90%] lg:w-[50%] shadow-2xl rounded-lg" />
            <table className="flex flex-col p-2 gap-2">
                <thead>
                    <tr>
                        <th className="text-xl font-bold text-center">{selectedBike.name}</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col gap-2">
                    <tr>
                        <td className="text-lg">{selectedBike.detail}</td>
                    </tr>
                    <tr className="bg-gray-400 text-white font-bold p-2">
                        <td>{selectedBike.finance_fee}</td>
                    </tr>
                    <tr className="bg-gray-400 text-white font-bold p-2">
                        <td>{selectedBike.option_to_purchase_fee}</td>
                    </tr>
                    <tr className="bg-gray-400 text-white font-bold p-2">
                        <td>{selectedBike.duration}</td>
                    </tr>
                    <tr className="bg-green-400 text-white font-bold p-2">
                        <td>{selectedBike.price}</td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={`/reserve/${selectedBike.id}`}>
                                <button className="font-bold text-xl text-white rounded-2xl bg-orange-500 hover:bg-orange-600 px-2 py-2 w-40 m-auto">Reserve</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SingleBike;