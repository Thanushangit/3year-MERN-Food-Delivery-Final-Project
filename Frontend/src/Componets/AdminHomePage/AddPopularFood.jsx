const AddPopularFood = ({ setAddFoodFormStatus, setAddFoodCategory }) => {

    function ButtonHandler() {
        setAddFoodFormStatus(true);
        setAddFoodCategory("popular")
    }

    return (
        <div className="h-full w-full mt-10 mb-1">
            <button
                onClick={ButtonHandler}
                title="Add an item"
                className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary hover:bg-yellow-600 flex items-center justify-center text-white text-3xl font-bold shadow-2xl mx-auto cursor-pointer transition duration-300"
            >
                <i className="ri-add-line"></i>
            </button>
        </div>
    );
};

export default AddPopularFood;
