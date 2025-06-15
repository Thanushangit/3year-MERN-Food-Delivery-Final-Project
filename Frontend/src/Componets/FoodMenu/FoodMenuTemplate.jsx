import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { increment } from '../../Slices/CounterSlice';
import { addItem } from '../../Slices/AddItemsSlice';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';


const FoodMenuTemplate = ({ FoodData }) => {

    const dispatch = useDispatch()
    const orderItems = useSelector(sta => sta.addItems)
    const loginStatus = useSelector(state => state.loginStatus.status);

    const notify = (tostFood) => toast.success(
        <p><strong>{tostFood}</strong> added successfully!</p>
        ,
        {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });


    function ButtonHandler(foodTitle, foodId, foodImage, foodPrice) {

        if (loginStatus) {
            const alreadyExists = orderItems.some((item) => item._id === foodId);
            if (alreadyExists) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${foodTitle} is already in the cart!`,
                });
                return;
            }

            const item = {
                _id: foodId,
                image: foodImage,
                title: foodTitle,
                price: Number(foodPrice)
            };

            notify(foodTitle);
            dispatch(increment())
            dispatch(addItem(item));

        } else {
            toast.error('You must log in to place an order!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }
    }



    return (
        <div
            id="breakFastDiv"
            className="food_item_container grid relative grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-5 lg:gap-y-5">

            {Array.isArray(FoodData) && FoodData.length > 0 &&
                FoodData.map((food) => (
                    <div
                        key={food._id} className="relative food_item flex items-center overflow-hidden rounded border-b-2 border-r-2 border-gray-300/80 hover:shadow-md"
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
                        <button onClick={() => ButtonHandler(food.name, food._id, food.image, food.price)}
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

export default FoodMenuTemplate