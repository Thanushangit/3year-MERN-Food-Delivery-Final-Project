import { useEffect, useState } from "react";
import { loadBreakFast } from '../FetchLoaders/Fetchingdata';
import FoodMenuTemplate from '../Componets/FoodMenu/FoodMenuTemplate';
import socket from '../socket'

const BreakFast = () => {
  const [FoodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadBreakFast();
      setFoodData(data);
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

  }, [FoodData]);

  return (
    <div>
      <h1 className='text-2xl md:text-4xl mb-2'>Breakfast</h1>
      <p className='text-gray-600 md:mb-8 mb-4'>Start your day with a variety of delicious and traditional Sri Lankan breakfast dishes.</p>

      <FoodMenuTemplate FoodData={FoodData} />
    </div>
  );
};

export default BreakFast;
