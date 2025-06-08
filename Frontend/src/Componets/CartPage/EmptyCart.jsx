import { Link } from 'react-router-dom'

const EmptyCart = () => {
   
    return (
        <div
            className="flex w-full h-full flex-col items-center justify-center mt-10"
        >
            <div>
                <img
                    className="w-44 md:w-56"
                    src="https://res.cloudinary.com/thanushan/image/upload/v1747068932/empty-cart_pl0k88.webp"
                    alt="empty-cart"
                    loading="lazy"
                />
            </div>
            <h1 className="font-semibold text-3xl">
                Your cart is <span className="text-red-600">empty!</span>
            </h1>
            <p className="text-center text-lg text-gray-800 my-4 md:max-w-xl">
                Your cart is empty! Add some delicious food to get started explore our
                top categories now.
            </p>
            <Link title="Go home" to={"/user"}>
            <div
                className="mt-2 flex items-center gap-2 py-2 px-8 rounded-full bg-primary hover:bg-amber-600 duration-300 transition cursor-pointer text-white text-lg mb-20">
                    <i className="ri-arrow-left-long-fill"></i>
                    <p className="uppercase font-semibold">Return to home</p>
                </div>
            </Link>
           
        </div>
    )
}

export default EmptyCart