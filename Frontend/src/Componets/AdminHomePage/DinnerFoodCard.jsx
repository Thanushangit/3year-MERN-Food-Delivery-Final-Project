import DeleteButton from './DeleteButton'
import { formatSrilankaPrice } from '../../Util/PriceSeperator';

const FoodCard = (props) => {
    const { _id, name, description, price, image } = props.item;
    const setShowDetailsStatus = props.setShowDetailsStatus;
    const setShowDetails = props.setShowDetails;

    function ButtonHandler(_id, img, title, price, description) {
        setShowDetailsStatus(true),
            setShowDetails({
                showid: { _id },
                showimg: { img },
                showtitle: { title },
                showprice: { price },
                showdescription: { description },
                category: "dinner"
            })
    }

    return (
        <div
            className="food_item flex relative group items-center overflow-hidden rounded border-b-2 border-r-2 border-gray-300/80 group-hover:shadow-md"
        >
            <div className="h-25 w-40 relative">
                <img
                    className="w-full h-full object-center object-cover group-hover:scale-110 transition-all duration-300"
                    src={image}
                    alt={name}
                    loading="lazy"
                />
            </div>
            <div
                className="flex flex-col py-0.5 md:py-1 px-2 sm:px-3 md:px-4 lg:px-5"
            >
                <h1 className="font-bold text-lg lg:text-2xl font-cascadia">
                    {name}
                </h1>
                <p>{description}</p>
                <h1 className="text-primary font-semibold">Rs:-{formatSrilankaPrice(price)}</h1>
            </div>
            <div
                className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 hidden group-hover:flex items-center justify-center transition-all duration-300"
            >
                <div className="flex items-center justify-center gap-5 w-full">


                    <button
                        onClick={() => ButtonHandler(_id, image, name, price, description)}
                        title="Edit the item"
                        className="sm:w-12 w-8 sm:h-12 h-8 rounded-full bg-green-500 flex items-center justify-center text-gray-100 hover:cursor-pointer sm:text-xl text-md hover:bg-green-700"
                    >
                        <i className="ri-edit-2-line"></i>
                    </button>


                    <DeleteButton id={_id} title={name} category="dinner" />




                </div>
            </div>
        </div>
    )
}

export default FoodCard