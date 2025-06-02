import { useEffect, useState } from 'react';
import { loadDinner } from '../FetchLoaders/Fetchingdata';
import FoodMenuTemplate from '../Componets/FoodMenu/FoodMenuTemplate';

const Dinner = () => {
  const [FoodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDinner();
      setFoodData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-2xl md:text-4xl mb-2'>Dinner</h1>
      <p className='text-gray-600 mb-6'>Relax in the evening with a light and tasty Sri Lankan dinner to end your day right.</p>

      <FoodMenuTemplate FoodData={FoodData} />
    </div>
  );
};
export default Dinner