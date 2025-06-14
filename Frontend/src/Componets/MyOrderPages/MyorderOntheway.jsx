import { Link } from "react-router-dom";

const MyorderOntheway = () => {
    return (
        <div className="mycontainer w-full  h-full flex flex-col items-center justify-center text-center space-y-3">
            <div className="bg-[#f7f3ed] overflow-hidden h-44 w-44 rounded-full ">
                <img
                    className="w-full h-full object-cover object-center scale-x-[-1]"
                    src="https://res.cloudinary.com/thanushan/image/upload/v1747115739/delivery-bike_ncbkil.webp"
                    alt="bike-image"
                    loading="lazy"
                />
            </div>

            <h1 className="text-yellow-600 text-2xl md:text-3xl font-bold">
                Your Order Is On The Way!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-xl mx-auto">
                Great news! Your food is on its way and will be delivered shortly. Sit
                tight and get ready to enjoy a delicious meal prepared just for you.
            </p>

            <Link title="Go to my order page" to="/user" className="w-full md:w-64 sm:py-2 py-3 px-6 mb-20 bg-primary hover:border hover:text-primary hover:bg-transparent duration-300 transition rounded-md mx-auto text-white font-semibold mt-4">
                Order more
            </Link>

        </div>
    );
};

export default MyorderOntheway;
