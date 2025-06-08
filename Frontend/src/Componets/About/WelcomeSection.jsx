import AboutWelcomtBtn from "./AboutWelcomtBtn"

const welcomeSection = () => {
    return (
        <section className="my-5 sm:my-20">
            <div className="mycontainer flex flex-col md:flex-row items-center gap-x-16 gap-y-10">
                {/* restaurant images */}
                <div className="grid grid-cols-2 overflow-hidden max-w-xl h-fit">
                    <div>
                        <img
                            src="https://res.cloudinary.com/thanushan/image/upload/v1747244396/restaurant-01_yk5oba.webp"
                            alt="restaurant-01"
                            className="w-full h-full object-center object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex items-center sm:justify-end justify-center">
                        <img
                            src="https://res.cloudinary.com/thanushan/image/upload/v1747244387/restaurant-02_hdhegc.webp"
                            alt="restaurant-02"
                            className="h-[7.5rem] w-[6.25rem] md:w-[7.5rem] lg:w-auto object-center object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex items-end md:justify-end justify-center">
                        <img
                            src="https://res.cloudinary.com/thanushan/image/upload/v1747244387/restaurant-04_zoxj81.webp"
                            alt="restaurant-04"
                            className="h-[7.5rem] w-[7.5rem] object-center object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex items-center justify-end">
                        <img
                            src="https://res.cloudinary.com/thanushan/image/upload/v1747244394/restaurant-03_t1tmex.webp"
                            alt="restaurant-03"
                            className="w-[8.75rem] h-[8.75rem] object-center object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* welcome content */}
                <div className="flex flex-col">
                    <div className="flex flex-col xl:flex-row items-center justify-center gap-x-3 gap-y-1 mb-4">
                        <h1 className="font-ibm text-2xl sm:text-4xl font-semibold text-center md:text-left sm:text-left">
                            Welcome to the
                        </h1>
                        <div className="flex-1">
                            <div className="flex items-center gap-2" title="Welcome 😊">
                                <div>
                                    <svg
                                        className="text-primary"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        {/* Icon from Huge Icons */}
                                        <path d="M18.5 3.002L15.06 6.442a1.5 1.5 0 000 2.12l.69.69M22 6.502l-3.44 3.44a1.5 1.5 0 01-2.12 0l-.69-.69M15.5 9.272L4 21.002M20 4.999l-2.5 2.5M7.99 8.99c-1.195 1.194-2.833 1.493-4.326 0S1.388 4.778 2.582 3.583C3.777 2.39 6.496 3.172 7.99 4.665s1.195 3.13 0 4.325M7.99 8.99L20 21.001M9.205 2.397A10 10 0 0112 2c1.152 0 2.258.195 3.288.553M2.049 11Q2 11.494 2 12c0 2.032.606 3.922 1.647 5.5m4.126 3.565c1.284.6 2.716.935 4.227.935a10 10 0 004.262-.951m4.09-3.549A9.95 9.95 0 0022 12q-.002-.868-.143-1.696" />
                                    </svg>
                                </div>
                                <a href="javascript:void(0)">
                                    <h1 className="font-ibm text-2xl sm:text-4xl font-semibold">
                                        Plate <span className="text-primary">zy</span>
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 text-lg font-ibm text-gray-500">
                        <p>
                            At Platezy, we believe that great food brings people together — and
                            now, it's just a click away! We're your trusted online food delivery
                            partner, serving fresh, flavorful meals right to your doorstep with
                            speed and care.
                        </p>
                        <p>
                            Whether you're craving a quick bite, a hearty dinner, or a sweet
                            treat, Platezy is here to satisfy your hunger with quality,
                            convenience, and a taste you'll love.
                        </p>
                        <p>
                            Thank you for choosing Platezy — <br />
                            <span>Your plate, our priority.</span>
                        </p>
                    </div>

                    {/* buttons container */}
                    <div className="w-full flex flex-col md:flex-row gap-x-3 gap-y-8 items-center justify-between mt-8">

                        <AboutWelcomtBtn year={7} content1={"Years of"} content2={"Experience"} />

                        <AboutWelcomtBtn year={6} content1={"Popular"} content2={"Master chefs"} />

                    </div>

                    {/* read more button */}
                    <button className="sm:w-xs md:py-5 md:px-4 p-3 mx-auto border-0 bg-primary text-white font-semibold text-xl cursor-pointer mt-12 uppercase rounded duration-300 transition hover:bg-amber-600">
                        read more
                    </button>

                </div>
            </div>
        </section>
    )
}

export default welcomeSection