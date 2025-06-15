const OrderEmpty = () => {
    return (
        <div className="container w-full mt-5 h-full flex flex-col items-center justify-center text-center space-y-3">
            <div className="overflow-hidden p-5">
                <img
                    className="w-72 object-cover object-center scale-x-[-1]"
                    src="https://res.cloudinary.com/thanushan/image/upload/v1747115739/not-order-yet_iqjy8w.webp"
                    alt="No orders illustration"
                    loading="lazy"
                />
            </div>

            <h1 className="text-yellow-600 text-2xl md:text-3xl font-bold">No Orders Yet</h1>
            <p className="text-lg md:text-xl text-gray-600 text-center max-w-xl mx-auto">
                You haven't placed any orders yet. Browse our menu and add something tasty to your cart to get started!
            </p>

            <Link title="Order Food" to="/user" className="flex items-center justify-center gap-2 w-full md:w-60 sm:py-2 py-3 px-6 mb-20 bg-primary hover:border hover:text-primary hover:bg-transparent duration-300 transition rounded-md mx-auto text-white font-semibold mt-4">

                <i className="ri-arrow-left-long-fill"></i>
                <p>Order Now</p>
            </Link>




        </div>
    )
}

export default OrderEmpty