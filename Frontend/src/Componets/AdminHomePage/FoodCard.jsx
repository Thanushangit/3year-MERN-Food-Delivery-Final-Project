import React from 'react'
import DeleteButton from './DeleteButton'
import { formatSrilankaPrice } from '../../Util/PriceSeperator';

const FoodCard = (props) => {
    const{id,name,description,price,image}=props.item;
    return (
        <div
            class="food_item flex relative group items-center overflow-hidden rounded border-b-2 border-r-2 border-gray-300/80 group-hover:shadow-md"
        >
            <div class="h-25 w-40 relative">
                <img
                    class="w-full h-full object-center object-cover group-hover:scale-110 transition-all duration-300"
                    src={image}
                    alt={name}
                    loading="lazy"
                />
            </div>
            <div
                class="flex flex-col py-0.5 md:py-1 px-2 sm:px-3 md:px-4 lg:px-5"
            >
                <h1 class="font-bold text-lg lg:text-2xl font-cascadia">
                    {name}
                </h1>
                <p>{description}</p>
                <h1 class="text-primary font-semibold">Rs:-{formatSrilankaPrice(price)}</h1>
            </div>
            <div
                class="absolute top-0 left-0 w-full h-full bg-black/50 z-10 hidden group-hover:flex items-center justify-center transition-all duration-300"
            >
                <div class="flex items-center justify-center gap-5 w-full">

                    <DeleteButton />

                   


                </div>
            </div>
        </div>
    )
}

export default FoodCard