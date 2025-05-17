const DinnerFoodsArray = [
    {
        "name": "Parotta & Gravy",
        "description": "Soft parotta served with spicy chicken gravy and chutney.",
        "price": 150,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015982/d-1-barotta_rzoh5h.webp"
    },
    {
        "name": "Kottu Roti",
        "description": "Chopped roti with beef, eggs, vegetables, curry, and onions.",
        "price": 700,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015982/d-2-kottu_vaxt9o.webp"
    },
    {
        "name": "Egg Roti & Sambol",
        "description": "Flatbread with egg, pol sambol, and spicy curry with sauce.",
        "price": 250,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015982/d-3-egg-roti_avtu5a.webp"
    },
    {
        "name": "Egg Hoppers",
        "description": "Egg hoppers served with coconut milk gravy, sambol, and egg.",
        "price": 250,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015983/d-4-egg-hoppers_rfikuk.webp"
    },
    {
        "name": "String Hoppers",
        "description": "Soft string hoppers served with spicy curry, sambol, and meat.",
        "price": 300,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015984/d-5-string-hoppers_bxexwc.webp"
    },
    {
        "name": "Chicken Shawarma",
        "description": "Flatbread with chicken, garlic taste sauce, veggies, and spicy filling.",
        "price": 600,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016000/d-6-chicken-shawarama_hxm8yg.webp"
    },
    {
        "name": "Noodles with Egg",
        "description": "Stir-fried noodles with vegetables, egg, spices, and soy sauce.",
        "price": 450,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015988/d-7-noodles-egg_kjodob.webp"
    },
    {
        "name": "Chicken Roti Rolls",
        "description": "Spicy chicken wrapped in roti and grilled until crispy outside.",
        "price": 350,
        "image": "https://res.cloudinary.com/thanushan/image/upload/v1747015986/d-8-chicken-rotti_c7clx0.webp"
    }

]

const DinnerFoods = () => {
    return (
        <div
            id="breakFastDiv"
            className="food_item_container grid relative grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-5 lg:gap-y-5">
            {
                DinnerFoodsArray.map((food) => (
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

export default DinnerFoods