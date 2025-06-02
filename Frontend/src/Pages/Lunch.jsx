import { useEffect, useState } from 'react';
import { loadLunch } from '../FetchLoaders/Fetchingdata';
import FoodMenuTemplate from '../Componets/FoodMenu/FoodMenuTemplate';
const Lunch = () => {
  const [FoodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadLunch();
      setFoodData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-2xl md:text-4xl mb-4'>Lunch</h1>
      <p className='text-gray-600 mb-6'>Enjoy a hearty Sri Lankan lunch with rice, curries, and flavorful sides to keep you energized.</p>

      <FoodMenuTemplate FoodData={FoodData} />
    </div>
  );
};

export default Lunch