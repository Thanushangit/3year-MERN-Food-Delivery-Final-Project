import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const MyOrder = () => {

    const loginStatus = useSelector(state => state.loginStatus.status);

    useEffect(() => {
        if (!loginStatus) {
            toast.error('Please log in to view your orders.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [loginStatus]);



    return (

        <>
            {loginStatus && <section className="mycontainer mt-20 md:mt-15 ">

                <div className="space-x-3 mt-5  flex justify-center bg-gray-200 max-w-96  rounded-lg border-2 border-gray-200">
                    <NavLink to={"/user/myorder"} end className={({ isActive }) => ` w-1/2 text-center py-2 rounded-lg transition-all duration-300 text-lg ${isActive ? " text-gray-500 bg-white font-semibold" : "text-gray-400 bg-transparent"}`}>Current Order</NavLink>

                    <NavLink to={'/user/myorder/History'} className={({ isActive }) => ` w-1/2 text-center py-2 rounded-lg transition-all duration-300 text-lg ${isActive ? " bg-white text-gray-500 font-semibold" : " bg-transparent text-gray-400"}`}>Order History</NavLink>

                </div>

                <Outlet />

            </section>}


            {!loginStatus &&

                <section className="mycontainer min-h-screen mt-5 flex items-center justify-center ">
                    <h1 className="text-2xl md:text-4xl text-center text-gray-400">You need to log in to view your orders.
                    </h1>

                </section>
            }

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </>

    );
};

export default MyOrder;
