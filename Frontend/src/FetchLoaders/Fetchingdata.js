import axios from "axios";


export async function popularDishes() {
  try {
    const res = await axios.get("/3year-MERN-Food-Delivery-Final-Project/Data/PopularDishes.json"); 
    return res.data;
  } catch (err) {
    console.error("Popular Dishes Data fetched Error  ")
    if (err.response) {
      console.error("Status code:", err.response.status);
    } else if (err.request) {
      console.error("No response received:", err.request);
    } else {
      console.error("Error message:", err.message);
    }
    throw err; 
  }
}



export async function loadBreakFast() {
  try {
    const res = await axios.get("/3year-MERN-Food-Delivery-Final-Project/Data/BreakFast.json"); 
    return res.data;
  } catch (err) {
    console.error("Breakfast Data fetched Error:");
    if (err.response) {
      console.error("Status code:", err.response.status);
    } else if (err.request) {
      console.error("No response received:", err.request);
    } else {
      console.error("Error message:", err.message);
    }
    throw err; 
  }
}



export async function loadLunch() {
  try {
    const res = await axios.get("/3year-MERN-Food-Delivery-Final-Project/Data/Lunch.json"); 
    return res.data;
  } catch (err) {
    console.error("lunch Data fetched Error:");
    if (err.response) {
      console.error("Status code:", err.response.status);
    } else if (err.request) {
      console.error("No response received:", err.request);
    } else {
      console.error("Error message:", err.message);
    }
    throw err; 
  }
}


export async function loadDinner() {
  try {
    const res = await axios.get("/3year-MERN-Food-Delivery-Final-Project/Data/Dinner.json"); 
    return res.data;
  } catch (err) {
    console.error("Dinner Data fetched Error:");
    if (err.response) {
      console.error("Status code:", err.response.status);
    } else if (err.request) {
      console.error("No response received:", err.request);
    } else {
      console.error("Error message:", err.message);
    }
    throw err; 
  }
}