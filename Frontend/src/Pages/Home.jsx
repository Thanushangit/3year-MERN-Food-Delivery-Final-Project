import 'swiper/css/bundle';
import CustomerNavbar from '../Componets/Navbar/CustomerNavbar'
import HomeFeaturesCard from '../Componets/HomePage/HomeFeaturesCard';
import PopularDishes from '../Componets/HomePage/PopularDishes';
import HomePageGallery from '../Componets/HomePageGallery';
import Footer from '../Componets/Footer';
import CustomerSwiper from '../Componets/CustomerSwiper';
import HeroSection from '../Componets/HomePage/HeroSection';
import MobileAppSection from '../Componets/HomePage/MobileAppSection';
import FoodMenuButtons from '../Componets/FoodMenu/FoodMenuButtons';

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

            <section
                className="newsletter_bg w-full h-[80vh] bg-[url('https://res.cloudinary.com/thanushan/image/upload/v1747016024/newsletter-bg_zvgzxv.webp')] bg-cover bg-bottom my-10 sm:my-20"
            >
                <div
                    className="newsletter_text mycontainer h-full flex flex-col items-center justify-center gap-6 text-gray-200"
                >
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider"
                    >
                        Newsletter
                    </h1>
                    <p className="text-xl font-semibold text-center">
                        Will be used in accordance with our Privacy policy
                    </p>
                    <div className="flex items-center justify-center sm:w-xl md:w-3xl">
                        <input
                            type="emil"
                            id="mail"
                            name="mail"
                            placeholder="Enter your email😊"
                            className="w-full sm:w-2/3 outline-0 border-2 border-r-0 border-gray-700 py-2 px-4 rounded-tl-full rounded-bl-full"
                        />
                        <button
                            title="Subscribe"
                            className="py-2 px-3 sm:px-6 rounded-tr-full rounded-br-full bg-primary border-2 border-primary border-l-0 font-semibold text-gray-200 hover:cursor-pointer hover:bg-red-700 hover:border-red-700 transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>


            {/* footer  */}
            <Footer />

        </div>
    )
}

export default Home