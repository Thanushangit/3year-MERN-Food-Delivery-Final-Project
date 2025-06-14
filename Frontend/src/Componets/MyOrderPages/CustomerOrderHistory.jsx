import { formatSrilankaPrice } from "../../Util/PriceSeperator";

const CustomerOrderHistory = ({ order }) => {
    const { createdAt, _id, DeliveryAddress, TotalAmount, OrderItems } = order;

    function formatDate(isoDate) {
        const date = new Date(isoDate);

        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className="w-full h-fit bg-gray-100 p-4 shadow space-y-3 hover:shadow-2xl hover:cursor-pointer transition-all duration-300">
            <div className="flex flex-col-reverse sm:flex-row justify-between gap-y-2">
                <div className="flex flex-col justify-center  ">
                    <h1 className="text-teal-600 text-sm md:text-md"> <strong>#id</strong> {_id}</h1>
                    <div className="flex items-center gap-2 text-gray-400">
                        <i className="ri-truck-line block text-2xl "></i>
                        <p>shiped</p>
                    </div>
                </div>
                <h1 className="font-ibm font-semibold text-gray-700 whitespace-nowrap text-sm md:text-md">{formatDate(createdAt)}</h1>
            </div>
            <table className="mt-5">
                <tbody >

                    {OrderItems.map((items, ind) => (
                        <tr key={ind} className="flex items-center justify-between border-b-2 border-b-gray-200 pb-1 my-2 space-x-2">
                            <td >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-x-2 gap-y-1">
                                    <div className="w-10 h-10">
                                        <img src={items.img} alt="food" className="h-full w-full object-center object-cover " />
                                    </div>
                                    <p className="sm:max-w-36 w-20  text-sm  text-gray-600 font-semibold">{items.name}</p>

                                </div>
                            </td>
                            <td className="text-gray-400 font-semibold whitespace-nowrap "> {items.units} pcs</td>
                            <td className="text-gray-400 font-semibold whitespace-nowrap">Rs:- {items.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-y-4">
                <div className="flex items-center sm:items-start justify-center sm:justify-start ">
                    <p className="text-2xl text-red-400"><i className="ri-map-pin-user-line "></i></p>
                    <h1 className="w-full sm:max-w-64 text-gray-400 font-semibold text-center ">{DeliveryAddress}</h1>
                </div>
                <h1 className="text-gray-400 font-semibold">Total: <span className="text-gray-600">Rs:- {formatSrilankaPrice(TotalAmount)}</span></h1>
            </div>
        </div>
    )
}

export default CustomerOrderHistory