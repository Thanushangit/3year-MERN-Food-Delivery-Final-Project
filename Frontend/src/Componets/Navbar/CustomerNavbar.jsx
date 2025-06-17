import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setLoginStatus } from "../../Slices/LoginConfirmation"
import { resetCount } from "../../Slices/CounterSlice"
import { resetAddItems } from "../../Slices/AddItemsSlice"
import Swal from "sweetalert2"
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase'
import { easeInOut, motion } from "framer-motion"

const CustomerNavbar = () => {
    const navigate = useNavigate()
    const counterValue = useSelector((sta) => sta.count.count)
    const [menuStatus, setMenuStatus] = useState(false)
    const loginStatus = useSelector(sta => sta.loginStatus.status)
    const dispatch = useDispatch()

    const svgVariants = {
        hidden: {
            rotate: -180,
        },
        visible: {
            rotate: 0,
            transition: { duration: 2 },
        },
    };

    const svgPathVariants = {
        hidden: {
            opacity: 0,
            strokeWidth: 0,
        },
        visible: {
            opacity: 1,
            strokeWidth: 1.5,
            transition: { duration: 2, ease: easeInOut },
        },
    };
    return (
        // navbar-code
        <header className="bg-[#232736] w-full text-white fixed top-0 left-0 z-50" >
            <nav className="mycontainer flex items-center justify-between">
                {/* logo part */}
                <div className="flex items-center gap-2" title="Welcome 😊">
                    <div>
                        <motion.svg
                            variants={svgVariants}
                            initial="hidden"
                            animate="visible"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"

                        >

                            <motion.path

                                fill="none"
                                className="text-primary"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="m18.5 3.002l-3.44 3.44a1.5 1.5 0 0 0 0 2.12l.69.69M22 6.502l-3.44 3.44a1.5 1.5 0 0 1-2.12 0l-.69-.69m0 0L4 21.002M20 4.999l-2.5 2.5M7.99 8.99c-1.195 1.194-2.833 1.493-4.326 0S1.388 4.778 2.582 3.583C3.777 2.39 6.496 3.172 7.99 4.665s1.195 3.13 0 4.325m0 0L20 21.001M9.205 2.397A10 10 0 0 1 12 2c1.152 0 2.258.195 3.288.553M2.049 11Q2 11.494 2 12c0 2.032.606 3.922 1.647 5.5m4.126 3.565c1.284.6 2.716.935 4.227.935a10 10 0 0 0 4.262-.951m4.09-3.549A9.95 9.95 0 0 0 22 12q-.002-.868-.143-1.696"
                                color="currentColor"
                                variants={svgPathVariants}
                            />
                        </motion.svg>
                    </div>
                    <a href="#"
                    ><h1 className="font-ibm text-2xl sm:text-4xl font-semibold">
                            Plate <span className="text-primary">zy</span>
                        </h1>
                    </a>
                </div>

                {/* navigate links */}
                <div
                    id="slildermenu"
                    className={`absolute md:static md:min-h-fit w-full md:w-fit top-0 left-[-100%] bg-[#232736] min-h-[100vh] duration-300 overflow-hidden ${menuStatus ? "left-[0]" : "left-[-100%]"}`}
                >
                    <ul
                        className="min-h-[100vh] md:min-h-fit flex flex-col md:flex-row items-center justify-center gap-8 font-semibold text-xl  md:py-2"
                    >

                        <li title="click here" id="nav-link" onClick={() => setMenuStatus(pre => !pre)} ><NavLink to="/user" end className={({ isActive }) =>
                            `Nav-Link ${isActive ? "text-primary" : "text-inherit"
                            }`
                        }>Home</NavLink></li>

                        <li title="click here" id="nav-link" onClick={() => setMenuStatus(pre => !pre)} ><NavLink to="/user/myorder" className={({ isActive }) =>
                            `Nav-Link ${isActive ? "text-primary" : "text-inherit"
                            }`
                        }>Myorder</NavLink></li>

                        <li title="click here" id="nav-link" onClick={() => setMenuStatus(pre => !pre)} ><NavLink to="/user/about" className={({ isActive }) =>
                            `Nav-Link ${isActive ? "text-primary" : "text-inherit"
                            }`
                        }>About</NavLink></li>


                        <li title="click here" id="nav-link" onClick={() => setMenuStatus(pre => !pre)}>
                            <div className="relative">
                                <NavLink to="/user/cart" className={({ isActive }) =>
                                    `Nav-Link ${isActive ? "text-primary" : "text-inherit"
                                    }`
                                }>Cart
                                </NavLink>
                                <p className={`-top-1 -right-5 h-5 w-5 bg-red-500 rounded-full  p-1 flex items-center justify-center text-sm ${counterValue > 0 ? "absolute" : "hidden"}`}>{counterValue}</p>
                            </div>
                        </li>

                        <li title="click here" id="nav-link" onClick={() => setMenuStatus(pre => !pre)} >
                            {loginStatus ? (
                                <button className="Nav-Link" onClick={() => {

                                    signOut(auth).then(() => {
                                        dispatch(setLoginStatus(false))
                                        dispatch(resetCount())
                                        dispatch(resetAddItems())
                                    });
                                    Swal.fire({
                                        icon: "success",
                                        title: "Logout Successful",
                                        text: "You've been logged out.",
                                        timer: 3000,
                                        showConfirmButton: false,
                                        position: "center"
                                    }).then(() => {
                                        navigate('/user')
                                    })
                                }}>
                                    Logout
                                </button>
                            ) : (
                                <NavLink to="/user/authentication/login" className={
                                    ({ isActive }) =>
                                        `Nav-Link ${isActive ? "text-primary" : "text-inherit"
                                        }`
                                }>Login</NavLink>
                            )
                            }

                        </li>

                    </ul>
                </div>
                {/* menu icon  */}
                <div className="z-50 md:hidden">
                    <i
                        title="Menu"
                        id="menuicon"
                        className={`text-2xl cursor-pointer ${menuStatus ? "ri-close-fill" : "ri-menu-fold-line"}`}
                        onClick={() => setMenuStatus(pre => !pre)}
                    ></i>
                </div>
            </nav>
        </header >

    )
}

export default CustomerNavbar