import { useEffect, useState } from "react";
import AdminOrderCard from "../Componets/AdminOrder/AdminOrderCard"
import { loadOrderItems } from '../FetchLoaders/Fetchingdata'

const AdminOrdersPage = () => {
    const [DBdata, setDBdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadOrderItems();
            setDBdata(data);
        };
        fetchData();
    }, []);

    console.log("this db dat", DBdata)

    return (
        <section className="my-15 sm:my-20 relative ">
            <div className="mycontainer text-left overflow-x-scroll overflow-y-auto scroll-smooth max-h-[500px]">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-left text-sm md:text-base">
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Order ID</th>
                            <th className="px-4 py-2">Customer</th>
                            <th className="px-4 py-2">Address</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Items</th>
                            <th className="px-4 py-2">Total</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DBdata.map((item) => (
                                < AdminOrderCard item={item} />
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </section>

    )
}

export default AdminOrdersPage
