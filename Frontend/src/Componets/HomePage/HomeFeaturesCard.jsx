const Features = [
    {
        id: "01",
        icon: "fa-solid fa-hand-point-up",
        heading: "Easy To Order",
        para: "Order your favorite meals with just a few taps. Simple, fast, and hassle-free - experience the easiest way to enjoy delicious food at your doorstep",
    },
    {
        id: "02",
        icon: "fa-solid fa-truck",
        heading: "Fast Delivery",
        para: "Enjoy lightning-fast delivery, bringing your favorite meals to you in no time. We make sure your food arrives hot, fresh, and ready to enjoy.",
    },
    {
        id: "03",
        icon: "fa-solid fa-utensils",
        heading: "Quality Food",
        para: "Indulge in only the best quality ingredients, prepared with care and cooked to perfection. Taste the difference with every bite.",
    },
];

const HomeFeaturesCard = () => {
    return (
        <section className="w-full my-5 sm:my-10">
            <div className="mycontainer grid grid-cols-1 sm:grid-cols-3 gap-8 mt-5  text-center">

                {Features.map((feature) => (
                    <div
                        key={feature.id}
                        className="service_card flex flex-col items-center gap-3 hover:shadow-2xl cursor-pointer p-5 transition duration-300 shadow-md"
                    >
                        <div className="h-20 w-20 bg-primary flex items-center justify-center rounded-full text-white text-4xl">
                            <i className={feature.icon}></i>
                        </div>
                        <h1 className="font-bold font-cascadia">{feature.heading}</h1>
                        <p className="text-center">{feature.para}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default HomeFeaturesCard;
