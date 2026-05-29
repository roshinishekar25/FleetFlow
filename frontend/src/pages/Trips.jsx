import { useEffect, useState } from "react";

import axios from "axios";


function Trips() {

  const [trips, setTrips] = useState([]);

  const [order_id, setOrderId] = useState("");

  const [driver_id, setDriverId] = useState("");

  const [vehicle_id, setVehicleId] = useState("");

  const [distance_km, setDistanceKm] = useState("");

  const [actual_fare, setActualFare] = useState("");

  const [trip_status, setTripStatus] = useState("");


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


  const addTrip = async () => {

    try {

      await axios.post(

        "http://localhost:5000/api/trips",

        {

          order_id,
          driver_id,
          vehicle_id,
          distance_km,
          actual_fare,
          trip_status

        }

      );


      alert("Trip Added Successfully");


      fetchTrips();


      setOrderId("");

      setDriverId("");

      setVehicleId("");

      setDistanceKm("");

      setActualFare("");

      setTripStatus("");

    }

    catch (error) {

      console.log(error);

      alert(error.response.data.error);

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

      alert(error.response.data.error);

    }

  };


  return (

    <div style={{ padding: "20px" }}>

      <h1>Trips Management</h1>


      <div
        style={{

          display: "flex",

          gap: "10px",

          marginBottom: "20px",

          flexWrap: "wrap"

        }}
      >

        <input
          type="number"
          placeholder="Order ID"
          value={order_id}
          onChange={(e) =>
            setOrderId(e.target.value)
          }
        />


        <input
          type="number"
          placeholder="Driver ID"
          value={driver_id}
          onChange={(e) =>
            setDriverId(e.target.value)
          }
        />


        <input
          type="number"
          placeholder="Vehicle ID"
          value={vehicle_id}
          onChange={(e) =>
            setVehicleId(e.target.value)
          }
        />


        <input
          type="number"
          placeholder="Distance KM"
          value={distance_km}
          onChange={(e) =>
            setDistanceKm(e.target.value)
          }
        />


        <input
          type="number"
          placeholder="Actual Fare"
          value={actual_fare}
          onChange={(e) =>
            setActualFare(e.target.value)
          }
        />


        <input
          type="text"
          placeholder="Trip Status"
          value={trip_status}
          onChange={(e) =>
            setTripStatus(e.target.value)
          }
        />


        <button onClick={addTrip}>

          Add Trip

        </button>

      </div>


      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%"
        }}
      >

        <thead>

          <tr>

            <th>ID</th>

            <th>Order</th>

            <th>Driver</th>

            <th>Vehicle</th>

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

              <td>{trip.distance_km}</td>

              <td>{trip.actual_fare}</td>

              <td>{trip.trip_status}</td>

              <td>

                <button
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