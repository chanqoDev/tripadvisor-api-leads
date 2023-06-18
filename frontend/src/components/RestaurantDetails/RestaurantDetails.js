import React, { useEffect, useState } from "react";
import { Typography, Link, Box } from "@mui/material";
import { fetchRestaurantDetails } from "../../services/api";

const RestaurantDetailsComponent = ({ restaurant }) => {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRestaurantDetails(restaurant.restaurantsId);
        console.log(data);
        setRestaurantData(data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchData();
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
