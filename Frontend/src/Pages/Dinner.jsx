import { useEffect, useState } from 'react';
import { loadDinner } from '../FetchLoaders/Fetchingdata';
import FoodMenuTemplate from '../Componets/FoodMenu/FoodMenuTemplate';
import socket from '../socket'

const Dinner = () => {
  const [FoodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDinner();
      setFoodData(data);

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
    <div>
      <h1 className='text-2xl md:text-4xl mb-2'>Dinner</h1>
      <p className='text-gray-600 md:mb-8 mb-4'>Relax in the evening with a light and tasty Sri Lankan dinner to end your day right.</p>

      <FoodMenuTemplate FoodData={FoodData} />
    </div>
  );
};
export default Dinner