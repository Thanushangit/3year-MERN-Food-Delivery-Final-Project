import { useEffect, useState } from "react";
import { loadBreakFast } from '../FetchLoaders/Fetchingdata';
import FoodMenuTemplate from '../Componets/FoodMenu/FoodMenuTemplate';

const BreakFast = () => {
  const [FoodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadBreakFast();
      setFoodData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-2xl md:text-4xl mb-4'>Breakfast</h1>
      <p className='text-gray-600 mb-6'>Start your day with a variety of delicious and traditional Sri Lankan breakfast dishes.</p>

      <FoodMenuTemplate FoodData={FoodData} />
    </div>
  );
};

export default BreakFast;
