import axios from "axios";
// import { API_KEY, API_HOST } from "../config";

export const fetchRestaurantData = async (locationId) => {
  const options = {
    method: "GET",
    url: "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants",
    headers: {
      // "X-RapidAPI-Key": YOUR_API_KEY,
      // "X-RapidAPI-Host": YOUR_API_HOST,
    },
    params: {
      locationId: locationId,
    },
  };

  const response = await axios.request(options);
  return response.data?.data?.data || [];
};
