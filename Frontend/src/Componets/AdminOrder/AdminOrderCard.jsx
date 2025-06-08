const AdminOrderCard = () => {
    return (

        <tr
            className="border-b border-b-gray-300 text-gray-600 shadow mb-10 text-sm md:text-lg"
        >
            <td className="px-1 py-3">
                <p>First-name: sinnarasa</p>
                <p>Last-name: Thanushan</p>
            </td>
            <td className="px-1 py-3">
                punnalaikkadduvan north, chunnakam,jaffna punnalaikkadduvan
                north, chunnakam,jaffna
            </td>
            <td className="px-1 py-3">0764867457</td>
            <td className="px-1 py-3">
                <p>Pittu-<span>01</span></p>
                <p>veg rice-<span>05</span></p>
                <p>kottu rotti chicken-<span>01</span></p>
                <p>biriyani-<span>01</span></p>
            </td>
            <td className="px-1 py-3">Rs:-8546.00</td>
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