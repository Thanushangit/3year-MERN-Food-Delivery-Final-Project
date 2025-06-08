const MobileAppSection = () => {
  return (
    <div> <section className="my-10 sm:my-20">
                <div
                    className="mycontainer flex flex-col-reverse md:flex-row gap-5 md:gap-8 items-center md:justify-between justify-center w-full"
                >
                    {/* <!-- text content  --> */}
                    <div className="mobile_content w-full md:w-2/3 flex flex-col gap-5">
                        <h2
                            className="text-2xl md:text-4xl uppercase transform inline-block free-delivery-animation"
                        >
                            free delivery!
                        </h2>
                        <h1 className="text-3xl md:text-6xl font-bold uppercase">
                            Download the app now!
                        </h1>
                        <p className="text-gray-800 text-lg">
                            Get your favorite meals delivered fast and fresh - right from your
                            phone. Order in seconds, track in real-time, and enjoy exclusive
                            app-only deals
                        </p>
                        <div className="flex items-center flex-col md:flex-row gap-5 md:gap-8">
                            {/* <!-- Play Store --> */}
                            <div
                                className="w-full overflow-hidden rounded-lg hover:opacity-90"
                                title="Go to the Play store"
                            >
                                <a
                                    href="https://play.google.com/store/apps?hl=en"
                                    target="_blank"
                                >
                                    <img
                                        src="https://res.cloudinary.com/thanushan/image/upload/v1747016024/play-store_szg8iy.webp"
                                        alt="play store"
                                        className="object-contain"
                                        loading="lazy"
                                    />
                                </a>
                            </div>

                            {/* <!-- App Store --> */}
                            <div
                                className="w-full overflow-hidden rounded-lg hover:opacity-90"
                                title="Go to the App store"
                            >
                                <a href="https://www.apple.com/app-store/" target="_blank">
                                    <img
                                        src="https://res.cloudinary.com/thanushan/image/upload/v1747015973/app-store_rekz7f.webp"
                                        alt="app store"
                                        className="w-full object-contain"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- img content  --> */}
                    <div className="mobile w-full md:w-1/3 flex justify-center">
                        <div>
                            <img
                                title="Mobile App screen view"
                                src="https://res.cloudinary.com/thanushan/image/upload/v1747017779/mobile_ss_ezrfx6.webp"
                                alt="mobile screen shot"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section></div>
  )
}

export default MobileAppSection