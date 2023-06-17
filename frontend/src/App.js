import React, { useEffect, useState } from "react";
import "./App.css";
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
                </TableRow>
              </TableHead>
              <TableBody>
                {restaurants.map((data) => (
                  <React.Fragment key={data.restaurantsId}>
                    <TableRow>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => handleRowToggle(data.restaurantsId)}
                        >
                          {openRows.includes(data.restaurantsId) ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableCell align="center" component="th" scope="row">
                        {data.name}
                      </TableCell>
                      <TableCell align="right">
                        {data.currentOpenStatusText}
                      </TableCell>
                      <TableCell align="right">{data.parentGeoName}</TableCell>
                      <TableCell align="center">{data.restaurantsId}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse
                          in={openRows.includes(data.restaurantsId)}
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
                            <img
                              src={data.heroImgUrl}
                              alt={data.name}
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
export default App;
