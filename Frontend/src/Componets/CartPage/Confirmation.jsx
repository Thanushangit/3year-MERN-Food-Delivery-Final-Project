import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import { resetAddItems } from '../../Slices/AddItemsSlice'
import { resetCount } from '../../Slices/CounterSlice'
import { resetOrderItemQty } from "../../Slices/OrderItemsWithQty";
import { setOrderStatus } from '../../Slices/OrderStatusSlice'
import emailjs from 'emailjs-com';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../../Firebase'
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Confirmation = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const user = auth.currentUser;
            if (user) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                }
            }
        };
        fetchDetails();
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orderItemsWithQty = useSelector(sta => sta.addItemsWithQty);
    const login_status = useSelector(sta => sta.loginStatus.status)
    const location = useLocation();
    const total = location.state?.total;
    const discount = location.state?.discount;
    const delivery = location.state?.delivery;

    const schema = z.object({
        FirstName: z.string().nonempty("First Name is required").min(3).max(20),
        LastName: z.string().nonempty("Last Name is required").min(3).max(20),
        Email: z.string().nonempty("Email is required").email(),
        MobileNumber: z.string().nonempty("Mobile Number is required").regex(/^\d{10}$/),
        DeliveryAddress: z.string().nonempty("Address is required").min(15).max(100),
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

    const onSubmit = (data) => {
        if (login_status) {
            // Prepare orders array for EmailJS template
            const orders = orderItemsWithQty.map(item => ({
                image_url: item.image,
                name: item.title,
                units: item.Qty,
                unit_price: item.price,
                price: item.price * item.Qty,
            }));

            const templateParams = {
                email: data.Email,
                user_name: `${data.FirstName} ${data.LastName}`,
                order_id: Math.floor(Math.random() * 1000000),
                orders,
                cost: {
                    delivery,
                    discount,
                    total,
                }
            };

            emailjs.send(
                'service_kdj0nvh',
                'template_k7vmo1k',
                templateParams,
                'Cvpw-eL8j_z2d80DN'
            )
                .then(response => {
                    console.log('✅ Email sent!', response.status, response.text);

                    dispatch(resetAddItems());
                    dispatch(resetCount());
                    dispatch(resetOrderItemQty());
                    dispatch(setOrderStatus("placed"));

                    navigate("/cart/orderSuccess", { replace: true });
                })
                .catch(error => {
                    console.error('❌ Email send failed...', error);
                   
                });
        } else {
            Swal.fire({
                title: "Login Required",
                text: "Please login first to place your order.",
                icon: "warning",
                confirmButtonText: "Go to Login",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/authentication/login"); 
                }
            });
            return;
        }
    };

    return (
        <section className="min-h-screen bg-[url('https://res.cloudinary.com/thanushan/image/upload/v1747127574/login-bg_zugbou.jpg')] bg-center bg-cover flex flex-col justify-center items-center ">
            <div className="container h-full max-w-4xl flex items-center justify-center mt-10">
                <div className="relative w-full flex flex-col p-6 gap-1 bg-[#383333] rounded-2xl">
                    <h1 className="text-center font-semibold text-2xl font-ibm text-gray-200 mb-5 flex items-center justify-center gap-5">
                        <Link to={"/cart"} title="Back" className="text-green-700 text-2xl font-bold hover:text-primary duration-300 transition">
                            <i className="ri-arrow-left-long-line"></i>
                        </Link>
                        confirmation
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 w-full">
                        <InputField id="FirstName" name="FirstName" label="FirstName" placeholder="Enter your First Name" errors={errors} register={register} />
                        <InputField id="LastName" name="LastName" label="LastName" placeholder="Enter your Last Name" errors={errors} register={register} />
                        <InputField id="MobileNumber" name="MobileNumber" label="Mobile Number" placeholder="Enter your mobile number" type="number" errors={errors} register={register} />
                        <InputField id="Email" name="Email" label="Email Address" placeholder="Enter your Email address" errors={errors} register={register} />

                        <div className="mb-1 md:col-span-2">
                            <label htmlFor="Delivery-address">
                                <p className="text-gray-300 mb-1">Delivery Address  <span className="text-orange-700 text-lg">*</span> </p>
                                <textarea
                                    id="Delivery-address"
                                    name="DeliveryAddress"
                                    {...register("DeliveryAddress")}
                                    placeholder="Enter your Delivery Address"
                                    className={`outline-0 py-2 px-4 bg-gray-200 rounded w-full resize-none ${errors.DeliveryAddress ? "border border-red-500" : "border-0"}`}
                                ></textarea>
                                {errors.DeliveryAddress && <span className='text-red-500 text-sm'> {errors.DeliveryAddress.message}</span>}
                            </label>
                        </div>

                        <button
                            title="Confirm"
                            className="md:col-span-2 w-full mx-auto md:max-w-xl py-2 text-center bg-green-600 cursor-pointer hover:bg-green-800 duration-300 transition text-white font-semibold rounded mt-5"
                            type="submit"
                        >
                            Confirm
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
