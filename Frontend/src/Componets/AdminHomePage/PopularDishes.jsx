import { formatSrilankaPrice } from "../../Util/PriceSeperator";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const PopularDishes = (props) => {
    const{id,img,title,price,description}=props.item;
    return (
        <div
            class="dishes_item group border-1 border-gray-300 hover:shadow-2xl cursor-pointer hover:-translate-y-1 transform transition duration-300 rounded-md overflow-hidden relative"
            title="Taste. Smile. Repeat. 😋"
        >
            <div class="h-1/3 w-auto overflow-hidden relative">
                <img
                    class="h-full w-full object-cover transform hover:scale-110 duration-500 transition"
                    src={img}
                    alt={title}
                    loading="lazy"
                />
            </div>

            <div class="p-2 flex flex-col mb-2 h-2/3">
                <div class="flex flex-col">
                    <h2 class="font-semibold text-lg font-cascadia">{title}</h2>
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
                    
                    <DeleteButton/>

                    <EditButton/>
                </div>
            </div>
        </div>
    )
}

export default PopularDishes