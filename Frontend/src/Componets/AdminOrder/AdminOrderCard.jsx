import {formatSrilankaPrice} from "../../Util/PriceSeperator"

const AdminOrderCard = (props) => {
    const{FirstName,LastName,DeliveryAddress,MobileNumber,OrderItems,TotalAmount,createdAt}=props.item;

    return (

        <tr
            className="border-b border-b-gray-300 text-gray-600 shadow mb-10 text-sm md:text-lg"
        >
            <td className="mx-2">09/06/2025 <br />11.29 a.m</td>
            <td className="mx-2">66659fc2c90e7b2f88a1a001</td>
            <td className="px-1 py-3 mx-2">
                <p>{FirstName} {LastName}</p>
                
            </td>
            <td className="px-1 py-3 mx-2">
                {DeliveryAddress}
            </td>
            <td className="px-1 py-3">{MobileNumber}</td>
            <td className="px-1 py-3">

                {
                    OrderItems.map((food,ind)=>(
                        <p key={ind}>{food.name}-<span>{food.units}</span></p>
                    ))
                }
                
            </td>
            <td className="px-1 py-3">Rs:-{formatSrilankaPrice(TotalAmount)}</td>
            <td className="px-1 py-3">
                <div className="flex flex-col gap-3">
                    <form action="">
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="order-status"
                                value="order-placed"
                                id="order-placed"
                                checked
                            />
                            <label for="On-the-way">Order-placed</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="order-status"
                                value="On-the-way"
                                id="On-the-way"

                            />
                            <label for="On-the-way">On-the-way</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="order-status"
                                value="order-canceled"
                                id="order-canceled"
                            />
                            <label for="order-canceled">Order-canceled</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="order-status"
                                value="order-delivered"
                                id="order-delivered"
                            />
                            <label for="order-delivered">Order-delivered</label>
                        </div>
                    </form>
                </div>
            </td>
            <td className="px-1 py-3">
                <button
                    className="py-2 px-6 bg-red-500 text-white font-semibold cursor-pointer transistion duration-300 hover:bg-red-700 rounded"
                >
                    Remove
                </button>
            </td>
        </tr>

    )
}

export default AdminOrderCard