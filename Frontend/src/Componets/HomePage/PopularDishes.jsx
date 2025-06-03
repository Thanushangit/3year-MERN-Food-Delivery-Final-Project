import { toast } from 'react-toastify';
import { popularDishes } from "../../FetchLoaders/Fetchingdata";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import {increment} from '../../Slices/CounterSlice'

const PopularDishes = () => {
    const dispatch=useDispatch()

    const [FoodData, setFoodData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await popularDishes();
                setFoodData(data);
            } catch (error) {
                console.error("Error fetching popular dishes:", error);
            }
        };
        fetchData();
    }, []);



    const notify = (tostFood) => toast.success(
        <div>
            <p><strong>{tostFood}</strong> added successfully!</p>
        </div>
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


        function ButtonHanler(foodTitle){
            notify(foodTitle);
            dispatch(increment())

        }

    return (
        <section className="my-10 sm:my-20 bg-[#e9ecef]">
            <div className="mycontainer">
                <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 sm:mb-8 font-bold font-ibm">
                    Populer Dishes
                </h1>
                <div className="grid grid-rows-1 w-full">
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 mb-5 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-x-5 gap-y-7 md:gap-y-10"
                    >
                        {/* items  */}
                        {
                            FoodData.map((food) => (
                                <div
                                    key={food.id} title="Taste. Smile. Repeat. 😋" className="group dishes_item border-1 border-gray-300 hover:shadow-2xl cursor-pointer hover:-translate-y-1 transform transition duration-300 rounded-md overflow-hidden relative "

                                >
                                    <div className="h-1/3 w-auto overflow-hidden">
                                        <img
                                            className="h-full w-full object-cover transform group-hover:scale-110 duration-500 transition"
                                            src={food.img}
                                            alt={food.title}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-2 flex flex-col mb-2 md:h-16">
                                        <div className="flex flex-col relative ">
                                            <h2 className="font-semibold text-lg font-cascadia">{food.title}</h2>
                                            <h5 className="font-bold text-xl text-primary">{food.price}</h5>
                                            <p>{food.description}</p>

                                            <button onClick={() => ButtonHanler(food.title)}
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