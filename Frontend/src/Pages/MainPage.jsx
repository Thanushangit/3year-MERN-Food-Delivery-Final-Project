import { Link } from "react-router-dom"

const MainPage = () => {
 
    return (
        <section className="mycontainer bg-[#2b2b2b] min-h-screen text-gray-100">
            <header>
                <div className="flex items-center gap-2 " title="Welcome 😊">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >

                            <path

                                fill="none"
                                className="text-primary  "
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="m18.5 3.002l-3.44 3.44a1.5 1.5 0 0 0 0 2.12l.69.69M22 6.502l-3.44 3.44a1.5 1.5 0 0 1-2.12 0l-.69-.69m0 0L4 21.002M20 4.999l-2.5 2.5M7.99 8.99c-1.195 1.194-2.833 1.493-4.326 0S1.388 4.778 2.582 3.583C3.777 2.39 6.496 3.172 7.99 4.665s1.195 3.13 0 4.325m0 0L20 21.001M9.205 2.397A10 10 0 0 1 12 2c1.152 0 2.258.195 3.288.553M2.049 11Q2 11.494 2 12c0 2.032.606 3.922 1.647 5.5m4.126 3.565c1.284.6 2.716.935 4.227.935a10 10 0 0 0 4.262-.951m4.09-3.549A9.95 9.95 0 0 0 22 12q-.002-.868-.143-1.696"
                                color="currentColor"
                            />
                        </svg>
                    </div>
                    <a href="#"
                    ><h1 className="font-ibm text-2xl sm:text-4xl font-semibold">
                            Plate <span className="text-primary ">zy</span>
                        </h1>
                    </a>
                </div>
            </header>
            <div className="flex flex-col items-center justify-center gap-y-5 w-full h-full ">
                <div className="w-32 h-32 md:w-64 md:h-64 mt-5 flex items-center justify-center ">
                    <img src="https://res.cloudinary.com/thanushan/image/upload/v1749458305/unknown_user_think_ervcmm.webp" alt="unknown" className="scale-125"/>
                </div>
                <h1 className="text-3xl md:text-5xl text-center">Please select your role</h1>
                <div className="flex items-center justify-center w-full gap-5 md:gap-10  md:max-w-lg md:mt-5">

                    <Link title="click" to={'/user'} className="py-2 px-4 md:py-4 md:px-8 rounded transition-all duration-300 cursor-pointer bg-green-500 text-xl hover:bg-green-700">Customer</Link>

                    <Link title="click" to={'/admin'} className="py-2 px-4 md:py-4 md:px-8 rounded transition-all duration-300 cursor-pointer text-xl bg-amber-500  hover:bg-amber-700 ">Admin</Link>

                </div>
            </div>
           
        </section>
    )
}

export default MainPage