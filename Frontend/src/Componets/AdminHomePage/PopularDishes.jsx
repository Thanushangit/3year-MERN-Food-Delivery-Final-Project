import { formatSrilankaPrice } from "../../Util/PriceSeperator";
import DeleteButton from "./DeleteButton";

const PopularDishes = (props) => {
    const { _id, img, name, price, description } = props.item;

    const setShowDetailsStatus = props.setShowDetailsStatus;
    const setShowDetails = props.setShowDetails;

    function ButtonHandler(_id, img, name, price, description) {
        setShowDetailsStatus(true),
            setShowDetails({
                showid: { _id },
                showimg: { img },
                showtitle: { name },
                showprice: { price },
                showdescription: { description },
                category: "popular"

            })
    }


    return (
        <div
            class="dishes_item group border-1 border-gray-300 hover:shadow-2xl cursor-pointer hover:-translate-y-1 transform transition duration-300 rounded-md overflow-hidden relative"
            title="Taste. Smile. Repeat. 😋"
        >
            <div class="h-1/3 w-auto overflow-hidden relative">
                <img
                    class="h-full w-full object-cover transform hover:scale-110 duration-500 transition"
                    src={img}
                    alt={name}
                    loading="lazy"
                />
            </div>

            <div class="p-2 flex flex-col mb-2 h-2/3">
                <div class="flex flex-col">
                    <h2 class="font-semibold text-lg font-cascadia">{name}</h2>
                    <h5 class="font-bold text-xl text-primary">RS:-{formatSrilankaPrice(price)}</h5>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <div
                class="absolute top-0 left-0 w-full h-full bg-black/50 z-10 hidden group-hover:flex items-center justify-center transition-all duration-300"
            >
                <div class="flex items-center justify-center gap-5 w-full">

                    <button
                        onClick={() => ButtonHandler(_id, img, name, price, description)}
                        title="Edit the item"
                        class="sm:w-12 w-8 sm:h-12 h-8 rounded-full bg-green-500 flex items-center justify-center text-gray-100 hover:cursor-pointer sm:text-xl text-md hover:bg-green-700"
                    >
                        <i class="ri-edit-2-line"></i>
                    </button>

                    <DeleteButton id={_id} title={name} category="popular" />


                </div>
            </div>

        </div>
    )
}

export default PopularDishes