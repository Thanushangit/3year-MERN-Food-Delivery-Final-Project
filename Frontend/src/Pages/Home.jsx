import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CustomerNavbar from '../Componets/Navbar/CustomerNavbar'
import HomeFeaturesCard from '../Componets/HomePage/HomeFeaturesCard';
import PopularDishes from '../Componets/HomePage/PopularDishes';
import HomePageGallery from '../Componets/HomePage/HomePageGallery';
import Footer from '../Componets/Footer/Footer'
import CustomerSwiper from '../Componets/HomePage/CustomerSwiper';
import HeroSection from '../Componets/HomePage/HeroSection';
import MobileAppSection from '../Componets/HomePage/MobileAppSection';
import FoodMenuButtons from '../Componets/FoodMenu/FoodMenuButtons';
import NewsLetter from '../Componets/HomePage/NewsLetter';


const Home = () => {
    return (
        <div>



            {/* navbar */}
            <CustomerNavbar />


            {/* Hero section part */}
            <HeroSection />


            {/* HomeFeaturesCard  */}
            <HomeFeaturesCard />


            {/* Popular Dishes    */}
            <PopularDishes />


            {/* mobile app section  */}
            <MobileAppSection />


            {/* <!-- food menu section  --> */}
            <FoodMenuButtons />


            {/* customer swiper section  */}

            <CustomerSwiper />



            {/* Gallery section  */}
            <HomePageGallery />


            {/* <!-- newsletter  --> */}

            <NewsLetter />

          

            {/* footer  */}
            <Footer />


            {/* tostify container */}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>
    )
}

export default Home