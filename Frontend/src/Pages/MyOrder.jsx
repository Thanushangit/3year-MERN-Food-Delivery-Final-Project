import MyorderEmpty from "../Componets/MyorderEmpty";
import MyorderOntheway from "../Componets/MyorderOntheway";
import MyorderCanceled from "../Componets/MyorderCanceled";
import MyorderDeliverd from "../Componets/MyorderDeliverd";
import CustomerNavbar from "../Componets/CustomerNavbar";

const MyOrder = () => {
    return (
        <div>
            <CustomerNavbar />
            <section className="flex flex-col items-center justify-center mt-20 sm:mt-15">
                <h1 className="font-ibm text-3xl md:text-4xl sm:mt-12">Your order status</h1>

                <MyorderEmpty />
                {/* <MyorderOntheway /> */}
                {/* <MyorderCanceled /> */}
                {/* <MyorderDeliverd /> */}

            </section>
        </div>
    )
}

export default MyOrder