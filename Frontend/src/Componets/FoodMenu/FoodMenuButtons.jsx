import { useState } from "react";
import BreakFast from "../../Pages/BreakFast"
import Dinner from "../../Pages/Dinner"
import Lunch from "../../Pages/Lunch"
import Loader from "../Loader/Loader";


const buttonDetails = [
    {
        id: 1,
        key: "breakfast",
        icon: "M54.2 25.7c-1.3 0-2.6.3-3.7.9c-.2-3.2-2.9-5.7-6.1-5.7H9.3c-3.4 0-6.1 2.7-6.1 6.1v9.5c0 9.2 5.9 17 14.1 19.9H4c-1.2 0-2.3 1-2.3 2.3S2.7 61 4 61h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H36.4c5.9-2.1 10.5-6.7 12.7-12.4c1.4 1.1 3.2 1.8 5.1 1.8c2.2 0 4.4-.9 5.9-2.5c1.5-1.5 2.2-3.5 2.1-5.5v-4.1c0-4.4-3.5-8-8-8M46 36.5c0 9.2-7.5 16.7-16.7 16.7h-4.9c-9.2 0-16.7-7.5-16.7-16.7V27c0-.9.7-1.6 1.6-1.6h35.1c.9 0 1.6.7 1.6 1.6zm10.9 3.8c-.7.7-1.6 1.1-2.6 1.1c-1.9 0-3.5-1.6-3.5-3.5v-4.1c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5V38c0 .8-.3 1.6-.9 2.3M13.8 16.5c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1.1 2.3 2.3 2.3m13.1 0c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1 2.3 2.3 2.3m13.1 0c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1 2.3 2.3 2.3",
        title: "Breakfast",
        des: "Popular",
        viewBox: "0 0 64 64",

    },
    {
        id: 2,
        key: "lunch",
        icon: "M48.07 104h159.86a16 16 0 0 0 15.72-19.38C216.22 49.5 176 24 128 24S39.78 49.5 32.35 84.62A16 16 0 0 0 48.07 104M128 40c39.82 0 74.21 20.61 79.93 48H48.07l-.07-.07C53.79 60.61 88.18 40 128 40m101.26 112.48l-41.13 15L151 152.57a8 8 0 0 0-5.94 0l-37 14.81L71 152.57a8 8 0 0 0-5.7-.09l-44 16a8 8 0 0 0 5.47 15L40 178.69V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-9.67l18.73-6.81a8 8 0 1 0-5.47-15ZM200 184a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24v-11.12l11.87-4.32L105 183.43a8 8 0 0 0 5.94 0l37-14.81l37 14.81a8 8 0 0 0 5.7.09l9.27-3.37ZM16 128a8 8 0 0 1 8-8h208a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8",
        title: "Lunch",
        des: "Special",
        viewBox: "0 0 256 256",

    },
    {
        id: 3,
        key: "dinner",
        icon: "M11.082 2.586c-.464.464-.975 1.413-1.172 2.32c-.128.592-.362 1.267-.882 1.765l-.227.216l.849.773l.185-.194c.495-.518 1.168-.752 1.758-.88c.907-.198 1.854-.708 2.318-1.172a2 2 0 0 0-2.829-2.828m-.524 5.571l-.168.176l3.016 2.745l.008.008a2 2 0 1 1-2.828 2.828l-.008-.008l-2.69-2.955l-2.9 3.037a1.75 1.75 0 0 1-2.475-2.475l.008-.008l2.62-2.503h-.52a2 2 0 0 1-1.414-.586L1.086 6.295a2 2 0 0 1 0-2.829l1.878-1.878a2 2 0 0 1 2.829 0l2.121 2.12A2 2 0 0 1 8.5 5.124v.64c.208-.279.341-.646.433-1.068c.23-1.062.82-2.194 1.442-2.816a3 3 0 1 1 4.243 4.242c-.622.622-1.752 1.211-2.812 1.442c-.52.113-.958.29-1.248.594M6.335 9.244l-3.119 2.98a.75.75 0 0 0 1.06 1.06l2.938-3.074zm-1.25-6.95a1 1 0 0 0-1.413 0l-1.88 1.88a1 1 0 0 0 0 1.414l2.122 2.12a1 1 0 0 0 .707.294h1.273a1.5 1.5 0 0 1 1.11.49l4.296 4.723a1 1 0 0 0 1.415-1.415L7.99 7.501a1.5 1.5 0 0 1-.49-1.109V5.123a1 1 0 0 0-.293-.707zm-1.73 2.353a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 1 0 .708-.708zm.792-1.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708M11.75 4a.5.5 0 0 0-1 0c0 .966.784 1.75 1.75 1.75a.5.5 0 0 0 0-1a.75.75 0 0 1-.75-.75",
        title: "Dinner",
        des: "Delight",
        viewBox: "0 0 16 16",

    }
];

const FoodMenuButtons = () => {
    const [selectedMeal, setSelectedMeal] = useState('breakfast');
    const [isLoading, setIsLoading] = useState(false);

    const handleMealChange = (key) => {
        if (selectedMeal === key) return; 
        setIsLoading(true);
        setTimeout(() => {
            setSelectedMeal(key);
            setIsLoading(false);
        }, 600); 
    };

    const renderMealComponent = () => {
        switch (selectedMeal) {
            case 'lunch':
                return <Lunch />;
            case 'dinner':
                return <Dinner />;
            default:
                return <BreakFast />;
        }
    };
    return (
        <section id="foodmenu" className="my-10 sm:my-20 w-full">
            < div className="min-w-full md:min-w-3xl max-w-3xl mx-auto flex flex-col items-center gap-5" >
                <h1 className="font-bold text-3xl md:text-4xl">Food Menu Items</h1>
                <div className="mycontainer w-full flex items-center my-5 sm:my-8 justify-between gap-4 sm:gap-6 shadow-lg">
                    {buttonDetails.map((detail) => (
                        <div key={detail.id}>
                            <button className={`relative cursor-pointer hover:bg-primary/20 p-2 rounded-md transition-all duration-400 ${selectedMeal === detail.key ? "bg-primary/20" : "bg-transparent"}`} onClick={() => handleMealChange(detail.key)}>
                                <div className="flex flex-col md:flex-row items-center gap-3">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox={detail.viewBox}
                                            className="text-primary w-8 lg:w-15 h-8 lg:h-15"
                                        >
                                            <path fill="currentColor" d={detail.icon} />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-md sm:text-lg font-semibold">
                                            {detail.des}
                                        </p>
                                        <h2 className="font-semibold text-lg sm:text-xl">
                                            {detail.title}
                                        </h2>
                                    </div>
                                </div>
                            </button>

                        </div>
                    ))}
                </div>
            </div >


            {/* food menu items  */}
            <div className="mycontainer my-5 md:my-10 min-h-screen min-w-[100%] flex items-center justify-center">
                {isLoading ? <Loader /> : renderMealComponent()}
            </div>
        </section>

    )
}

export default FoodMenuButtons