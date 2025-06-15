import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAdminLoginStatus } from '../Slices/AdminLogin';




const AdminLoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [adminDetails] = useState({
        email: "jboys@gmail.com",
        password: "Jboys2025@"

    })

    const schema = z.object({
        email: z.string().nonempty("Enter your email").email("The email not valid."),
        password: z
            .string()
            .nonempty("Enter your password")
            .min(8, { message: "Invalid password" })
            .max(20, { message: "Invalid password" })
            .regex(/[A-Z]/, { message: "Invalid password" })
            .regex(/[a-z]/, { message: "Invalid password" })
            .regex(/[0-9]/, { message: "Invalid password" })
            .regex(/[@$!%*?&#]/, { message: "Invalid password" })
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema)
    })



    async function MySubmitHandler(data) {
        setLoading(true);
        try {
            if (data.email === adminDetails.email && data.password === adminDetails.password) {
                dispatch(setAdminLoginStatus(true));
                Swal.fire({
                    icon: "success",
                    title: "Admin Login Successful",
                    text: "Welcome back, Admin. Redirecting to the dashboard...",
                    timer: 2000,
                    showConfirmButton: false,
                    position: "center"
                }).then(() => {
                    navigate("/admin/dashboard", { replace: true });
                    reset();
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "Incorrect email or password.",
                    timer: 2000,
                    showConfirmButton: false
                });
            }
        } catch (err) {
            console.error("admin Login error:", err);
        } finally {
            setLoading(false);
        }
    }


    return (
        <section >
            {/* <!-- header part --> */}
            <header className="bg-[#232736] w-full text-white fixed top-0 left-0 z-50">
                <nav className="mycontainer flex items-center justify-between">
                    {/* <!-- logo part --> */}
                    <div className="flex items-center gap-2" title="Welcome 😊">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                            >
                                {/* <!-- Icon from Huge Icons by Hugeicons - undefined --> */}
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
                        <h1 className="font-ibm text-2xl sm:text-4xl font-semibold">
                            Plate <span className="text-primary">zy</span>
                        </h1>
                    </div>

                    <h1 className="text-2xl md:text-3xl text-primary font-ibm">Admin Page</h1>
                </nav>
            </header>
            <section
                className="min-h-screen w-screen bg-[url('https://res.cloudinary.com/thanushan/image/upload/v1747127574/login-bg_zugbou.jpg')] bg-center bg-cover flex flex-col justify-center items-center"
            >
                <div className="container max-w-2xl">
                    {/* <!-- for the login details input form  --> */}
                    <div
                        className="relative w-full flex flex-col p-6 gap-1 bg-[#383333] rounded-2xl"
                    >
                        <h1 className="text-center font-semibold text-2xl font-ibm text-gray-200">
                            Login
                        </h1>

                        <form onSubmit={handleSubmit(MySubmitHandler)} className="w-full">
                            <div className="mb-2 w-full">
                                <label htmlFor="email">
                                    <p className="text-gray-300 mb-1">Email</p>
                                    <input
                                        className={`outline-0 py-2 px-4 bg-gray-200 rounded w-full ${errors.email ? "shadow-sm shadow-red-500" : ""}`}
                                        type="email"
                                        placeholder="Enter your email"
                                        id="email"
                                        autoComplete="off"
                                        {...register('email')}
                                    />
                                </label>
                                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                            </div>
                            <div className="mb-2 w-full">
                                <label htmlFor="password">
                                    <p className="text-gray-300 mb-1">Password</p>
                                    <input
                                        className={`outline-0 py-2 px-4 bg-gray-200 rounded w-full ${errors.password ? "shadow-sm shadow-red-500" : ""} `}
                                        type="password"
                                        placeholder="Enter your password"
                                        autoComplete="new-password"
                                        id="password"
                                        {...register('password')}
                                    />
                                </label>
                                {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
                            </div>
                            <div className="w-full flex justify-center">

                                <button title='Sign In' className={`w-full sm:w-1/2 py-3 text-center ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary cursor-pointer hover:bg-amber-600"}  duration-300 transition text-white font-semibold rounded mt-5`}>
                                    Sign In
                                </button>

                            </div>
                        </form>
                    </div>
                </div>

                <p className="text-white md:mt-10">
                    copyright &copy; 2025. Powered by
                    <span
                        title="source code"
                        className="hover:text-gray-200 transition duration-200 hover:underline underline-offset-4"
                    ><a
                        target="_blank"
                        href="https://github.com/Thanushangit/3year-MERN-Food-Delivery-Final-Project"
                    >J'boys.</a></span>
                </p>
            </section>


        </section>
    )
}

export default AdminLoginPage