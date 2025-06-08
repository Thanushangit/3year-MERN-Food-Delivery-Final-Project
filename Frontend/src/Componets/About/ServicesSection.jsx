const ServicesSection = () => {
    return (
        <section className="my-10 sm:my-30 w-full bg-[#f9f6f2]">
            <div className="mycontainer md:!pb-0 flex items-center justify-start gap-20">

                {/* <!-- ← text content → --> */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-5 md:gap-10">
                    <div
                        className="py-2 px-4 md:py-4 md:px-6 flex items-center justify-center gap-3 bg-white rounded text-gray-900"
                    >
                        <h1 className="text-2xl md:text-3xl font-semibold text-center">
                            Services show <br />
                            good taste.
                        </h1>
                    </div>
                    <div
                        className="py-2 px-4 md:py-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-2 bg-white rounded text-gray-900"
                    >
                        <h1 className="text-3xl sm:text-6xl font-bold text-primary">586</h1>
                        <p className="text-lg text-gray-600 text-center">
                            Satisfied <br />Customers
                        </p>
                    </div>
                    <div
                        className="py-2 px-4 md:py-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-2 bg-white rounded text-gray-900"
                    >
                        <h1 className="text-3xl sm:text-6xl font-bold text-primary">04</h1>
                        <p className="text-lg text-gray-600 text-center">
                            Best <br />Restaurants
                        </p>
                    </div>
                    <div
                        className="py-2 px-4 md:py-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-x-4 gap-y-2 bg-white rounded text-gray-900"
                    >
                        <h1
                            className="text-3xl sm:text-6xl font-bold text-primary flex items-center justify-center"
                        >
                            2 <sup>K+</sup>
                        </h1>
                        <p className="text-lg text-gray-600 text-center">
                            Food <br />Deliveried
                        </p>
                    </div>
                </div>

                {/* <!-- ← image content → --> */}
                <div className="hidden lg:flex justify-end items-center md:w-1/2 mx-auto">
                    <div
                        className="md:w-[450px] md:h-[450px] w-64 h-64 rounded-full shadow mx-auto flex items-center justify-center overflow-hidden"
                    >
                        <img
                            src="https://res.cloudinary.com/thanushan/image/upload/v1747325320/surprise-girl_xbnpim.webp"
                            alt="image"
                            loading="lazy"
                            className="mt-15 mr-25 mx-auto object-bottom object-contain transform scale-130"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection