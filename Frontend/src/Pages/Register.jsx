import { Link, useNavigate } from 'react-router-dom';
import InputField from '../Componets/CartPage/InputField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../Firebase'
import { useState } from 'react';
import { toast } from 'react-toastify';



const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const schema = z.object({
    First_Name: z
      .string()
      .nonempty("The first name is required.")
      .min(5, "The first name must contain at least 5 characters."),

    Last_Name: z
      .string()
      .nonempty("The last name is required.")
      .min(5, "The last name must contain at least 5 characters."),

    email: z
      .string()
      .nonempty("The email is required.")
      .email("Invalid email."),

    password: z
      .string()
      .nonempty("The password is required.")
      .min(8, { message: "Password must be at least 8 characters long." })
      .max(20, { message: "Password must not exceed 20 characters." })
      .regex(/[A-Z]/, { message: "Password must include at least one uppercase letter." })
      .regex(/[a-z]/, { message: "Password must include at least one lowercase letter." })
      .regex(/[0-9]/, { message: "Password must include at least one number." })
      .regex(/[@$!%*?&#]/, { message: "Password must include at least one special character." }),

    Mobile_Number: z
      .string()
      .nonempty("The mobile number is required.")
      .refine(val => /^[0-9]{10}$/.test(val), { message: "Invalid mobile number." }),

    Landline_Number: z
      .string()
      .optional()
      .or(z.literal("")) // allows empty string
      .refine(val => val === "" || /^[0-9]{10}$/.test(val), {
        message: "Invalid landline number.",
      }),

    Delivery_address: z
      .string()
      .nonempty("The delivery address is required.")
      .min(15, "The delivery address must contain at least 15 characters.")
      .max(60, "The delivery address must not exceed 60 characters."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema),
  });


  async function MyHandler(data) {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        First_Name: data.First_Name,
        Last_Name: data.Last_Name,
        Mobile_Number: data.Mobile_Number,
        Landline_Number: data.Landline_Number,
        Delivery_address: data.Delivery_address,
        email: data.email,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Registration Successful!",
        text: "Your account has been created. You can now log in.",
        showConfirmButton: true,
        timer: 3000
      }).then(() => {
        reset();
        navigate("/user/authentication/login");
      });

    } catch (error) {
      toast.warn("This email is already registered", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
      });
      console.error("registation error",error.message)
      
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[url('https://res.cloudinary.com/thanushan/image/upload/v1747127574/login-bg_zugbou.jpg')] bg-center bg-cover flex flex-col justify-center items-center py-10 min-h-screen">
      <div className="container w-full h-full max-w-4xl flex items-center justify-center">
        {/* Register form */}
        <div className="relative w-full flex flex-col p-6 gap-1 bg-[#383333] rounded-2xl">

          {/* Header */}
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-1">
            <div className="flex items-center gap-2" title="Welcome 😊">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    className="text-primary"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m18.5 3.002l-3.44 3.44a1.5 1.5 0 0 0 0 2.12l.69.69M22 6.502l-3.44 3.44a1.5 1.5 0 0 1-2.12 0l-.69-.69m0 0L4 21.002M20 4.999l-2.5 2.5M7.99 8.99c-1.195 1.194-2.833 1.493-4.326 0S1.388 4.778 2.582 3.583C3.777 2.39 6.496 3.172 7.99 4.665s1.195 3.13 0 4.325m0 0L20 21.001M9.205 2.397A10 10 0 0 1 12 2c1.152 0 2.258.195 3.288.553M2.049 11Q2 11.494 2 12c0 2.032.606 3.922 1.647 5.5m4.126 3.565c1.284.6 2.716.935 4.227.935a10 10 0 0 0 4.262-.951m4.09-3.549A9.95 9.95 0 0 0 22 12q-.002-.868-.143-1.696"
                  />
                </svg>
              </div>
              <Link to="/user">
                <h1 className="font-ibm text-2xl sm:text-4xl font-semibold text-gray-300">
                  Plate <span className="text-primary">zy</span>
                </h1>
              </Link>
            </div>

            <Link to="/user" title="Go to home page">
              <div className="max-w-full">
                <p className="py-1 px-4 bg-green-500 text-white font-semibold text-md hover:bg-green-700 duration-200 transition w-fit rounded-lg">
                  <i className="ri-home-2-line"></i>
                </p>
              </div>
            </Link>
          </div>

          <h1 className="text-center font-semibold text-2xl font-ibm text-gray-200 mb-5">
            Create Account
          </h1>

          <form onSubmit={handleSubmit(MyHandler)} className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2 w-full">
            <InputField id="First-Name" name="First_Name" label="First-Name" placeholder="Enter your First Name" errors={errors} register={register} />
            <InputField id="Last-Name" name="Last_Name" label="Last-Name" placeholder="Enter your Last-Name" errors={errors} register={register} />
            <InputField id="email" name="email" label="Email" type='email' placeholder="Enter your email" errors={errors} register={register} />
            <InputField id="password" name="password" autoComplete="new-password" label="Password" type='password' placeholder="Enter your password" errors={errors} register={register} />
            <InputField id="Mobile-Number" name="Mobile_Number" label="Mobile-Number" type='number' placeholder="Enter your Mobile-Number" errors={errors} register={register} />
            <InputField id="Landline-Number" name="Landline_Number" label="Landline Number" star={false} type='number' placeholder="Enter your Landline Number" errors={errors} register={register} />




            <div className="mb-1 md:col-span-2">
              <label htmlFor="Delivery-address">
                <p className="text-gray-300 mb-1">Delivery Address
                  <span className="text-orange-700 text-lg">*</span>
                </p>
                <textarea
                  id="Delivery-address"
                  name="Delivery_address"
                  placeholder="Enter your Delivery Address"
                  className={`outline-0 py-2 px-4 bg-gray-200 rounded w-full resize-none ${errors.Delivery_address ? "shadow-sm shadow-red-500" : ""}`}
                  {...register("Delivery_address")}
                >
                </textarea>
              </label>
              {errors.Delivery_address && <span className='text-red-500 text-sm'> {errors.Delivery_address.message}</span>}
            </div>

            <button
              type="submit"
              title="Sign Up"
              disabled={loading}
              className={`md:col-span-2 w-full mx-auto md:max-w-xl py-2 text-center ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-amber-600'
                } duration-300 transition text-white font-semibold rounded mt-5`}
            >
              {loading ? "Creating your account..." : "Sign Up"}
            </button>

          </form>

          <p className="text-center whitespace-nowrap text-xs sm:text-sm text-gray-300 mt-2">
            Already have an account?{' '}
            <Link
              title="Login now"
              className="font-semibold hover:underline underline-offset-2"
              to="/user/authentication/login"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>

      <p className="text-white mt-5 mb-1 text-xs sm:text-sm">
        © 2025. Powered by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Thanushangit/3year-MERN-Food-Delivery-Final-Project"
          className="hover:text-gray-200 transition duration-200 hover:underline underline-offset-4"
        >
          J'boys.
        </a>
      </p>
    </section>
  );
};

export default Register;
