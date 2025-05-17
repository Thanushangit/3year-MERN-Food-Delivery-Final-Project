const Dishes = [
    {
        id: "01",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747016025/popular-01_lv4jvs.webp",
        title: "Pasta",
        price: "RS:-625",
        description: "Versatile Italian pasta made from durum wheat in various shapes.",
    },
    {
        id: "02",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015973/popular-02_buleiq.webp",
        title: "Pizza",
        price: "RS:-1500",
        description: "Italian flatbread with tomato, cheese, and assorted savory toppings.",
    },
    {
        id: "03",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015972/popular-03_rruznz.webp",
        title: "Burger",
        price: "RS:-1,200",
        description: "Grilled beef patty with lettuce, tomatoes, cheese, and toasted bun.",
    },
    {
        id: "04",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015973/popular-04_pcu1vx.webp",
        title: "Sushi",
        price: "RS:-2,650",
        description: "Japanese rice dish with seafood, vegetables, and fruits.",
    },
    {
        id: "05",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015973/popular-05_cbzusc.webp",
        title: "Tacos",
        price: "RS:-700",
        description: "Mexican tortilla filled with meat, beans, cheese, and more.",
    },
    {
        id: "06",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015975/popular-06_ro7jym.webp",
        title: "Rice",
        price: "RS:-1,170",
        description: "Chicken pieces coated in seasoned batter and deep-fried until crispy.",
    },
    {
        id: "07",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015981/popular-07_xjuqkl.webp",
        title: "Steak",
        price: "RS:-1,650",
        description: "A cut of meat, usually beef, cooked by grilling, pan-frying, or broiling.",
    },
    {
        id: "08",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015974/popular-08_ch1gdl.webp",
        title: "Ramen",
        price: "RS:-1,842",
        description: "Japanese noodle soup with wheat noodles in meat or fish broth.",
    },
    {
        id: "09",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015975/popular-09_tdfplo.webp",
        title: "Salad",
        price: "RS:-3,250",
        description: "A dish consisting of a mixture of small pieces of food, typically vegetables or fruits.",
    },
    {
        id: "10",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015977/popular-10_gdsqzo.webp",
        title: "Biryani",
        price: "RS:-1,100",
        description: "Two or more slices of bread with one or more fillings between them.",
    },
    {
        id: "11",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015977/popular-11_hdyjhx.webp",
        title: "Lasagna",
        price: "RS:-1,500",
        description: "Italian dish with layered pasta, sauce, meat, vegetables, and cheese.",
    },
    {
        id: "12",
        img: "https://res.cloudinary.com/thanushan/image/upload/v1747015977/popular-12_hk8b7w.webp",
        title: "Falafel",
        price: "RS:-300",
        description: "Deep-fried ball or patty made from ground chickpeas or fava beans.",
    },
];


const PopularDishes = () => {
    return (
        <section className="my-10 sm:my-20 bg-[#e9ecef]">
            <div className="container">
                <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 sm:mb-8 font-bold font-ibm">
                    Populer Dishes
                </h1>
                <div className="grid grid-rows-1 w-full">
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 mb-5 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-x-5 gap-y-7 md:gap-y-10"
                    >
                        {/* items  */}
                        {
                            Dishes.map((food) => (
                                <div
                                    key={food.id} className="group dishes_item border-1 border-gray-300 hover:shadow-2xl cursor-pointer hover:-translate-y-1 transform transition duration-300 rounded-md overflow-hidden relative"
                                    title="Taste. Smile. Repeat. 😋"
                                >
                                    <div className="h-1/3 w-auto overflow-hidden">
                                        <img
                                            className="h-full w-full object-cover transform group-hover:scale-110 duration-500 transition"
                                            src={food.img}
                                            alt={food.title}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-2 flex flex-col mb-2 h-2/3">
                                        <div className="flex flex-col relative">
                                            <h2 className="font-semibold text-lg font-cascadia">{food.title}</h2>
                                            <h5 className="font-bold text-xl text-primary">{food.price}</h5>
                                            <p>{food.description}</p>
                                            <button
                                                className="absolute h-7 w-7 md:h-10 md:w-10 top-0 right-0 rounded-full bg-primary outline-0 font-bold text-white hover:border-2 hover:border-primary hover:bg-transparent hover:text-green-800 cursor-pointer duration-300 transition"
                                                title="Order Now"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularDishes