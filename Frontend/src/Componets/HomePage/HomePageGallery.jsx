const GalleryContainer = [
    {
        "id": 1,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015993/gallery-01_xr4di7.webp",
        "para": "Stuffed delight",
        "heading": "Spicy Burrito Wrap"
    },
    {
        "id": 2,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016014/gallery-02_crmtsz.webp",
        "para": "Traditional flavor",
        "heading": "Classic Heritage Dish"
    },
    {
        "id": 3,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016000/gallery-03_tzbqbw.webp",
        "para": "Savory Street Noodles",
        "heading": "Quick meal"
    },
    {
        "id": 4,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016032/gallery-04_h6tzaj.webp",
        "para": "Party vibes",
        "heading": "Festive Feast Time"
    },
    {
        "id": 5,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016005/gallery-05_f8xp0f.webp",
        "para": "Juicy & tender",
        "heading": "Grilled Chicken Roast"
    },
    {
        "id": 6,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016027/gallery-06_g6eaf0.webp",
        "para": "Melty goodness",
        "heading": "Cheesy Crust Pizza"
    },
    {
        "id": 7,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016029/gallery-07_q2tjn0.webp",
        "para": "Hearty bite",
        "heading": "Stacked Beef Burger"
    },
    {
        "id": 8,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016017/gallery-08_zh4xhm.webp",
        "para": "Creamy layers",
        "heading": "Sweet Celebration Cake"
    }
]

const HomePageGallery = () => {
    return (
        <section className="my-10 sm:my-20 w-full">
            <h1 className="text-center text-3xl sm:text-4xl font-bold mb-3">
                Our Gallery
            </h1>
            <div className="mycontainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
                {
                    GalleryContainer.map((gallery) => (
                        <div
                            key={gallery.id} className="gallery_item relative h-96 md:h-[476px] overflow-hidden group"
                        >
                            {/* <!-- Scalable background image --> */}
                            <div
                                style={{ backgroundImage: `url(${gallery.image})` }}
                                className="h-full w-full bg-cover bg-center transition-transform duration-[2000ms] ease-in-out group-hover:scale-125"
                            />

                            {/* <!-- Overlay that fades in --> */}
                            <div
                                className="absolute top-0 left-0 h-full w-full bg-transparent transition-colors ease-in-out duration-300 group-hover:bg-black/50 flex flex-col items-center justify-center"
                            >
                                <div
                                    className="group-hover:block hidden transition-all duration-300 ease-in-out text-white font-semibold text-center space-y-5"
                                >
                                    <p className="text-lg">{gallery.para}</p>
                                    <h1 className="text-2xl">{gallery.heading}</h1>
                                    <button
                                        className="gallerybtn border-0 cursor-pointer py-2 px-4 uppercase transition-all duration-300 ease-in-out rounded-md"
                                    >
                                        view all collection
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default HomePageGallery