import axios from "axios";
import { API_KEY, API_HOST } from "../config";

// Fetch Req for Restaurant List
export const fetchRestaurantData = async (locationId) => {
  const options = {
    method: "GET",
    url: "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
    params: {
      locationId: locationId,
    },
  };

  const response = await axios.request(options);
  return response.data?.data?.data || [];
};

// Fetch Req for Restaurant Details
export const fetchRestaurantDetails = async (restaurantsId) => {
  const options = {
    method: "GET",
    url: "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails",
    params: {
      restaurantsId: restaurantsId,
      currencyCode: "USD",
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  const response = await axios.request(options);
  return response.data?.data || null;
};
