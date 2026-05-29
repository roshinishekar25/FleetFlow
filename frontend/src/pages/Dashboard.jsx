import { useEffect, useState } from "react";

import axios from "axios";


function Dashboard() {

  const [driversCount, setDriversCount] = useState(0);

  const [vehiclesCount, setVehiclesCount] = useState(0);

  const [tripsCount, setTripsCount] = useState(0);

  const [customersCount, setCustomersCount] = useState(0);


  useEffect(() => {

    fetchDashboardData();

  }, []);


  const fetchDashboardData = async () => {

    try {

      const drivers = await axios.get(
        "http://localhost:5000/api/drivers"
      );

      const vehicles = await axios.get(
        "http://localhost:5000/api/vehicles"
      );

      const trips = await axios.get(
        "http://localhost:5000/api/trips"
      );

      const customers = await axios.get(
        "http://localhost:5000/api/customers"
      );


      setDriversCount(drivers.data.length);

      setVehiclesCount(vehicles.data.length);

      setTripsCount(trips.data.length);

      setCustomersCount(customers.data.length);

    }

    catch (error) {

      console.log(error);

    }

  };


  return (

    <div style={{ padding: "20px" }}>

      <h1>FleetFlow Dashboard</h1>

      <p>Welcome to FleetFlow Admin Dashboard</p>


      <div
        style={{

          display: "flex",

          gap: "20px",

          marginTop: "30px",

          flexWrap: "wrap"

        }}
      >

        <div
          style={{

            border: "1px solid gray",

            padding: "20px",

            width: "200px",

            borderRadius: "10px"

          }}
        >

          <h2>Total Drivers</h2>

          <h1>{driversCount}</h1>

        </div>


        <div
          style={{

            border: "1px solid gray",

            padding: "20px",

            width: "200px",

            borderRadius: "10px"

          }}
        >

          <h2>Total Vehicles</h2>

          <h1>{vehiclesCount}</h1>

        </div>


        <div
          style={{

            border: "1px solid gray",

            padding: "20px",

            width: "200px",

            borderRadius: "10px"

          }}
        >

          <h2>Total Trips</h2>

          <h1>{tripsCount}</h1>

        </div>


        <div
          style={{

            border: "1px solid gray",

            padding: "20px",

            width: "200px",

            borderRadius: "10px"

          }}
        >

          <h2>Total Customers</h2>

          <h1>{customersCount}</h1>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;