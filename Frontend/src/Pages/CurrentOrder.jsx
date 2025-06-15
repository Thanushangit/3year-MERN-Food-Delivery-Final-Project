import axios from "axios"
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import MyorderEmpty from '../Componets/MyOrderPages/MyorderEmpty'
import MyorderOntheway from "../Componets/MyOrderPages/MyorderOntheway";
import MyorderCanceled from "../Componets/MyOrderPages/MyorderCanceled";
import MyorderDeliverd from "../Componets/MyOrderPages/MyorderDeliverd";
import MyorderPlaced from "../Componets/MyOrderPages/MyorderPlaced";
import socket from "../socket";


const CurrentOrder = () => {
    const [orderStatus, setOrderStatus] = useState("empty");

    useEffect(() => {
        const fetchOrder = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (user) {
                try {
                    const res = await axios.get(`http://localhost:3000/order/getSingleorder/${user.uid}`);
                    const order = res.data;


                    if (!order || !order.OrderStatus) {
                        setOrderStatus("empty");
                    } else {
                        setOrderStatus(order.OrderStatus.toLowerCase());
                    }

                } catch (err) {
                    if (err.response && err.response.status === 404) {
                        console.warn("No order found (probably deleted)");
                        setOrderStatus("empty");
                    } else {
                        console.error("Error fetching user order:", err);
                        setOrderStatus("empty");
                    }
                }
            }
        };

        fetchOrder();

        socket.on("orderAdded", () => {
            fetchOrder();
        });

        socket.on("orderUpdated", () => {
            fetchOrder();
        });

        socket.on("orderDeleted", () => {
            fetchOrder();
        });

        // Clean up listeners
        return () => {
            socket.off("orderAdded");
            socket.off("orderUpdated");
            socket.off("orderDeleted");
        };
    }, []);

    const renderComponent = () => {
        switch (orderStatus) {
            case "on-the-way":
                return <MyorderOntheway />;
            case "canceled":
                return <MyorderCanceled />;
            case "delivered":
                return <MyorderDeliverd />;
            case "placed":
                return <MyorderPlaced />;
            default:
                return <MyorderEmpty />;
        }
    };


    return (
        <div className="mycontainer">
            {renderComponent()}
        </div>
    )
}

export default CurrentOrder