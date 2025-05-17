const LunchFoodsArray=[
     {
      "id": 1,
      "name": "Veg Rice & Curry",
      "description": "Steamed rice with dhal, vegetables, and spicy sambol.",
      "price": 300,
      "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016012/lu-1-_rice-curry_l2fqb5.webp"
    },
    {
      "id": 2,
      "name": "Chicken Biryani",
      "description": "Flavored rice with chicken, egg, salad, and spicy gravy.",
      "price": 700,
      "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016016/lu-2-_chicken-biriyani_kk5ftn.webp"
    },
    {
      "id": 3,
      "name": "Egg Fried Rice",
      "description": "Stir-fried rice with egg, vegetables, and spicy sauce.",
      "price": 400,
      "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016018/lu-3-_egg-rice_aehzq8.webp"
    },
    {
      "id": 4,
      "name": "Fish Rice & Curry",
      "description": "Rice with fish curry, brinjal moju, beans, and sambol.",
      "price": 350,
      "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016019/lu-4-_fish-rice_epawls.webp"
    },
    {
      "id": 5,
      "name": "Vegetable Biryani",
      "description": "Spiced rice with mixed vegetables, raita, and curry.",
      "price": 500,
      "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016020/lu-5-_rice-curryveg-biryani_uvou9i.webp"
    },
    {
      "id": 6,
      "name": "Dhal Curry & Rice",
      "description": "Steamed rice with dhal curry, salad, chilies, papadam.",
      "price": 250,
      "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016022/lu-6-dhal-curry_hmveji.webp"
    },
    {
      "id": 7,
      "name": "Pittu with Sambol",
      "description": "Soft pittu with sambol, coconut milk, curry, and banana.",
      "price": 300,
      "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016023/lu-7-_piitu_nlnlpt.webp"
    },
    {
      "id": 8,
      "name": "Seafood Fried Rice",
      "description": "Fried rice with prawns, cuttlefish, vegetables, egg, sauce.",
      "price": 800,
      "image": "https://res.cloudinary.com/thanushan/image/upload/v1747016023/lu-8-_seafood_trhgbv.webp"
    }
]

const LunchFoods = () => {
    return (
        <div
            id="breakFastDiv"
            className="food_item_container grid relative grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-5 lg:gap-y-5">
            {
                LunchFoodsArray.map((food) => (
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

export default LunchFoods