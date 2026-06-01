import { useEffect, useState } from "react";
import axios from "axios";

function Trips() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {

    fetchTrips();

  }, []);

  const fetchTrips = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/trips"
      );

      setTrips(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const deleteTrip = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/trips/${id}`
      );

      alert("Trip Deleted Successfully");

      fetchTrips();

    }

    catch (error) {

      console.log(error);

      alert("Failed to Delete Trip");

    }

  };

  return (

    <div>

      <div className="page-header">

        <h1>Trips Management</h1>

      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Order ID</th>
            <th>Driver ID</th>
            <th>Vehicle ID</th>
            <th>Distance</th>
            <th>Fare</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {trips.map((trip) => (

            <tr key={trip.trip_id}>

              <td>{trip.trip_id}</td>
              <td>{trip.order_id}</td>
              <td>{trip.driver_id}</td>
              <td>{trip.vehicle_id}</td>
              <td>{trip.distance_km} km</td>
              <td>₹{trip.actual_fare}</td>

              <td>

                <span className="status-badge status-active">

                  {trip.trip_status}

                </span>

              </td>

              <td>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTrip(trip.trip_id)
                  }
                >

                  Delete

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Trips;