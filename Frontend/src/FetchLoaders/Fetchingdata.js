import axios from "axios";

export async function popularDishes() {
  try {
    const res = await axios.get(
      "https://platezybackedcode.up.railway.app/api/allpopular"
    );
    return res.data.message;
  } catch (err) {
    console.error("Popular Dishes Data fetched Error  ");
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
    const res = await axios.get(
      "https://platezybackedcode.up.railway.app/api/allbreakfast"
    );
    return res.data.message;
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
    const res = await axios.get(
      "https://platezybackedcode.up.railway.app/api/AllLunch"
    );
    return res.data.message;
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
    const res = await axios.get(
      "https://platezybackedcode.up.railway.app/api/alldinner"
    );
    return res.data.message;
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

export async function loadOrderItems() {
  try {
    const res = await axios.get(
      "https://platezybackedcode.up.railway.app/order/allcustomerOrder"
    );
    return res.data.message;
  } catch (err) {
    console.error("DB order Data fetched Error:");
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

export async function customerOrderHistory(uid) {
  try {
    const res = await axios.get(
      `https://platezybackedcode.up.railway.app/order/getAllorderByuid/${uid}`
    );
    return res.data;
  } catch (err) {
    console.error("DB order Data fetched Error:");
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
