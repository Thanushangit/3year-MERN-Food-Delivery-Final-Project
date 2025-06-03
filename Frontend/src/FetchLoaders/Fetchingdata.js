import axios from "axios";


export async function popularDishes() {
  try {
    const res = await axios.get("/3year-MERN-Food-Delivery-Final-Project/Data/PopularDishes.json"); 
    console.log("Popular Dishes Data fetched successfully:");
    return res.data;
  } catch (err) {
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
    console.log("Breakfast Data fetched successfully:");
    return res.data;
  } catch (err) {
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
    console.log("Lunch Data fetched successfully:");
    return res.data;
  } catch (err) {
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
    console.log("Dinner Data fetched successfully:");
    return res.data;
  } catch (err) {
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