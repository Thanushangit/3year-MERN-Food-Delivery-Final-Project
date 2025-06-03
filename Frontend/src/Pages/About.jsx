import MissionandVision from "../Componets/About/MissionandVision"
import WelcomeSection from "../Componets/About/welcomeSection"


const About = () => {
    return (
        <div>
            
            {/* <!-- abous us banner  --> */}
            <section
                className="w-full min-h-[40vh] md:min-h-[60vh] bg-[url('https://res.cloudinary.com/thanushan/image/upload/v1747244389/about-bg_uvg6as.webp')] bg-cover bg-bottom-right flex flex-col items-center justify-center text-white">
                <h1 className="font-bold text-2xl md:text-5xl mt-10 md:mt-0">About Us</h1>
            </section>

            {/* <!-- welcome section  --> */}
           <WelcomeSection/>

            {/* Mission and Vision  */}
            <MissionandVision/>

        </div>
    )
}

export default About