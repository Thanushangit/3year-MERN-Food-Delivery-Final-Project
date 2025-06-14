import { Link } from "react-router-dom";

const MyorderCanceled = () => {
    return (
        <div className="mycontainer w-full h-full flex flex-col items-center justify-center text-center space-y-3">
            <div className=" w-44 h-44 rounded-full bg-[#f8f1f2] mx-auto flex items-center justify-center ">
                <div className="w-32 h-32 rounded-full bg-[#e01d48] flex items-center justify-center text-white font-bold text-6xl">
                    <i className="ri-close-line"></i>
                </div>
            </div>

            <h1 className="text-[#e01d48] text-2xl md:text-3xl font-bold ">
                Your Order Cancelled by Restaurant.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 text-center max-w-xl mx-auto">
                We're sorry! This order was cancelled by the restaurant due to unforeseen circumstances such as item unavailability or operational issues. Thank you for your understanding!
            </p>

            <Link title="Go to my order page" to="/user" className="w-full md:w-64 sm:py-2 py-3 px-6 mb-20 bg-primary hover:border hover:text-primary hover:bg-transparent duration-300 transition rounded-md mx-auto text-white font-semibold mt-8">
            Try again
            </Link>

        </div>

    );
};

export default MyorderCanceled;
