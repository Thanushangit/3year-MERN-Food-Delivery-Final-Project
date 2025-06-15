const Footer = () => {
    return (
        <footer className="w-full bg-[#232736] text-gray-400">
            <div className="mycontainer footer !pb-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 items-start md:gap-5">
                    <div>
                        <div className="flex items-center gap-2" title="Welcome 😊">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="none"
                                        className="text-primary"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="m18.5 3.002l-3.44 3.44a1.5 1.5 0 0 0 0 2.12l.69.69M22 6.502l-3.44 3.44a1.5 1.5 0 0 1-2.12 0l-.69-.69m0 0L4 21.002M20 4.999l-2.5 2.5M7.99 8.99c-1.195 1.194-2.833 1.493-4.326 0S1.388 4.778 2.582 3.583C3.777 2.39 6.496 3.172 7.99 4.665s1.195 3.13 0 4.325m0 0L20 21.001M9.205 2.397A10 10 0 0 1 12 2c1.152 0 2.258.195 3.288.553M2.049 11Q2 11.494 2 12c0 2.032.606 3.922 1.647 5.5m4.126 3.565c1.284.6 2.716.935 4.227.935a10 10 0 0 0 4.262-.951m4.09-3.549A9.95 9.95 0 0 0 22 12q-.002-.868-.143-1.696"
                                        color="currentColor"
                                    />
                                </svg>
                            </div>
                            <a href="#">
                                <h1 className="font-ibm text-xl font-semibold">
                                    Plate <span className="text-primary">zy</span>
                                </h1>
                            </a>
                        </div>
                        <p className="my-2">
                            Platezy delivers delicious meals fast and fresh, right to your
                            door, satisfying every craving with ease.
                        </p>

                        <ul className="flex items-center gap-3 mt-4">
                            <li
                                title="Facebook"
                                className="h-8 w-8 p-2 flex items-center justify-center bg-red-500 rounded-full font-semibold hover:bg-primary transition duration-200 hover:text-white"
                            >
                                <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/login">
                                    <i className="ri-facebook-line" aria-label="Facebook"></i>
                                </a>
                            </li>
                            <li
                                title="Instagram"
                                className="h-8 w-8 p-2 flex items-center justify-center bg-red-500 rounded-full font-semibold hover:bg-primary transition duration-200 hover:text-white"
                            >
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/accounts/login/">
                                    <i className="ri-instagram-line" aria-label="Instagram"></i>
                                </a>
                            </li>
                            <li
                                title="Twitter"
                                className="h-8 w-8 p-2 flex items-center justify-center bg-red-500 rounded-full font-semibold hover:bg-primary transition duration-200 hover:text-white"
                            >
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/login">
                                    <i className="ri-twitter-line" aria-label="Twitter"></i>
                                </a>
                            </li>
                            <li
                                title="Youtube"
                                className="h-8 w-8 p-2 flex items-center justify-center bg-red-500 rounded-full font-semibold hover:bg-primary transition duration-200 hover:text-white"
                            >
                                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
                                    <i className="ri-youtube-line" aria-label="YouTube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-xl mb-3">Our Menu</h1>
                        <p className="my-1 hover:text-primary transition duration-300 w-fit">
                            <a href="#foodmenu">Break Fast</a>
                        </p>
                        <p className="my-1 hover:text-primary transition duration-300 w-fit">
                            <a href="#foodmenu">Lunch</a>
                        </p>
                        <p className="my-1 hover:text-primary transition duration-300 w-fit">
                            <a href="#foodmenu">Dinner</a>
                        </p>
                    </div>

                    <div>
                        <h1 className="text-xl mb-3">Support</h1>
                        <p className="my-1 hover:text-primary transition duration-300 w-fit">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.goodfoodcommunity.com/pages/delivery-guide-faqs?srsltid=AfmBOopNY_Fs7LQUi119LZGR5nlUFqOnTC3vXBW9DGVpNWkOLVGNAzEQ"
                            >FAQs</a>
                        </p>
                        <p className="my-1 hover:text-primary transition duration-300 w-fit">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://support.google.com/foodordering/?hl=en#topic=9780529"
                            >Help Center</a>
                        </p>
                        <p className="my-1 hover:text-primary transition duration-300 w-fit">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.quora.com/What-is-the-process-for-getting-a-refund-if-you-are-dissatisfied-with-a-food-delivery-from-a-restaurant-through-DoorDash-GrubHub-or-a-similar-service"
                            >Refund Policy</a>
                        </p>
                    </div>

                    <div>
                        <h1 className="text-xl mb-3">Contact</h1>
                        <p className="my-1 hover:text-primary transition duration-300 w-fit">
                            <a target="_blank" rel="noopener noreferrer" href="tel:+94764867457">
                                <span className="mr-1"><i className="ri-phone-line"></i></span>
                                +94764867457
                            </a>
                        </p>
                        <p className="my-1 hover:text-primary transition duration-300 w-fit">
                            <a target="_blank" rel="noopener noreferrer" href="mailto:platezy@gmail.com">
                                <span className="mr-1"><i className="ri-mail-line"></i></span>
                                platezy@gmail.com
                            </a>
                        </p>
                        <p className="my-1 hover:text-primary transition duration-300 w-fit">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://maps.app.goo.gl/wE3GrzmYTFoWvjt67"
                            >
                                <span className="mr-1"><i className="ri-map-pin-line"></i></span>
                                Galle Road, 5th Floor, Colombo
                            </a>
                        </p>
                    </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 items-end md:gap-5 justify-between">
                    <div className="text-center md:text-left lg:col-span-3 order-2 md:order-1">
                        <div className="flex items-center gap-x-1">
                            <p>copyright &copy; 2025. Powered by</p>
                            <span
                                title="source code"
                                className="hover:text-gray-200 transition duration-200 hover:underline underline-offset-2 "
                            >
                                <a href="https://github.com/Thanushangit/3year-MERN-Food-Delivery-Final-Project.git" target="_blank">J'boys.</a>


                            </span>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 ">
                        <h1 className="text-xl my-2">Payment Option</h1>
                        <div className="flex items-center gap-2">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.visa.com.lk/pay-with-visa/click-to-pay-with-visa.html"
                            >
                                <img
                                    title="visa-gateway"
                                    className="w-20 h-10 object-cover cursor-pointer"
                                    src="https://res.cloudinary.com/thanushan/image/upload/v1747015972/visa-card_oyxl7y.webp"
                                    alt="Visa"
                                    loading="lazy"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.mastercard.us/en-us/personal/ways-to-pay/click-to-pay.html"
                            >
                                <img
                                    title="master-gateway"
                                    className="w-20 h-10 object-cover cursor-pointer"
                                    src="https://res.cloudinary.com/thanushan/image/upload/v1747016023/master-card_m4o7gx.webp"
                                    alt="MasterCard"
                                    loading="lazy"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.paypal.com/lk/home"
                            >
                                <img
                                    title="paypal-gateway"
                                    className="w-20 h-10 object-cover cursor-pointer"
                                    src="https://res.cloudinary.com/thanushan/image/upload/v1747016024/paypal_bzbwpj.webp"
                                    alt="PayPal"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
