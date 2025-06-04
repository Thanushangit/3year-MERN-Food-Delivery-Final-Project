import { useState } from "react";
import {formatSrilankaPrice} from '../../Util/PriceSeperator'

const OrderFoodCard = ({ details, FilterItems }) => {

    const { image, title, price, id } = details;

    const [singleFoodCount, setSingleFoodCount] = useState(1)
    function formatTwoDigit(num) {
        return num < 10 ? `0${num}` : `${num}`;
    }


    function Food_Decrease_Handler() {
        if (singleFoodCount > 1) {
            setSingleFoodCount(pre => pre - 1)
        }
    }


    return (
        <tr
            className="border-b border-b-gray-300 text-gray-600 shadow py-5 text-sm md:text-lg"
        >
            <td className="py-4 md:py-6 h-fit">
                <div
                    className="flex flex-col md:flex-row items-start md:items-center justify-start gap-x-3"
                >
                    <div
                        className="md:h-20 md:w-25 h-15 w-20 overflow-hidden shadow-md rounded-sm"
                    >
                        <img
                            className="w-full h-full object-cover object-center"
                            src={image}
                            alt="String Hoppers"
                            loading="lazy"
                        />
                    </div>
                    <h1
                        className="md:text-lg font-semibold max-w-30 md:max-w-60 h-fit"
                    >
                        {title}
                    </h1>
                </div>
            </td>
            <td className="font-semibold">Rs:-{formatSrilankaPrice(price)}</td>
            <td>
                <div
                    className="flex justify-center items-center gap-x-0 md:h-10 md:w-30 h-8 w-20 font-semibold"
                >
                    <button onClick={() => Food_Decrease_Handler()}
                        title="Decrease"
                        className="hidden md:flex h-6 w-6 items-center justify-center rounded-full border border-primary cursor-pointer hover:border-orange-600 transition duration-150"
                    >
                        -
                    </button>
                    <input
                        className="md:w-12 w-12 text-center outline-1 rounded-sm md:outline-0 md:outline-gray-50 xl:pl-1.5 xl:ml-1.5"
                        type="number"
                        value={formatTwoDigit(singleFoodCount)}
                        onChange={(e) => setSingleFoodCount(Number(e.target.value))}
                        min={1}
                    />
                    <button onClick={() => setSingleFoodCount(pre => pre + 1)}
                        title="Increase"
                        className="hidden md:flex h-6 w-6 items-center justify-center rounded-full border border-primary cursor-pointer hover:border-green-600 transition duration-150"
                    >
                        +
                    </button>
                </div>
            </td>
            <td className="font-semibold">Rs:-{formatSrilankaPrice(singleFoodCount * price)}</td>
            <td>

                <button title="Remove" onClick={() => FilterItems(id)} className="md:w-8 md:h-8 h-5 w-5 rounded-full flex items-center justify-center font-semibold bg-red-500 text-white hover:bg-red-700 transition duration-200 cursor-pointer">
                    <i className="ri-close-line"></i>
                </button>

            </td>
        </tr>
    )
}

export default OrderFoodCard