import { useState } from "react";
import { formatSrilankaPrice } from "../../Util/PriceSeperator"

const AdminOrderCard = (props) => {
    const { FirstName, LastName, DeliveryAddress, Email, MobileNumber, OrderItems, TotalAmount, createdAt } = props.item;

    const [orderStatus,setOrderStatus]=useState("placed")
   
    const date = new Date(createdAt);
    const datePart = date.toLocaleDateString("en-GB"); // Gives "09/06/2025"
    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    let timePart = date.toLocaleTimeString("en-US", timeOptions);
    const formatted = `${datePart} ${timePart}`;
 

    return (

        <tr
            className="border-b border-b-gray-300 text-gray-600 shadow mb-10 ext-sm md:text-base hover:bg-gray-100 transition-all duration-300 hover:cursor-pointer"
        >
            <td className="pl-2">{formatted}</td>
            <td className="px-8">66659fc2c90e7b2f88a1a001</td>
            <td className="px-8 py-3 mx-2">
                <p>{FirstName} {LastName}</p>

            </td>
            <td className="px-8 py-3 mx-2">
                {DeliveryAddress}
            </td>
            <td className="px-8">{Email}</td>
            <td className="px-8 py-3">{MobileNumber}</td>
            <td className="px-8 py-3">

                {
                    OrderItems.map((food, ind) => (
                        <p key={ind} className="my-1 whitespace-nowrap">{food.name}-<span className="mx-2 ">{food.units}</span></p>
                    ))
                }

            </td>
            <td className="px-8 py-3">Rs:-{formatSrilankaPrice(TotalAmount)}</td>
            <td className="px-8 py-3 w-32">
                <div className="flex flex-col gap-3 w-32 ">
                    <form action="" className="text-center ">
                        <div className="flex items-center gap-2">
                            <input
                             className="accent-blue-500"
                                type="radio"
                                name="order-status"
                                value="placed"
                                id="placed"
                               checked={orderStatus === "placed"}
                               onChange={(e)=>setOrderStatus(e.target.value)}
                            />
                            <label for="placed">placed</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                             className="accent-blue-500"
                                type="radio"
                                name="order-status"
                                value="on-the-way"
                                id="on-the-way"
                                checked={orderStatus === "on-the-way"}
                                 onChange={(e)=>setOrderStatus(e.target.value)}

                            />
                            <label for="on-the-way whitespace-nowrap">on its way</label>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                             className="accent-blue-500"
                                type="radio"
                                name="order-status"
                                value="canceled"
                                id="canceled"
                                checked={orderStatus === "canceled"}
                                 onChange={(e)=>setOrderStatus(e.target.value)}
                            />
                            <label for="canceled">canceled</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                             className="accent-blue-500"
                                type="radio"
                                name="order-status"
                                value="delivered"
                                id="delivered"
                                checked={orderStatus === "delivered"}
                                 onChange={(e)=>setOrderStatus(e.target.value)}
                            />
                            <label for="delivered">delivered</label>
                        </div>
                    </form>
                </div>
            </td>
            <td className="pr-2 py-3">
                <div className="flex items-center justify-center">
                    <button
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