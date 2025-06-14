import axios from "axios"
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import MyorderEmpty from '../Componets/MyOrderPages/MyorderEmpty'
import MyorderOntheway from "../Componets/MyOrderPages/MyorderOntheway";
import MyorderCanceled from "../Componets/MyOrderPages/MyorderCanceled";
import MyorderDeliverd from "../Componets/MyOrderPages/MyorderDeliverd";
import MyorderPlaced from "../Componets/MyOrderPages/MyorderPlaced";


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
                    console.log("the order status", order.OrderStatus);

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

        const interval = setInterval(fetchOrder, 500);
        return () => clearInterval(interval);
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