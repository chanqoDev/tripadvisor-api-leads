import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchRestaurantData } from "../src/services/api";

function App() {
  const [restaurants, setRestaurantData] = useState([]);

  useEffect(() => {
    const locationIds = ["38954"]; //   LS : 44588, KC : 38815, Ola : 38954 Lenexa: 3497938
    const fetchData = async () => {
      try {
        const allData = await Promise.all(
          locationIds.map(async (locationId) => {
            const data = await fetchRestaurantData(locationId);
            return data;
          })
        );

        const mergedData = allData.flat();
        setRestaurantData(mergedData);

        console.log(mergedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      {restaurants.length > 0 ? (
        <div>
          <h2>Restaurant Data</h2>
          {restaurants.map(
            ({
              restaurantsId,
              name,
              averageRating,
              priceTag,
              currentOpenStatusText,
              parentGeoName,
              userReviewCount,
            }) => (
              <div key={restaurantsId}>
                <h3>{name}</h3>
                <p>Rating: {averageRating}</p>
                <p>Price: {priceTag}</p>
                <p>Status: {currentOpenStatusText}</p>
                <p>Address: {parentGeoName}</p>
                <p>Review Count: {userReviewCount}</p>
                <p>restaurantsId: {restaurantsId}</p>
                <hr />
              </div>
            )
          )}
        </div>
      ) : (
        <p>No restaurant data available.</p>
      )}
    </div>
  );
}

export default App;
