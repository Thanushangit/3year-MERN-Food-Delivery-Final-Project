import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setLoginStatus } from '../Slices/LoginConfirmation';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase'
import { useState } from 'react';

const Login = () => {

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

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
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You're now ready to order your favorite food. Redirecting...",
        timer: 4000,
        showConfirmButton: false,
        position: "center"
      }).then(() => {
        navigate("/user", { replace: true });
        dispatch(setLoginStatus(true));
        reset();
      })

    } catch (err) {
      console.log("login page error", err)
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect username or password. Please try again.",
        timer: 5000,
        showConfirmButton: true,

      })

    } finally {
      setLoading(false)
    }
  }


  return (
    <section className="min-h-screen  bg-[url('https://res.cloudinary.com/thanushan/image/upload/v1747127574/login-bg_zugbou.jpg')] bg-center bg-cover flex flex-col justify-center items-center">
      <div className="md:relative container md:!p-10 w-full h-full lg:border-gray-500 lg:rounded-2xl lg:border max-w-4xl flex flex-col md:flex-row gap-y-3 items-center justify-center">

        {/* Logo and Image */}
        <div className="flex items-center justify-center h-full w-4/5 md:w-full mt-20 md:mt-0">
          <div className="items-center gap-2 absolute top-2 left-2 flex md:top-5 md:left-8">
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
                  color="currentColor"
                />
              </svg>
            </div>
            <Link to="/user">
              <h1 className="font-ibm text-2xl sm:text-4xl font-semibold text-gray-200">
                Plate <span className="text-primary">zy</span>
              </h1>
            </Link>
          </div>
          <div className="md:w-2/3">
            <img
              className="w-full h-full object-center object-cover"
              src="https://res.cloudinary.com/thanushan/image/upload/v1747127580/login-img-new_o5euge.png"
              alt="login-img"
            />
          </div>
        </div>

        {/* Login Form */}
        <div className="relative w-full md:w-fit flex flex-col p-6 gap-1 bg-[#383333] rounded-2xl">
          <Link title="Go to home page" to="/user">
            <div className="py-1 px-4 bg-green-500 text-white font-semibold text-md hover:bg-green-700 duration-200 transition w-fit rounded-lg">
              <i className="ri-home-2-line"></i>
            </div>
          </Link>
          <h1 className="text-center font-semibold text-2xl font-ibm text-gray-200">Login</h1>
          <form onSubmit={handleSubmit(MySubmitHandler)}>
            <div className="mb-2">
              <label htmlFor="email">
                <p className="text-gray-300 mb-1">Email</p>
                <input
                  className={`outline-0 py-2 px-4 bg-gray-200 rounded w-full ${errors.email ? "shadow-sm shadow-red-500" : ""}`}
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  autoComplete="off"
                  {...register("email")}
                />
              </label>
              {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
            </div>
            <div className="mb-2">
              <label htmlFor="password">
                <p className="text-gray-300 mb-1">Password</p>
                <input
                  className={`outline-0 py-2 px-4 bg-gray-200 rounded w-full ${errors.password ? "shadow-sm shadow-red-500" : ""}`}
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password")}
                />
              </label>
              {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
            </div>

            <div className="w-full h-full mt-5 flex items-center justify-center">
              <button
                type="submit"
                title="Sign In"
                className={`w-full py-2 px-8 text-center ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary cursor-pointer hover:bg-amber-600"}  duration-300 transition text-white font-semibold rounded mt-5`}
              >
                {loading ? "Please wait..." : "Sign In"}
              </button>
            </div>
          </form>

          <p className="text-center text-gray-300 text-sm mt-2">or continue with</p>
          <div className="flex items-center justify-between gap-2">
            {/* Google */}
            <div title="Google" className="md:w-20 w-full h-9 bg-white hover:bg-gray-200 transition cursor-pointer rounded-full flex items-center justify-center">
              <img
                className="w-8 h-8 object-center object-cover"
                src="https://res.cloudinary.com/thanushan/image/upload/v1747127574/google-img_aaskz8.webp"
                alt="google icon"
              />
            </div>

            {/* GitHub */}
            <div title="GitHub" className="md:w-20 w-full h-9 bg-white hover:bg-gray-200 transition cursor-pointer rounded-full flex items-center justify-center">
              <img
                className="w-6 h-6 object-center object-cover"
                src="https://res.cloudinary.com/thanushan/image/upload/v1747127578/github-icon_j32m0o.png"
                alt="github icon"
              />
            </div>

            {/* Facebook */}
            <div title="Facebook" className="md:w-20 w-full h-9 bg-white hover:bg-gray-200 transition cursor-pointer rounded-full flex items-center justify-center">
              <img
                className="w-6 h-6 object-center object-cover"
                src="https://res.cloudinary.com/thanushan/image/upload/v1747127576/facebook-icon_waojl6.png"
                alt="facebook icon"
              />
            </div>
          </div>

          <p className="text-center whitespace-nowrap text-xs sm:text-sm text-gray-300 mt-2">
            Don't have an account yet?{" "}
            <Link
              title="Register now"
              className="font-semibold hover:underline underline-offset-2"
              to="/user/authentication/register"
            >
              Register for free
            </Link>
          </p>
        </div>
      </div>
      <p className="text-white md:mt-5 py-4 lg:py-0">
        © 2025. Powered by{" "}
        <a
          className="hover:text-gray-200 underline underline-offset-4"
          href="https://github.com/Thanushangit/3year-MERN-Food-Delivery-Final-Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          J'boys.
        </a>
      </p>
    </section>
  );
};

export default Login;
