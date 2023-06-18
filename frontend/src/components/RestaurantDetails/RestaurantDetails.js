import React, { useEffect, useState } from "react";
import axios from "axios";
// import { API_KEY, API_HOST } from "../../config";
import { Typography, Link, Box } from "@mui/material";

const RestaurantDetailsComponent = ({ restaurant }) => {
  const [restaurantData, setRestaurantData] = useState();

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails",
          params: {
            restaurantsId: restaurant.restaurantsId,
            currencyCode: "USD",
          },
          headers: {
            // "X-RapidAPI-Key": API_KEY,
            // "X-RapidAPI-Host": API_HOST,
          },
        };

        const response = await axios.request(options);
        console.log(response.data.data);
        setRestaurantData(response.data.data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurantDetails();
  }, [restaurant.restaurantsId]);

  return (
    <Box sx={{ p: 2, border: "1px solid #e8e8e8", borderRadius: 4 }}>
      {restaurantData ? (
        <div>
          <Typography variant="h6" gutterBottom>
            Title: {restaurantData.overview?.name}
          </Typography>
          <Typography>
            Key: {restaurant.key}, Phone:{" "}
            <Link href={`tel:${restaurantData.overview?.contact?.phone}`}>
              {restaurantData.overview?.contact?.phone}
            </Link>
          </Typography>
          <Typography>
            City: {restaurantData.overview?.geo}, State:{" "}
            {restaurantData.location?.address_obj?.state}
          </Typography>
          <Typography>
            Store Status: {restaurantData.location?.open_now_text}, Geo ID:{" "}
            {restaurantData.overview?.geoId}, Location ID:{" "}
            {restaurantData.location?.location_id}, Address:{" "}
            {restaurantData.overview?.contact.address}
          </Typography>
        </div>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default RestaurantDetailsComponent;
