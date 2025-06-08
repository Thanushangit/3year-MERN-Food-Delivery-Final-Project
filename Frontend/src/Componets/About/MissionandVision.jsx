const Content = [
    {
        key: 1,
        style: "md:flex-row",
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747325344/our-mission_wcxamm.webp",
        head1: "Our mission is to",
        head2: "Save your time",
        para1: "We understand that in today's busy world, people don't always have the time to cook or go out to eat. That's why we created a fast, reliable, and user-friendly food delivery app that brings delicious meals straight to your door. With just a few taps, you can enjoy food from your favorite restaurants without the wait,stress, or hassle.",
        para2: "We believe that convenience should never come at the cost of quality. Our app is designed to give you both — speed and satisfaction. Whether you're a student, a professional, or a parent managing a busy schedule, we're here to help you save valuable time and enjoy life more. Let us take care of the food, so you can take care of what really matters."
    },
    {
        key: 2,
        style: "md:flex-row-reverse",
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747325344/our-vision_flyk8w.webp",
        head1: "Our vision is to",
        head2: " Quick meals, happy life",
        para1: " We believe that getting good food should be simple, fast, and joyful. By delivering meals quickly and reliably, we aim to bring more happiness and comfort into people's daily lives. No more long waits, no more stressful meal planning — just tasty food, delivered when you need it.",
        para2: "We see a future where everyone can enjoy their favorite meals without losing time or energy. Whether it's a busy workday, a lazy weekend, or a late-night craving, our app is here to make lifeeasier and more enjoyable — one quick meal at a time."
    }
]

const MissionandVision = () => {
    return (

        <div>
            {
                Content.map((det) => (
                    <section key={det.key} className="my-10 sm:my-25 ">

                        <div
                            className={`mycontainer flex flex-col ${det.style} items-center lg:items-start justify-between gap-x-20 gap-y-10`}
                        >

                            <div className="w-full md:w-1/3 flex items-center justify-center">
                                <img
                                    className="w-full h-full object-center object-cover"
                                    src={det.image}
                                    alt="image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col gap-3 w-full flex-1">
                                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
                                    {det.head1} <br />
                                    {det.head2}
                                </h1>
                                <div className="space-y-4 text-lg text-gray-500">
                                    <p>{det.para1}</p>
                                    <p>{det.para2}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                ))
            }
        </div>

    )
}

export default MissionandVision