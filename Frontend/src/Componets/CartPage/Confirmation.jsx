import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import { resetAddItems } from '../../Slices/AddItemsSlice'
import { resetCount } from '../../Slices/CounterSlice'
import { resetOrderItemQty } from "../../Slices/OrderItemsWithQty";
import emailjs from 'emailjs-com';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase'
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";

const Confirmation = () => {
    const auth = getAuth();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchDetails = async () => {
            const user = auth.currentUser;
            if (user) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData({
                        uid: user.uid, // Firebase UID
                        ...docSnap.data(), // Other data from Firestore
                    });
                }
            }
        };
        fetchDetails();
    }, []);


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orderItemsWithQty = useSelector(sta => sta.addItemsWithQty);
    const login_status = useSelector(sta => sta.loginStatus.status);
    const location = useLocation();
    const total = location.state?.total;
    const discount = location.state?.discount;
    const delivery = location.state?.delivery;

    const schema = z.object({
        FirstName: z
            .string()
            .nonempty("The first name is required.")
            .min(5, "The first name must contain at least 5 characters."),

        LastName: z
            .string()
            .nonempty("The last name is required.")
            .min(5, "The last name must contain at least 5 characters."),
        Email: z
            .string()
            .nonempty("The email is required.")
            .email("Invalid email."),
        MobileNumber: z
            .string()
            .nonempty("The mobile number is required.")
            .refine(val => /^[0-9]{10}$/.test(val), { message: "Invalid mobile number." }),
        DeliveryAddress: z
            .string()
            .nonempty("The delivery address is required.")
            .min(15, "The delivery address must contain at least 15 characters.")
            .max(60, "The delivery address must not exceed 60 characters."),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        if (userData) {
            reset({
                FirstName: userData.First_Name,
                LastName: userData.Last_Name,
                Email: userData.email,
                MobileNumber: userData.Mobile_Number,
                DeliveryAddress: userData.Delivery_address,
            });
        }
    }, [userData, reset]);

    const onSubmit = async (data) => {
        if (!login_status) {
            Swal.fire({
                title: "Login Required",
                text: "Please login first to place your order.",
                icon: "warning",
                confirmButtonText: "Go to Login",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/user/authentication/login");
                }
            });
            return;
        }

        setLoading(true);

        try {
            // Prepare orders array for EmailJS template
            // const orders = orderItemsWithQty.map(item => ({
            //     image_url: item.image,
            //     name: item.title,
            //     units: item.Qty,
            //     unit_price: item.price,
            //     price: item.price * item.Qty,
            // }));


            const OrdersDb = orderItemsWithQty.map(item => ({
                name: item.title,
                units: item.Qty,
                img: item.image,
                price: item.price
            }));


            // const templateParams = {
            //     email: data.Email,
            //     user_name: `${data.FirstName} ${data.LastName}`,
            //     order_id: Math.floor(Math.random() * 1000000),
            //     orders,
            //     cost: {
            //         delivery,
            //         discount,
            //         total,
            //     }
            // };

            // const response = await emailjs.send(
            //     'service_kdj0nvh',
            //     'template_k7vmo1k',
            //     templateParams,
            //     'Cvpw-eL8j_z2d80DN'
            // );

            //this data for the send to the db
            await axios.post(`http://localhost:3000/order/customerOrder/new`, {
                FirstName: data.FirstName,
                LastName: data.LastName,
                Email: data.Email,
                MobileNumber: data.MobileNumber,
                DeliveryAddress: data.DeliveryAddress,
                TotalAmount: total,
                OrderStatus: "placed",
                OrderItems: OrdersDb,
                FirebaseUID: userData.uid,
                createdAt: new Date(),
            });

            // Reset the states
            dispatch(resetAddItems());
            dispatch(resetCount());
            dispatch(resetOrderItemQty());


            // Navigate to success page
            navigate("/user/cart/orderSuccess", { replace: true });

        } catch (error) {
            console.error(' Failed to send email:', error);
            Swal.fire({
                title: "Error",
                text: "Order failed to process. Please try again later.",
                icon: "error"
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="min-h-screen bg-[url('https://res.cloudinary.com/thanushan/image/upload/v1747127574/login-bg_zugbou.jpg')] bg-center bg-cover flex flex-col justify-center items-center ">
            <div className="container h-full max-w-4xl flex items-center justify-center mt-10">
                <div className="relative w-full flex flex-col p-6 gap-1 bg-[#383333] rounded-2xl">
                    <h1 className="text-center font-semibold text-2xl font-ibm text-gray-200 mb-5 flex items-center justify-center gap-5">
                        <Link to={"/user/cart"} title="Back" className="text-green-700 text-2xl font-bold hover:text-primary duration-300 transition">
                            <i className="ri-arrow-left-long-line"></i>
                        </Link>
                        confirmation
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 w-full">
                        <InputField id="FirstName" name="FirstName" label="FirstName" placeholder="Enter your First Name" errors={errors} register={register} />
                        <InputField id="LastName" name="LastName" label="LastName" placeholder="Enter your Last Name" errors={errors} register={register} />
                        <InputField id="MobileNumber" name="MobileNumber" label="Mobile Number" placeholder="Enter your mobile number" type="number" errors={errors} register={register} />
                        <InputField id="Email" name="Email" label="Email Address" placeholder="Enter your Email address" errors={errors} register={register} loading={loading} />

                        <div className="mb-1 md:col-span-2">
                            <label htmlFor="Delivery-address">
                                <p className="text-gray-300 mb-1">Delivery Address  <span className="text-orange-700 text-lg">*</span> </p>
                                <textarea
                                    id="Delivery-address"
                                    name="DeliveryAddress"
                                    {...register("DeliveryAddress")}
                                    placeholder="Enter your Delivery Address"
                                    className={`outline-0 py-2 px-4 bg-gray-200 rounded w-full resize-none ${errors.DeliveryAddress ? "border border-red-500" : "border-0"}`}
                                    disabled={loading}
                                ></textarea>
                                {errors.DeliveryAddress && <span className='text-red-500 text-sm'> {errors.DeliveryAddress.message}</span>}
                            </label>
                        </div>

                        <button
                            title="Confirm"
                            className={`md:col-span-2 w-full mx-auto md:max-w-xl py-2 text-center ${loading ? "bg-gray-400 cursor-not-allowed" : "cursor-pointer bg-green-600 hover:bg-green-800"} duration-300 transition text-white font-semibold rounded mt-5`}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Confirm"}

                        </button>
                    </form>
                </div>
            </div>

            <p className="text-white mb-1 md:mb-0 mt-1">
                copyright &copy; 2025. Powered by
                <span
                    title="source code"
                    className="hover:text-gray-200 transition duration-200 hover:underline underline-offset-4"
                >
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Thanushangit/3year-MERN-Food-Delivery-Final-Project.git"
                    >
                        J'boys.
                    </a>
                </span>
            </p>
        </section>
    );
};

export default Confirmation;
