import { useEffect, useState } from "react";
import AdminOrderCard from "../Componets/AdminOrder/AdminOrderCard"
import { loadOrderItems } from '../FetchLoaders/Fetchingdata'
import OrderEmpty from "../Componets/AdminOrder/OrderEmpty";

const AdminOrdersPage = () => {
    const [DBdata, setDBdata] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const data = await loadOrderItems();
            setDBdata(data);
        };
        fetchData();
    }, []);


    const handleDelete = (id) => {
        setDBdata((prev) => prev.filter((order) => order._id !== id));
    };




    return (
        <section className="mt-15 sm:mt-20 ">
            <div className="mycontainer text-left overflow-x-scroll overflow-y-auto scroll-smooth max-h-[500px] ">
                {
                    DBdata.length > 0 ? (
                        <table className="w-full table-auto border-collapse relative">
                            <thead className="sticky -top-5 right-0 z-10">
                                <tr className="bg-gray-100 text-sm md:text-base">
                                    <th className="px-4 py-2 ">Date</th>
                                    <th className="px-4 py-2">Order ID</th>
                                    <th className="px-4 py-2">Customer</th>
                                    <th className="px-4 py-2">Address</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Phone</th>
                                    <th className="px-4 py-2">Items</th>
                                    <th className="px-4 py-2">Total</th>
                                    <th className="px-4 py-2">Status</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DBdata.length > 0 &&
                                    DBdata.map(item => (
                                        <AdminOrderCard key={item._id} item={item} onDelete={handleDelete} />
                                    ))
                                }
                            </tbody>

                        </table>

                    ) : (
                        <OrderEmpty/>
                    )
                }


            </div>
        </section>

    )
}

export default AdminOrdersPage
