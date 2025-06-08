import { Link } from "react-router-dom";

const MyorderDeliverd = () => {
    return (
        <div className="container  w-full mt-5 h-full flex flex-col items-center justify-center text-center space-y-1">
            <div className="mb-5 w-44 h-44 rounded-full bg-[#f8f1f2] mx-auto flex items-center justify-center">
                <img
                    src="https://res.cloudinary.com/thanushan/image/upload/v1747115738/order-deliverd_h5hg9p.webp"
                    alt="order-deliverd"
                    loading="lazy"
                />
            </div>

            <h1 className="text-green-600 text-2xl md:text-3xl font-bold mb-1.5">
                Your Order Was Delivered Successfully!
            </h1>

            <p className="text-lg md:text-xl text-gray-600 text-center max-w-xl mx-auto">
                Thank you for your order! Your food has been delivered successfully.
                We hope you enjoyed your meal and look forward to serving you again soon.
            </p>
            <Link to="/user" title="Go to my order page" className="w-full md:w-64 sm:py-2 py-3 px-6 mb-20 bg-primary hover:border hover:text-primary hover:bg-transparent duration-300 transition rounded-md mx-auto text-white font-semibold mt-8">
                Order more
            </Link>

        </div>

    );
};

export default MyorderDeliverd;
