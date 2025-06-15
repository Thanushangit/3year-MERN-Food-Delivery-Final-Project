import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import socket from "../socket";
import { customerOrderHistory } from "../FetchLoaders/Fetchingdata";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import CustomerOrderHistory from "../Componets/MyOrderPages/CustomerOrderHistory";

const OrderHistory = () => {

    const [customerOrder, setCustomerOrder] = useState([])

    const FindOrderCount = (order) => {

        return order <= 9 ? `0${order}` : order;

    }




    const auth = getAuth();

    useEffect(() => {
        let unsubscribeSocketEvents = null;

        const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const fetchData = async () => {
                    const data = await customerOrderHistory(uid);
                    setCustomerOrder(data);

                };

                fetchData();

                // Attach socket listeners
                socket.on("orderAdded", fetchData);
                socket.on("orderUpdated", fetchData);
                socket.on("orderDeleted", fetchData);

                // Save cleanup function for socket
                unsubscribeSocketEvents = () => {
                    socket.off("orderAdded", fetchData);
                    socket.off("orderUpdated", fetchData);
                    socket.off("orderDeleted", fetchData);
                };
            } else {
                console.log("User is not signed in");
            }
        });

        // Clean up everything when component unmounts
        return () => {
            unsubscribeAuth();
            if (unsubscribeSocketEvents) unsubscribeSocketEvents();
        };

    }, []);


    return (
        <div className="p-3 w-full  h-full flex flex-col    space-y-3 bg-gray-200 mt-10">

            {/* it show past order is empty  */}

            {customerOrder?.length <= 0 && <h1 className="text-2xl md:text-4xl text-center my-5 text-gray-500">Your order history is empty!
            </h1>}

            {/* it show when the past order exist  */}

            {customerOrder?.length > 0 &&

                <div>
                    <h1 className="justify-self-start text-2xl font-cascadia text-gray-600 mb-6">Orders <span className="inline">{FindOrderCount(customerOrder.length)}</span></h1>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-12">

                        {

                            customerOrder.map((order, ind) => (
                                <CustomerOrderHistory key={ind} order={order} />
                            ))
                        }

                    </div>



                </div>}

            <Link title="Order Food" to="/user" className="flex items-center justify-center gap-2 w-full md:w-60 mb-3 sm:py-2 py-3 px-6  bg-green-500 hover:border hover:text-green-500 hover:bg-transparent duration-300 transition rounded-md mx-auto text-white font-semibold mt-8">

                <i className="ri-arrow-left-long-fill"></i>
                <p>Start New Order</p>
            </Link>

        </div>
    )
}

export default OrderHistory