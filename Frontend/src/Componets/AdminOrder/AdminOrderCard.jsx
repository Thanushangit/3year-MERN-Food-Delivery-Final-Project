import { useState } from "react";
import { formatSrilankaPrice } from "../../Util/PriceSeperator"
import axios from "axios";
import Swal from "sweetalert2";

const AdminOrderCard = ({ item, onDelete }) => {

    const [orderStatus, setOrderStatus] = useState("placed");

    const date = new Date(item.createdAt);
    const datePart = date.toLocaleDateString("en-GB"); // Gives "09/06/2025"
    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    let timePart = date.toLocaleTimeString("en-US", timeOptions);
    const formatted = `${datePart} ${timePart}`;


    // delete for the particular order 
    async function ButtonHandler(id) {
        try {

            Swal.fire({
                title: `Are you sure you want to delete "${id}"?`,
                icon: "warning",
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: "Delete",
                cancelButtonText: "Cancel",
                customClass: {
                    confirmButton: "custom-delete-button"
                }
            }).then(async (result) => {
                if (result.isConfirmed) {
                    Swal.fire("Deleted!", `The "${id}" has been deleted successfully.`);
                    await axios.delete(`http://localhost:3000/order/deletecustomerOrder/${id}`);
                    onDelete(id)
                }
            });
        }
        catch (err) {
            console.error("Error deleting item:", err);
        }
    }


    // it for the chnge the orderStatus
    async function OrderstatusHandler(e, id) {
        try {
            const value = e.target.value
            setOrderStatus(value)
            await axios.put(`http://localhost:3000/order/updatecustomerOrder/${id}`,
                { OrderStatus: value }

            );


        }
        catch (err) {
            console.error("Error changing the orderStatus item:", err);
        }
    }


    return (

        <tr
            className="border-b border-b-gray-300 text-gray-600 shadow mb-10 ext-sm md:text-base hover:bg-gray-200 hover:text-gray-900  transition-all duration-200 hover:cursor-pointer"
        >
            <td className="pl-2">{formatted}</td>
            <td className="px-8">{item._id}</td>
            <td className="px-8 py-3 mx-2">
                <p>{item.FirstName} {item.LastName}</p>

            </td>
            <td className="px-8 py-3 mx-2">
                {item.DeliveryAddress}
            </td>
            <td className="px-8">{item.Email}</td>
            <td className="px-8 py-3">{item.MobileNumber}</td>
            <td className="px-8 py-3">

                {
                    item.OrderItems.map((food, ind) => (
                        <p key={ind} className="my-1 whitespace-nowrap">{food.name}-<span className="mx-2 ">{food.units}</span></p>
                    ))
                }

            </td>
            <td className="px-8 py-3">Rs:-{formatSrilankaPrice(item.TotalAmount)}</td>
            <td className="px-8 py-3 w-32">
                <div className="flex flex-col gap-3 w-32 ">
                    <form action="" className="text-center">
                        <div className="flex items-center gap-2">
                            <input
                                className="accent-blue-500"
                                type="radio"
                                name={`order-status-${item._id}`}
                                value="placed"
                                id={`placed-${item._id}`}
                                checked={orderStatus === "placed"}
                                onChange={(e) => OrderstatusHandler(e, item._id)}
                            />
                            <label htmlFor={`placed-${item._id}`}>Placed</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                className="accent-blue-500"
                                type="radio"
                                name={`order-status-${item._id}`}
                                value="on-the-way"
                                id={`on-the-way-${item._id}`}
                                checked={orderStatus === "on-the-way"}
                                onChange={(e) => OrderstatusHandler(e, item._id)}
                            />
                            <label htmlFor={`on-the-way-${item._id}`}>On its way</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                className="accent-blue-500"
                                type="radio"
                                name={`order-status-${item._id}`}
                                value="canceled"
                                id={`canceled-${item._id}`}
                                checked={orderStatus === "canceled"}
                                onChange={(e) => OrderstatusHandler(e, item._id)}
                            />
                            <label htmlFor={`canceled-${item._id}`}>Canceled</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                className="accent-blue-500"
                                type="radio"
                                name={`order-status-${item._id}`}
                                value="delivered"
                                id={`delivered-${item._id}`}
                                checked={orderStatus === "delivered"}
                                onChange={(e) => OrderstatusHandler(e, item._id)}
                            />
                            <label htmlFor={`delivered-${item._id}`}>Delivered</label>
                        </div>
                    </form>
                </div>
            </td>
            <td className="pr-2 py-3">
                <div className="flex items-center justify-center">
                    <button
                        onClick={() => ButtonHandler(item._id)}
                        className="py-2 px-6 bg-red-500 text-white font-semibold cursor-pointer transistion duration-300 hover:bg-red-700 rounded"
                    >
                        Remove
                    </button>
                </div>

            </td>
        </tr>

    )
}

export default AdminOrderCard