const AboutWelcomtBtn = ({year,content1,content2}) => {
    return (
        <div className="flex items-center border-l-6 border-l-primary px-4 py-2 w-full md:w-1/2 gap-5 cursor-pointer">
            <h1 className="font-bold text-6xl text-primary">{year}</h1>
            <div>
                <p className="text-gray-500 text-xl whitespace-nowrap">{content1}</p>
                <h1 className="uppercase p-0 m-0 font-semibold text-xl whitespace-nowrap">
                    {content2}
                </h1>
            </div>
        </div>
    )
}

export default AboutWelcomtBtn