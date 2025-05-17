const BreakFastFoodsArray = [
    {
        "id": 1,
        "name": "Dosai",
        "description": "Thin, crispy rice pancake served with chutney, sambar.",
        "price": 100,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015975/bf-1-Dosai_uko4q5.webp"
    },
    {
        "id": 2,
        "name": "Idli",
        "description": "Soft steamed rice cakes, light and healthy breakfast.",
        "price": 80,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015976/bf-2-idli_br3y7s.webp"
    },
    {
        "id": 3,
        "name": "Pittu",
        "description": "Steamed rice flour with coconut, served with curry.",
        "price": 120,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015976/bf-3-pittu_seb7fk.webp"
    },
    {
        "id": 4,
        "name": "Hoppers",
        "description": "Fermented rice pancake, crispy edges and soft center.",
        "price": 100,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015978/bf-4-hoppers_dwfrlm.webp"
    },
    {
        "id": 5,
        "name": "Vadai",
        "description": "Crunchy lentil fritter, spicy and deep-fried goodness.",
        "price": 60,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015978/bf-5-vadai_hx9zgp.webp"
    },
    {
        "id": 6,
        "name": "String Hoppers",
        "description": "Steamed rice noodles, often served with coconut milk.",
        "price": 100,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015979/bf-6-string-hoppers_ixssmk.webp"
    },
    {
        "id": 7,
        "name": "Roti",
        "description": "Coconut flatbread, eaten with lunu miris or spicy curry.",
        "price": 80,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015980/bf-7-roti_lajf3n.webp"
    },
    {
        "id": 8,
        "name": "Chapati",
        "description": "Wheat flatbread, soft and warm, paired with soya curry.",
        "price": 70,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015979/bf-8-chapati_wskze9.webp"
    }
]

const BreakFastFoods = () => {
    return (
        <div
            id="breakFastDiv"
            className="food_item_container grid relative grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-5 lg:gap-y-5">

            {
                BreakFastFoodsArray.map((food) => (
                    <div
                        key={food.id} className="relative food_item flex items-center overflow-hidden rounded border-b-2 border-r-2 border-gray-300/80 hover:shadow-md"
                    >
                        <div className="h-25 w-40">
                            <img
                                className="w-full h-full object-center object-cover"
                                src={food.image}
                                alt={food.name}
                                loading="lazy"
                            />
                        </div>
                        <div
                            className="flex flex-col py-0.5 md:py-1 px-2 sm:px-3 md:px-4 lg:px-5"
                        >
                            <h1 className="font-bold text-lg lg:text-2xl font-cascadia">{food.name}</h1>
                            <p>{food.description}</p>
                            <h1 className="text-primary font-semibold">Rs:-{food.price}</h1>
                        </div>
                        <button
                            title="Order Now"
                            className="w-12 md:w-15 mr-2 lg:mr-1 aspect-square rounded-full flex items-center justify-center bg-primary outline-0 font-bold text-white hover:border-2 hover:border-primary hover:bg-transparent hover:text-green-800 cursor-pointer duration-300 transition ease-in-out"
                        >
                            +
                        </button>
                    </div>
                ))
            }



        </div>
    )
}

export default BreakFastFoods