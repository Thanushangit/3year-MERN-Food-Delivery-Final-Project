import { useNavigate } from "react-router-dom"

const Buttons = [
    {
        special: true,
        icon: "M16 6.25v9.51q-.18.225-.29.49H8.29a2.5 2.5 0 0 0-4.58 0H3a1 1 0 0 1-1-1v-9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2m6 7.11v2.89h-1.71a2.49 2.49 0 0 0-4.29-.49V7.25h2.43a1 1 0 0 1 .86.49l.91 1.51l1.23 2.05a4 4 0 0 1 .57 2.06  M8.5 17.25a2.5 2.5 0 1 1-4.79-1a2.5 2.5 0 0 1 4.79 1m12 0a2.5 2.5 0 1 1-4.79-1q.11-.265.29-.49a2.49 2.49 0 0 1 4.29.49c.14.315.212.656.21 1m-9.5-6H6m5-3H6",
        viewBox: "0 0 24 24",
        head: "With free delivery",
        fill: false,
        para: "Food will deliver the order"
    },
    {
        special: false,
        icon: "M232 64h-28.69l26.35-26.34a8 8 0 0 0-11.32-11.32L192 52.69V24a8 8 0 0 0-16 0v32.57a64 64 0 0 0-77.2 10.12c-40.1 39.39-70.25 133.08-73.19 142.45a16 16 0 0 0 21.26 21.26c9.37-2.94 103.18-33.13 142.47-73.21A64 64 0 0 0 199.43 80H232a8 8 0 0 0 0-16m-54.12 82c-8.94 9.12-21.25 17.8-34.85 25.73l-25.38-25.39a8 8 0 0 0-11.32 11.32l22.09 22.09c-40.87 21.19-86.32 35.42-87 35.63A8 8 0 0 0 40 216a8 8 0 0 0 .59-1.41c.29-.93 28-89.58 64-130.67l33.77 33.77a8 8 0 0 0 11.32-11.32l-33.5-33.49a48 48 0 0 1 61.7 73.12",
        viewBox: "0 0 256 256",
        head: "Highest quality",
        fill: true,
        para: "Only high quality natural food"
    },
    {
        special: true,
        icon: "M412.717 89.012c-35.578-20.985-82.545-32.541-132.246-32.541h-40.942c-49.7 0-96.668 11.556-132.246 32.541C69.054 111.56 48 142.453 48 176v16h424v-16c0-33.547-21.054-64.44-59.283-86.988M82.8 160c14.153-40.121 80.185-71.529 156.731-71.529h40.942c76.546 0 142.578 31.408 156.731 71.529ZM48 304h424v32H48zm339.2-79.961c-24.785 0-37.77 6.125-49.227 11.529c-10.034 4.733-17.96 8.471-35.576 8.471s-25.54-3.738-35.574-8.471c-11.456-5.4-24.441-11.529-49.225-11.529s-37.769 6.125-49.225 11.529c-10.033 4.733-17.957 8.471-35.572 8.471s-25.54-3.738-35.573-8.471c-11.456-5.4-24.441-11.529-49.225-11.529v32c17.615 0 25.54 3.738 35.573 8.471c11.456 5.4 24.441 11.529 49.225 11.529s37.768-6.125 49.224-11.529c10.033-4.733 17.958-8.471 35.573-8.471s25.54 3.738 35.573 8.471c11.457 5.4 24.441 11.529 49.226 11.529s37.77-6.125 49.227-11.529c10.034-4.733 17.959-8.471 35.576-8.471s25.542 3.738 35.576 8.471c11.457 5.4 24.442 11.529 49.227 11.529v-32c-17.617 0-25.542-3.738-35.576-8.471c-11.46-5.404-24.445-11.529-49.227-11.529M48 448a24.03 24.03 0 0 0 24 24h376a24.03 24.03 0 0 0 24-24v-80H48Zm32-48h360v40H80Z",
        viewBox: "0 0 512 512",
        head: " A varied menu",
        fill: true,
        para: "More than 100 ready meals"
    },
    {
        special: false,
        icon: "m13 12.175l2.25 2.25q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L11.3 13.3q-.15-.15-.225-.337T11 12.575V9q0-.425.288-.712T12 8t.713.288T13 9zM12 6q-.425 0-.712-.288T11 5V4h2v1q0 .425-.288.713T12 6m6 6q0-.425.288-.712T19 11h1v2h-1q-.425 0-.712-.288T18 12m-6 6q.425 0 .713.288T13 19v1h-2v-1q0-.425.288-.712T12 18m-6-6q0 .425-.288.713T5 13H4v-2h1q.425 0 .713.288T6 12m6 10q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m8-10q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20t5.675-2.325T20 12m-8 0",
        viewBox: "0 0 24 24",
        head: "Save your time",
        fill: false,
        para: "Now save up to 2 hours a day"
    },
]



const HealthyFoodSection = () => {
    const navigate=useNavigate()
    return (
        <section className="my-10 sm:my-30 w-full bg-gray-100">
            <div
                className="mycontainer !pb-0 flex flex-col md:flex-row justify-between gap-5"
            >
                {/* <!-- image content  --> */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://res.cloudinary.com/thanushan/image/upload/v1747325337/girl-holding-credit-card_j5mtrz.webp"
                        alt="image"
                        loading="lazy"
                        className="w-full h-full object-bottom object-contain"
                    />
                </div>

                {/* <!-- text content section  --> */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="mb-5">
                        <p className="text-gray-400 tracking-widest uppercase">
                            Get up to 15% off
                        </p>
                        <h1 className="font-semibold text-2xl md:text-4xl font-ibm mt-3">
                            Enjoy healthy meals at 15% less
                        </h1>
                    </div>
                    <p className="text-lg text-gray-500 sm:my-10">
                        We value our loyal customers and have a special offer just for them
                        — healthy, delicious food delivered with a 15% discount. It's a
                        great way to eat well and spend less. Join our loyalty program today
                        and start saving on every order. Don't miss out!
                    </p>
                    {/* <!-- ← button container → --> */}
                    <div
                        className="grid grid-cols-1 xl:grid-cols-2 sm:gap-y-12 gap-y-8 sm:mt-10 mt-5"
                    >
                        {
                            Buttons.map((but, ind) => (
                                <div key={ind} className={`flex items-center gap-2 ${but.special ? "sm:border-r-4" : "sm:border-0"} text-gray-400`}>
                                    <p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-15 h-15"
                                            viewBox={but.viewBox}
                                        >
                                            <g
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.0"
                                            >
                                                <path
                                                    fill={`${but.fill ? "currentColor" : ""}`}
                                                    d={but.icon}
                                                />

                                            </g>
                                        </svg>
                                    </p>
                                    <div>
                                        <h1 className="font-semibold text-lg md:text-xl text-gray-700">
                                            {but.head}
                                        </h1>
                                        <p className="text-gray-500 whitespace-nowrap">
                                            {but.para}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <button onClick={()=>navigate("/user")}
                        className="w-full sm:w-56 md:py-5 md:px-4 p-3 mb-5  border-0 bg-primary text-white font-semibold text-xl cursor-pointer mt-15 uppercase rounded duration-300 transition hover:bg-amber-600"
                    >
                        Order your food
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HealthyFoodSection