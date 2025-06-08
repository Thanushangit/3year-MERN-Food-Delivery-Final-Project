const HeroSection = () => {
    return (
        <section
            className="w-full min-h-screen relative bg-[url('https://res.cloudinary.com/thanushan/image/upload/v1747015998/flash-offer-bg_pmmrgl.webp')] bg-cover bg-center text-white"
        >
            {/* Black Overlay that matches section size */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/*  Content Layer (on top of black overlay)  */}
            <div className="relative z-10 flex items-center justify-between min-h-screen">
                <div
                    className="mycontainer flex flex-col-reverse md:flex-row items-center gap-5 md:gap-8 mt-15"
                >
                    <div className="hero_text w-full md:w-1/2 flex flex-col gap-y-3">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Enjoy our <br />
                            Authentic Biriyani
                        </h1>
                        <p>
                            Dive into layers of perfectly spiced rice, tender meat, and rich
                            tradition. Crafted with passion, served with love. Every bite
                            tells a story of flavor. 😋
                        </p>
                        <a
                            href="#PopularDishes"
                            className="flex items-center justify-center gap-2 py-3 px-4 outline-0 rounded-md bg-primary cursor-pointer duration-300 hover:bg-emerald-800 font-semibold w-full sm:w-fit text-xl text-center mb-5 shadow-2xl"
                        >
                            Order Now
                            <span><i className="fa-solid fa-arrow-right fa-beat"></i></span>
                        </a>
                    </div>
                    <div className="hero_image w-full md:w-1/2">
                        <img
                            className="w-2/3 md:7/12 lg:w-9/12 mx-auto shadow-2xl rotater"
                            src="https://res.cloudinary.com/thanushan/image/upload/v1747015997/flash-offer-biriyani_rl7fvr.webp"
                            alt="biriyani"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection