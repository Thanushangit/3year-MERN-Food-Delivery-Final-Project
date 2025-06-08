import MyorderEmpty from "../Componets/MyOrderPages/MyorderEmpty";
import MyorderOntheway from "../Componets/MyOrderPages/MyorderOntheway";
import MyorderCanceled from "../Componets/MyOrderPages/MyorderCanceled";
import MyorderDeliverd from "../Componets/MyOrderPages/MyorderDeliverd";
import MyorderPlaced from "../Componets/MyOrderPages/MyorderPlaced";
import { useSelector } from "react-redux";

const MyOrder = () => {
    const orderStatus = useSelector((sta) => sta.orderStatus.orderStatus)

    const renderComponent = () => {
        switch (orderStatus) {
            case "ontheway":
                return <MyorderOntheway />
            case "canceled":
                return <MyorderCanceled />
            case "delivered":
                return <MyorderDeliverd />
            case "placed":
                return <MyorderPlaced />
            default:
                return <MyorderEmpty />
        }
    }


    return (
        <section className="flex flex-col items-center justify-center mt-20 sm:mt-15">
            <h1 className="font-ibm text-3xl md:text-4xl sm:mt-12">Your order status</h1>
            {renderComponent()}
        </section>
    );
};

export default MyOrder;
