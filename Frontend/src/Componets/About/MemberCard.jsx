const Members = [
    {
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747325338/co-founder_y7kqkr.webp",
        name: "Aarav Sen",
        job: "Co-Founde"
    },
    {
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747325337/founder_wqpihf.webp",
        name: "Anaya Rajan",
        job: "Founder"
    },
    {
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747325334/manager_gy7g1b.webp",
        name: "Kavin Kumar",
        job: "Manager"
    },
    {
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747325344/marketing-manager_bkaljt.webp",
        name: " Nilan Fernando",
        job: "Marketing Executive"
    },
]

const MemberCard = () => {
    return (


        < div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 w-full mt-10"
        >
            {
                Members.map((mem, ind) => (
                    <div key={ind} title={`I am ${mem.name}`}
                        className="border-2 border-gray-300 p-5 flex flex-col items-start hover:border-primary duration-300 transition hover:cursor-pointer transform hover:scale-105"
                    >
                        <div className="h-full w-full xl:w-64 xl:h-64 overflow-hidden">
                            <img
                                src={mem.image}
                                alt={mem.job}
                                loading="lazy"
                                className="object-cover object-center h-full w-full rounded"
                            />
                        </div>
                        <h1 className="font-semibold text-2xl text-gray-800 mt-3">{mem.name}</h1>
                        <p className="text-lg text-gray-600">{mem.job}</p>

                        {/* <!-- ← social icon → --> */}
                        <div className="flex items-center justify-center gap-5 mt-5">

                            <a href="https://www.facebook.com/login" target="_blank" title="facebook" className="flex items-center justify-center h-10 w-10 p-2 rounded-full bg-gray-300 text-gray-600 text-lg hover:bg-[#1877f7] hover:text-white duration-300 transition-all">
                                <i className="ri-facebook-fill"></i>
                            </a>

                            <a href="https://twitter.com/login" target="_blank" title="twitter" className="flex items-center justify-center h-10 w-10 p-2 rounded-full bg-gray-300 text-gray-600 text-lg hover:bg-[#01a1f7] hover:text-white duration-300 transition-all">
                                <i className="ri-twitter-fill"></i>
                            </a>

                            <a href="https://www.instagram.com/accounts/login" target="_blank" title="instagram" className="flex items-center justify-center h-10 w-10 p-2 rounded-full bg-gray-300 text-gray-600 text-lg hover:text-pink-500 duration-300 transition-all">
                                <i className="ri-instagram-fill"></i>
                            </a>

                        </div>
                    </div>
                ))
            }

        </div >

    )
}

export default MemberCard