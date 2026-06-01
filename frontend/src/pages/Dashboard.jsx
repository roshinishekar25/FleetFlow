import { useEffect, useState } from "react";

import axios from "axios";


function Dashboard() {

  const [stats, setStats] = useState({});

  useEffect(() => {

    fetchStats();

  }, []);

  const fetchStats = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/dashboard"
      );

      setStats(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <h1 className="page-title">

        FleetFlow Admin Dashboard

      </h1>


      <div className="card-container">

        <div className="dashboard-card">

          <h3>Total Drivers</h3>

          <p>{stats.totalDrivers}</p>

        </div>


        <div className="dashboard-card">

          <h3>Total Vehicles</h3>

          <p>{stats.totalVehicles}</p>

        </div>


        <div className="dashboard-card">

          <h3>Total Customers</h3>

          <p>{stats.totalCustomers}</p>

        </div>


        <div className="dashboard-card">

          <h3>Total Orders</h3>

          <p>{stats.totalOrders}</p>

        </div>


        <div className="dashboard-card">

          <h3>Total Trips</h3>

          <p>{stats.totalTrips}</p>

        </div>


        <div className="dashboard-card">

          <h3>Total Payments</h3>

          <p>{stats.totalPayments}</p>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;