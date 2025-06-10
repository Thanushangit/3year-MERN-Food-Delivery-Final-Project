import { useEffect, useState } from 'react'
import PopularDishes from '../Componets/AdminHomePage/PopularDishes'
import { popularDishes } from '../FetchLoaders/Fetchingdata';
import { loadBreakFast } from '../FetchLoaders/Fetchingdata'
import { loadLunch } from '../FetchLoaders/Fetchingdata'
import { loadDinner } from '../FetchLoaders/Fetchingdata'
import AddNewButton from '../Componets/AdminHomePage/AddNewButton';
import FoodCard from '../Componets/AdminHomePage/FoodCard';
import SingleFoodDetails from '../Componets/AdminHomePage/SingleFoodDetails';

const AdminHomePage = () => {
  const [popular, setPopular] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);

  const [showDetailsStatus, setShowDetailsStatus] = useState(false);
  const [showDetails, setShowDetails] = useState({
    showid: "",
    showimg: "",
    showtitle: "",
    showprice: "",
    showdescription: ""
  })


  // it for the popularDishes 
  useEffect(() => {
    const fetchData = async () => {
      const data = await popularDishes();
      setPopular(data);
    };
    fetchData();

  }, []);




  // it for the breakfast 
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadBreakFast();
      setBreakfast(data);
    };
    fetchData();
  }, []);




  // it for the lunch 
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadLunch();
      setLunch(data);
    };
    fetchData();
  }, []);



  // it for the dinner
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDinner();
      setDinner(data);
    };
    fetchData();
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
                  <PopularDishes item={item} key={item.id} setShowDetailsStatus={setShowDetailsStatus} setShowDetails={setShowDetails} />
                ))
              }

            </div>

            <AddNewButton />

          </div>
        </div>
      </section>

      {/* <!-- ← breakfast section → --> */}

      {/* <section className="my-15 sm:my-35 bg-[#e9ecef]">
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
                <FoodCard item={item} key={item.id} />
              ))
            }


          </div>
          <AddNewButton />
        </div>
      </section> */}


      {/* <!-- ← lunch section → --> */}

      {/* <section className="my-15 sm:my-35 bg-[#e9ecef]">
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
                <FoodCard item={item} key={item.id}/>
              ))
            }
            
          </div>
          <AddNewButton />
        </div>
      </section> */}


      {/* <!-- ← dinner section → --> */}

      {/* <section className="my-15 sm:my-35 bg-[#e9ecef]">
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
                <FoodCard item={item} key={item.id}/>
              ))
            }
            
          </div>
          <AddNewButton />
        </div>
      </section> */}

      {showDetailsStatus && <SingleFoodDetails showid={showDetails.showid} showimg={showDetails.showimg} showtitle={showDetails.showtitle} showprice={showDetails.showprice} showdescription={showDetails.showdescription} setShowDetailsStatus={setShowDetailsStatus} />}

    

    </div>
  )
}

export default AdminHomePage