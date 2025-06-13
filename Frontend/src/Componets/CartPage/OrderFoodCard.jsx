import { useEffect, useState } from "react";
import { formatSrilankaPrice } from '../../Util/PriceSeperator'
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../Slices/CounterSlice";
import { addItemsWithQty } from '../../Slices/OrderItemsWithQty';
import { deleteItemsWithQty } from "../../Slices/OrderItemsWithQty";


const OrderFoodCard = ({ details, FilterItems }) => {
    const OrderItemsWithQty = useSelector(sta => sta.addItemsWithQty);
    const Qty = OrderItemsWithQty.find(item => item._id === details._id)?.Qty || 1;
    const dispatch = useDispatch();
    const { image, title, price, _id } = details;
    const [singleFoodCount, setSingleFoodCount] = useState(Qty)
    const totalPrice = price * singleFoodCount;


    useEffect(() => {
        setSingleFoodCount(Qty || 1);
    }, [Qty]);

    useEffect(() => {

        const item = {
            _id: _id,
            image: image,
            title: title,
            price: Number(price),
            Qty: singleFoodCount
        };
        dispatch(addItemsWithQty(item))
    }, [totalPrice, singleFoodCount, title, _id, price, image, singleFoodCount])


    function formatTwoDigit(num) {
        return num < 10 ? `0${num}` : `${num}`;
    }


    function Food_Decrease_Handler() {
        if (singleFoodCount > 1) {
            setSingleFoodCount(pre => pre - 1)
        } else {
            Swal.fire({
                title: "Minimum Limit Required!",
                text: "At least you must select one item.",
                icon: "warning"
            });
        }
    }



    function Food_Increase_Handler() {
        if (singleFoodCount < 100) {
            setSingleFoodCount(pre => pre + 1)
        } else {
            Swal.fire({
                title: "Maximum Limit Reached!",
                text: "One-time maximum order is 100.",
                icon: "warning"
            });

        }
    }

    function HandleInputChange(e) {
        const value = Number(e.target.value)
        if (value >= 1 && value <= 100) {
            setSingleFoodCount(value);
        }
    }



    {/* confirmation to delete  */ }

    function DeleteButtonHandler(id, title) {
        Swal.fire({
            title: `Are you sure you want to delete ${title}`,
            text: `${title} will be removed from your cart.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: `"${title}" has been removed.`,
                    icon: "success"
                });
                dispatch(decrement())
                FilterItems(_id);
                dispatch(deleteItemsWithQty(_id));
            }
        });
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
                        onChange={(e) => HandleInputChange(e)}
                        min={1}
                        max={100}
                    />
                    <button onClick={() => Food_Increase_Handler()}
                        title="Increase"
                        className="hidden md:flex h-6 w-6 items-center justify-center rounded-full border border-primary cursor-pointer hover:border-green-600 transition duration-150"
                    >
                        +
                    </button>
                </div>
            </td>
            <td className="font-semibold">Rs:-{formatSrilankaPrice(totalPrice)}</td>
            <td>

                <button title="Remove" onClick={() => DeleteButtonHandler(_id, title)} className="md:w-8 md:h-8 h-5 w-5 rounded-full flex items-center justify-center font-semibold bg-red-500 text-white hover:bg-red-700 transition duration-200 cursor-pointer">
                    <i className="ri-close-line"></i>
                </button>

            </td>
        </tr>
    )

}

export default OrderFoodCard