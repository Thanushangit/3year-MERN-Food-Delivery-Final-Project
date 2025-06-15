import { useEffect, useState } from 'react'
import PopularDishes from '../Componets/AdminHomePage/PopularDishes'
import { popularDishes } from '../FetchLoaders/Fetchingdata';
import { loadBreakFast } from '../FetchLoaders/Fetchingdata'
import { loadLunch } from '../FetchLoaders/Fetchingdata'
import { loadDinner } from '../FetchLoaders/Fetchingdata'
import BreakFastFoodCard from '../Componets/AdminHomePage/BreakFastFoodCard'
import LunchFoodCard from '../Componets/AdminHomePage/LunchFoodCard'
import DinnerFoodCard from '../Componets/AdminHomePage/DinnerFoodCard'
import SingleFoodDetails from '../Componets/AdminHomePage/SingleFoodDetails';
import AddPopularFood from '../Componets/AdminHomePage/AddPopularFood';
import AddBreakFastFood from '../Componets/AdminHomePage/AddBreakFastFood';
import AddLunch from '../Componets/AdminHomePage/AddLunch';
import AddDinner from '../Componets/AdminHomePage/AddDinner';
import AddFoodForm from '../Componets/AdminHomePage/AddFoodForm';
import socket from '../socket'


const AdminHomePage = () => {


  const [popular, setPopular] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [showDetailsStatus, setShowDetailsStatus] = useState(false);
  const [AddFoodFormStatus, setAddFoodFormStatus] = useState(false);
  const [AddFoodCategory, setAddFoodCategory] = useState("");
  const [showDetails, setShowDetails] = useState({
    showid: "",
    showimg: "",
    showtitle: "",
    showprice: "",
    showdescription: "",
    category: ""
  })


  // it for the popularDishes 
  useEffect(() => {
    const fetchData = async () => {
      const data = await popularDishes();
      setPopular(data);
    };

    fetchData();

    socket.on("popularAdded", () => {
      fetchData();
    });

    socket.on("popularUpdated", () => {
      fetchData();
    });

    socket.on("popularDeleted", () => {
      fetchData();
    });

    // Clean up listeners
    return () => {
      socket.off("popularAdded");
      socket.off("popularUpdated");
      socket.off("popularDeleted");
    };



  }, []);



  // it for the breakfast 
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadBreakFast();
      setBreakfast(data);
    };
    fetchData();

    socket.on("breakfastAdded", () => {
      fetchData();
    });

    socket.on("breakfastUpdated", () => {
      fetchData();
    });

    socket.on("breakfastDeleted", () => {
      fetchData();
    });

    // Clean up listeners
    return () => {
      socket.off("breakfastAdded");
      socket.off("breakfastUpdated");
      socket.off("breakfastDeleted");
    };

  }, []);


  // it for the lunch 
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadLunch();
      setLunch(data);
    };
    fetchData();

    socket.on("lunchAdded", () => {
      fetchData();
    });

    socket.on("lunchUpdated", () => {
      fetchData();
    });

    socket.on("lunchDeleted", () => {
      fetchData();
    });

    // Clean up listeners
    return () => {
      socket.off("lunchAdded");
      socket.off("lunchUpdated");
      socket.off("lunchDeleted");
    };

  }, []);


  // it for the dinner
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDinner();
      setDinner(data);
    };
    fetchData();

     socket.on("dinnerAdded", () => {
      fetchData();
    });

    socket.on("dinnerUpdated", () => {
      fetchData();
    });

    socket.on("dinnerDeleted", () => {
      fetchData();
    });

    // Clean up listeners
    return () => {
      socket.off("dinnerAdded");
      socket.off("dinnerUpdated");
      socket.off("dinnerDeleted");
    };


  }, []);







  return (
    <div className='relative'>
      {/* <!-- Populer Dishes --> */}

      <section className="my-15 sm:my-15 bg-[#e9ecef]">
        <div className="mycontainer">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl my-8 sm:mb-8 font-bold font-ibm"
          >
            Populer Dishes
          </h1>
          <div className="grid grid-rows-1 w-full">
            <div
              className="grid grid-cols-2 md:grid-cols-3 mb-5 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-x-5 gap-y-7 md:gap-y-10"
            >

              {
                popular.map((item) => (
                  <PopularDishes item={item} key={item._id} setShowDetailsStatus={setShowDetailsStatus} setShowDetails={setShowDetails} />
                ))
              }

            </div>

            <AddPopularFood setAddFoodFormStatus={setAddFoodFormStatus} setAddFoodCategory={setAddFoodCategory} />

          </div>
        </div>
      </section>

      {/* <!-- ← breakfast section → --> */}

      <section className="my-15 sm:my-35 bg-[#e9ecef]">
        <div className="mycontainer my-5 md:my-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl my-8 sm:mb-8 font-bold font-ibm"
          >
            Breakfast Foods
          </h1>
          <div
            id="breakFastDiv"
            className="food_item_container grid relative grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-5 lg:gap-y-5"
          >
            {
              breakfast.map((item) => (
                <BreakFastFoodCard item={item} key={item._id} setShowDetailsStatus={setShowDetailsStatus} setShowDetails={setShowDetails} />

              ))
            }


          </div>
          <AddBreakFastFood setAddFoodFormStatus={setAddFoodFormStatus} setAddFoodCategory={setAddFoodCategory} />
        </div>
      </section>


      {/* <!-- ← lunch section → --> */}

      <section className="my-15 sm:my-35 bg-[#e9ecef]">
        <div className="mycontainer my-5 md:my-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl my-8 sm:mb-8 font-bold font-ibm"
          >
            Lunch Foods
          </h1>
          <div
            id="lunchDiv"
            className="food_item_container grid relative grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-5 lg:gap-y-5"
          >
            {
              lunch.map((item) => (
                <LunchFoodCard item={item} key={item._id} setShowDetailsStatus={setShowDetailsStatus} setShowDetails={setShowDetails} />

              ))
            }

          </div>
          <AddLunch setAddFoodFormStatus={setAddFoodFormStatus} setAddFoodCategory={setAddFoodCategory} />
        </div>
      </section>


      {/* <!-- ← dinner section → --> */}

      <section className="mt-15 sm:mt-35 bg-[#e9ecef]">
        <div className="mycontainer my-5 md:my-10">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl my-8 sm:mb-8 font-bold font-ibm"
          >
            Dinner Foods
          </h1>
          <div
            id="dinnerDiv"
            className="food_item_container grid relative grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 lg:gap-x-5 lg:gap-y-5"
          >
            {
              dinner.map((item) => (
                <DinnerFoodCard item={item} key={item.id} setShowDetailsStatus={setShowDetailsStatus} setShowDetails={setShowDetails} />
              ))
            }

          </div>
          <AddDinner setAddFoodFormStatus={setAddFoodFormStatus} setAddFoodCategory={setAddFoodCategory} />
        </div>
      </section>

      {/* it for the edit food  */}
      {showDetailsStatus && <SingleFoodDetails category={showDetails.category} showid={showDetails.showid} showimg={showDetails.showimg} showtitle={showDetails.showtitle} showprice={showDetails.showprice} showdescription={showDetails.showdescription} setShowDetailsStatus={setShowDetailsStatus} />}

      {/* it for the add new food  */}
      {AddFoodFormStatus && <AddFoodForm AddFoodCategory={AddFoodCategory} setAddFoodFormStatus={setAddFoodFormStatus} />}

    </div>
  )
}

export default AdminHomePage