import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const reviews = [
    {
        id: 1,
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747015980/cu-1-thirisha_bwfvpj.webp",
        name: "Trisha Krishnan",
        job: "Actress",
        review:
            "A beautiful, cozy, and inviting space with food that speaks to the soul. Every dish is crafted thoughtfully with care.",
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747015980/cu-2-joonaththan_xalph3.webp",
        name: "Jonathan Reed",
        job: "Marketing Executive",
        review:
            "Nestled in a charming corner of the city, this restaurant offers a serene and authentic ambiance with a journey.",
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747015980/cu-3-dinesh_kc8qjy.webp",
        name: "Dinesh Kumar",
        job: "Actor",
        review:
            "The service is quick, and the food has a homemade feel that’s hard to find. The taste reminds me of comfort.",
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747015982/cu-4-piriya_m1qb9m.webp",
        name: "Priya Nandini",
        job: "Nutritionist",
        review:
            "Healthy options with great taste! Every meal is satisfying, wholesome, and guilt-free for a perfect experience.",
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747015997/cu-5-walter_hsi0oo.webp",
        name: "Walter Harris",
        job: "Retired Librarian",
        review:
            "It reminds me of the old days when food was made with care and love, bringing back fond memories.",
    },
];


const CustomerSwiper = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperEl = swiperRef.current;

        if (!swiperEl) return;

        const swiperInstance = swiperEl.swiper;

        const handleMouseEnter = () => {
            swiperInstance?.autoplay?.stop();
        };

        const handleMouseLeave = () => {
            swiperInstance?.autoplay?.start();
        };

        swiperEl.addEventListener('mouseenter', handleMouseEnter);
        swiperEl.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            swiperEl.removeEventListener('mouseenter', handleMouseEnter);
            swiperEl.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);


    return (
        <section className="my-15 sm:my-25  w-full">
            <h1 className="font-bold text-4xl text-center mb-3">Our Clients Say!!!</h1>
            <div className="mycontainer relative h-full customer_container mt-5 sm:mt-10">
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    navigation={false}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    className="h-full w-full"
                >



                    {
                        reviews.map((rev) => (
                            <SwiperSlide className='w-full'>
                                <div key={rev.id}
                                    className="group h-full sm:w-2/3 w-full mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between p-5 gap-5 border-b-2 border-b-gray-300 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                                >
                                    {/* <!-- image  --> */}
                                    <div
                                        title="Hi i'm Trisha Krishnan"
                                        className="rounded-full h-35 w-35 group-hover:outline-4 group-hover:outline-primary transition-all duration-200 cursor-pointer outline-offset-8 overflow-hidden"
                                    >
                                        <img
                                            className="rounded-full h-full w-full object-top object-cover"
                                            src={rev.image}
                                            alt={rev.name}
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* <!-- content  --> */}
                                    <div className="flex flex-col flex-1 p-3 space-y-2">
                                        <div>
                                            <h1 className="font-cascadia font-bold text-2xl">
                                                {rev.name}
                                            </h1>
                                            <h5 className="text-red-500 text-lg">{rev.job}</h5>
                                        </div>
                                        <p className="text-gray-800">
                                            {rev.review}
                                        </p>

                                        <div className="flex gap-3 mb-5">
                                            <div
                                                title="Whatsapp"
                                                className="w-8 h-8 rounded-full bg-red-500 cursor-pointer hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 text-gray-300 flex items-center justify-center text-xl"
                                            >
                                                <i className="ri-whatsapp-line"></i>
                                            </div>
                                            <div
                                                title="Telegram"
                                                className="w-8 h-8 rounded-full bg-red-500 cursor-pointer hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 text-gray-300 flex items-center justify-center text-xl"
                                            >
                                                <i className="ri-telegram-2-line"></i>
                                            </div>
                                            <div
                                                title="X"
                                                className="w-8 h-8 rounded-full bg-red-500 cursor-pointer hover:bg-transparent hover:text-primary hover:border-2 hover:border-primary transition-all duration-300 text-gray-300 flex items-center justify-center text-xl"
                                            >
                                                <i className="ri-twitter-x-line"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>

    )
}

export default CustomerSwiper