import { useEffect, useState } from 'react';
import { loadLunch } from '../FetchLoaders/Fetchingdata';
import FoodMenuTemplate from '../Componets/FoodMenu/FoodMenuTemplate';
import socket from '../socket'
const Lunch = () => {
  const [FoodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadLunch();
      setFoodData(data);
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

  return (
    <div>
      <h1 className='text-2xl md:text-4xl mb-2'>Lunch</h1>
      <p className='text-gray-600 md:mb-8 mb-4'>Enjoy a hearty Sri Lankan lunch with rice, curries, and flavorful sides to keep you energized.</p>

      <FoodMenuTemplate FoodData={FoodData} />
    </div>
  );
};

export default Lunch