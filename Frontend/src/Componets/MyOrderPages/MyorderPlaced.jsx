import { Link } from "react-router-dom"

const MyorderPlaced = () => {
    return (
        <section className=" flex items-center justify-center  ">
            <div
                className="mycontainer w-full h-ful flex-col items-center justify-center text-center space-y-3"
            >
                <div
                    className="mb-5 w-44 h-44 rounded-full bg-[#e7f8e6] mx-auto flex items-center justify-center"
                >
                    <div
                        className="w-32 h-32 rounded-full bg-[#21ac15] flex items-center justify-center text-white font-bold text-6xl"
                    >
                        <i className="fa-solid fa-check"></i>
                    </div>
                </div>
                <h1 className="text-[#21ac15] text-3xl font-bold">
                    Your Order Placed Successfully.
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                    Your food is being prepared! Our team will contact you if needed.
                </p>




                <Link title="Go to home page" to="/user" >
                    <div
                        className="w-full md:w-sm sm:py-2 py-3 px-6 border border-primary text-primary hover:bg-primary hover:text-white duration-300 transition rounded-md mx-auto font-semibold mt-4 md:mt-8 mb-20"
                    >
                        Order More Food
                    </div>
                </Link>

            </div>
        </section>
    )
}

export default MyorderPlaced