const Branches = [
    {
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747325345/map-restaurant-01_cupo2i.webp",
        alt: "Colombo-restaurant",
        link: "ttps://maps.app.goo.gl/m5voeJBFZF96PASr9",
        address: "5th Floor, 243 Galle Road, Colombo 03, Western Province (WP),00300",
        tele: "011-2563562"
    },
    {
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747325340/map-restaurant-02_ezz3if.webp",
        alt: "vasaviilan-restaurant",
        link: "https://maps.app.goo.gl/YHggXC1i1b76xicn8",
        address: "88 Vasavilan Road,Near Central Market Jaffna, Northern Province (NP), 40000",
        tele: "021-2563568"
    },
    {
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747325341/map-restaurant-03_tig5uy.webp",
        alt: "Anuradhapura-restaurant",
        link: "https://maps.app.goo.gl/m5voeJBFZF96PASr9",
        address: "56 Mihindu Mawatha, Anuradhapura, North Central Province (NCP),50000",
        tele: "025-2563563"
    },
    {
        image: "https://res.cloudinary.com/thanushan/image/upload/v1747325337/map-restaurant-04_usylge.webp",
        alt: "Ampara-restaurant",
        link: "https://maps.app.goo.gl/m5voeJBFZF96PASr9",
        address: "102 Main Street,Opposite Ampara General Hospital Ampara, Eastern Province (EP), 32000",
        tele: "063-2563569"
    }

]


const BranchCard = () => {
    return (
        <>
            {
                Branches.map((Bran,ind) => (
                    <div key={ind} title={`${Bran.alt} Branch`} className="flex flex-col items-center gap-1 bg-gray-300">
                        <div className="h-36 w-full overflow-hidden">
                            <img
                                src={Bran.image}
                                alt={Bran.alt}
                                loading="lazy"
                                className="object-center object-cover w-full h-full rounded"
                            />
                        </div>
                        <a href={Bran.link} target="_blank" title={`visit the ${Bran.alt}`} className="text-3xl text-primary hover:cursor-pointer hover:text-red-600 transition duration-300" >
                            <i className="ri-map-pin-line"></i>
                        </a>

                        <h1 className="text-center text-lg text-gray-700 p-1">
                            {Bran.address}
                        </h1>
                        <p className="text-red-400 font-semibold p-1">{Bran.tele}</p>
                    </div>
                ))
            }
        </>
    )
}

export default BranchCard