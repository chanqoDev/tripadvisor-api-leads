import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { fetchRestaurantData } from "../../services/api";
import RestaurantDetailsComponent from "../RestaurantDetails/RestaurantDetails";
import axios from "axios";

function SearchRestaurant() {
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

        // Save restaurant data to the database
        mergedData.forEach((restaurant) => {
          saveRestaurantData(restaurant);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const saveRestaurantData = async (restaurant) => {
    try {
      await axios.post("http://localhost:3001/restaurants", restaurant);
      console.log("Restaurant data saved to the database");
    } catch (error) {
      console.error(error);
    }
  };

  const [openRows, setOpenRows] = useState([]);
  const handleRowToggle = (restaurantsId) => {
    if (openRows.includes(restaurantsId)) {
      setOpenRows(openRows.filter((rowId) => rowId !== restaurantsId));
    } else {
      setOpenRows([...openRows, restaurantsId]);
    }
  };

  return (
    // Dynamic Loading Resturant Search
    <div className="App">
      {restaurants.length > 0 ? (
        <div>
          <h2>Restaurant Data</h2>
          <TableContainer
            component={Paper}
            sx={{ maxWidth: 900, margin: "auto" }}
            style={{ marginBottom: 10, marginTop: 20 }}
          >
            <Table aria-label="collapsible table">
              <TableHead style={{ border: "unset" }}>
                <TableRow>
                  <TableCell />
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Restaurant Name
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Status
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    City
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    RestaurantsId
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Location ID
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {restaurants.map((restaurant) => (
                  <React.Fragment key={restaurant.restaurantsId}>
                    <TableRow>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() =>
                            handleRowToggle(restaurant.restaurantsId)
                          }
                        >
                          {openRows.includes(restaurant.restaurantsId) ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {restaurant.name}
                      </TableCell>
                      <TableCell align="right">
                        {restaurant.currentOpenStatusText}
                      </TableCell>
                      <TableCell align="right">
                        {restaurant.parentGeoName}
                      </TableCell>
                      <TableCell align="center">
                        {restaurant.restaurantsId}
                      </TableCell>
                      <TableCell align="center">
                        {restaurant.locationId}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse
                          in={openRows.includes(restaurant.restaurantsId)}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Box sx={{ margin: 1 }}>
                            <Typography
                              variant="h6"
                              gutterBottom
                              component="div"
                            >
                              Additional Information
                            </Typography>
                            <RestaurantDetailsComponent
                              key={restaurant.restaurantsId}
                              restaurant={restaurant}
                            />
                            <img
                              src={restaurant.heroImgUrl}
                              alt={restaurant.name}
                              height="auto"
                              width="250"
                            />
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <p>No restaurant data available.</p>
      )}
    </div>
  );
}
export default SearchRestaurant;
