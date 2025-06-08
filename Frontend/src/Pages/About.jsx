import BranchCard from "../Componets/About/BranchCard"
import HealthyFoodSection from "../Componets/About/HealthyFoodSection"
import MemberCard from "../Componets/About/MemberCard"
import MissionandVision from "../Componets/About/MissionandVision"
import ServicesSection from "../Componets/About/ServicesSection"
import WelcomeSection from "../Componets/About/welcomeSection"
import Footer from '../Componets/Footer/Footer'


const About = () => {
    return (
        <div>

            {/* <!-- abous us banner  --> */}
            <section
                className="w-full min-h-[40vh] md:min-h-[60vh] bg-[url('https://res.cloudinary.com/thanushan/image/upload/v1747244389/about-bg_uvg6as.webp')] bg-cover bg-bottom-right flex flex-col items-center justify-center text-white">
                <h1 className="font-bold text-2xl md:text-5xl mt-10 md:mt-0">About Us</h1>
            </section>

            {/* <!-- welcome section  --> */}
            <WelcomeSection />

            {/* Mission and Vision  */}
            <MissionandVision />

            {/* healthy Food section  */}
            <HealthyFoodSection />

            {/* Services section  */}
            <ServicesSection />

            {/* Team members Section  */}
            <section className="my-10 sm:my-30 w-full">
                <div className="mycontainer flex flex-col items-center justify-center">
                    <h1 className="font-ibm text-2xl md:text-4xl font-semibold sm:mb-3">
                        Meet Our Team
                    </h1>

                    <MemberCard />
                </div>
            </section>

            {/* <!-- ← our branches → --> */}
            <section className="my-10 sm:my-30 w-full bg-[#83d6ea]">
                <h1
                    className="text-2xl md:text-4xl my-3 font-semibold font-ibm text-gray-800 text-center pt-3"
                >
                    Our Branches
                </h1>
                <div
                    className="mycontainer md:!py-8 flex flex-col md:flex-row items-center justify-between gap-10"
                >
                    <div className="w-full md:w-1/2">
                        <img
                            title="our branches"
                            src="https://res.cloudinary.com/thanushan/image/upload/v1747325322/map_vbsljj.webp"
                            alt="map"
                            className="object-center object-cover cursor-pointer"
                            loading="lazy"
                        />
                    </div>
                    <div
                        className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
                    >
                        <BranchCard />

                    </div>
                </div>
            </section>


            {/* Footer  */}
            <Footer />
            
        </div>
    )
}

export default About