import { useEffect, useState } from "react";
import AdminOrderCard from "../Componets/AdminOrder/AdminOrderCard"
import { loadOrderItems } from '../FetchLoaders/Fetchingdata'
import { Link } from "react-router-dom";
import socket from '../socket'

const AdminOrdersPage = () => {
    const [DBdata, setDBdata] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const data = await loadOrderItems();
            setDBdata(data);
        };

        fetchData();

        socket.on("orderAdded", () => {
            fetchData();
        });

        socket.on("orderUpdated", () => {
            fetchData();
        });

        socket.on("orderDeleted", () => {
            fetchData();
        });

        // Clean up listeners
        return () => {
            socket.off("orderAdded");
            socket.off("orderUpdated");
            socket.off("orderDeleted");
        };
    }, []);



    const handleDelete = (id) => {
        setDBdata((prev) => prev.filter((order) => order._id !== id));
    };




    return (
        <section className="mt-15 sm:mt-20 ">
            <div className={`mycontainer text-left ${DBdata.length > 0 ? "overflow-x-scroll overflow-y-auto scroll-smooth max-h-[500px] " : ""} `}>
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
                        <div className="mycontainer w-full h-full flex flex-col items-center justify-center text-center space-y-2">
                            <div className="overflow-hidden p-2 w-44 h-44 md:w-64 md:h-64">
                                <img
                                    className="w-72 object-cover object-center scale-x-[-1]"
                                    src="https://res.cloudinary.com/thanushan/image/upload/v1749704173/admin_empty_xezemz.webp"
                                    alt="No orders illustration"
                                    loading="lazy"
                                />
                            </div>

                            <h1 className="text-yellow-600 text-2xl md:text-3xl font-bold">No Orders Found</h1>
                            <p className="text-lg md:text-xl text-gray-600 text-center max-w-xl mx-auto">
                                There are currently no customer orders. Once a user places an order, it will appear here for your review and processing.
                            </p>

                            <Link
                                title="Go to Dashboard"
                                to="/admin/dashboard"
                                className="flex items-center justify-center gap-2 w-full md:w-60 sm:py-2 py-3 px-6 bg-primary hover:border hover:text-primary hover:bg-transparent duration-300 transition rounded-md mx-auto text-white font-semibold mt-4"
                            >
                                <i className="ri-arrow-left-long-fill"></i>
                                <p>Back to Dashboard</p>
                            </Link>
                        </div>

                    )
                }

            </div>
        </section>

    )
}

export default AdminOrdersPage
