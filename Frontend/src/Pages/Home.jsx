import 'swiper/css/bundle';
import 'react-toastify/dist/ReactToastify.css';
import ScrollReveal from "scrollreveal";
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
import { useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2500,
            delay: 300,
            reset: false,
        });

        sr.reveal(`.hero_text,.cart_heading`);
        sr.reveal(`.hero_image`, { delay: 500, scale: 0.5 });
        sr.reveal(`.service_card,.food_item`, { interval: 100, delay: 200 });
        sr.reveal(`.mobile,.newsletter_bg`);
        sr.reveal(`.mobile_content`, { origin: "left" });
        sr.reveal(`.food_item_container`, { origin: "left", delay: 200 });
        sr.reveal(`.footer`, { origin: "bottom", duration: 2000, delay: 200, mobile: false });
        sr.reveal(`.gallery_item`, { scale: 0.5, interval: 100 });
        sr.reveal(`.customer_container`, { duration: 3000 });
        sr.reveal(`.dishes_item`, { interval: 100, delay: 200 });
        sr.reveal(`.newsletter_text`, { origin: "bottom", duration: 3500, delay: 500, mobile: false });
    }, []);

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