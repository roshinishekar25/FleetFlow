import { useEffect, useState } from "react";

import axios from "axios";


function Vehicles() {

  const [vehicles, setVehicles] = useState([]);

  const [driver_id, setDriverId] = useState("");

  const [vehicle_number, setVehicleNumber] = useState("");

  const [vehicle_type, setVehicleType] = useState("");

  const [capacity, setCapacity] = useState("");


  useEffect(() => {

    fetchVehicles();

  }, []);


  const fetchVehicles = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/vehicles"
      );

      setVehicles(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };


  const addVehicle = async () => {

    try {

      await axios.post(

        "http://localhost:5000/api/vehicles",

        {

          driver_id,

          vehicle_number,

          vehicle_type,

          capacity

        }

      );


      alert("Vehicle Added Successfully");


      fetchVehicles();


      setDriverId("");

      setVehicleNumber("");

      setVehicleType("");

      setCapacity("");

    }

    catch (error) {

      console.log(error);

      alert(error.response.data.error);

    }

  };


  const deleteVehicle = async (id) => {

    try {

      await axios.delete(

        `http://localhost:5000/api/vehicles/${id}`

      );


      alert("Vehicle Deleted Successfully");


      fetchVehicles();

    }

    catch (error) {

      console.log(error);

      alert(error.response.data.error);

    }

  };


  return (

    <div style={{ padding: "20px" }}>

      <h1>Vehicles Management</h1>


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
          placeholder="Driver ID"
          value={driver_id}
          onChange={(e) =>
            setDriverId(e.target.value)
          }
        />


        <input
          type="text"
          placeholder="Vehicle Number"
          value={vehicle_number}
          onChange={(e) =>
            setVehicleNumber(e.target.value)
          }
        />


        <input
          type="text"
          placeholder="Vehicle Type"
          value={vehicle_type}
          onChange={(e) =>
            setVehicleType(e.target.value)
          }
        />


        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) =>
            setCapacity(e.target.value)
          }
        />


        <button onClick={addVehicle}>

          Add Vehicle

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

            <th>Driver ID</th>

            <th>Vehicle Number</th>

            <th>Vehicle Type</th>

            <th>Capacity</th>

            <th>Actions</th>

          </tr>

        </thead>


        <tbody>

          {vehicles.map((vehicle) => (

            <tr key={vehicle.vehicle_id}>

              <td>{vehicle.vehicle_id}</td>

              <td>{vehicle.driver_id}</td>

              <td>{vehicle.vehicle_number}</td>

              <td>{vehicle.vehicle_type}</td>

              <td>{vehicle.capacity}</td>

              <td>

                <button
                  onClick={() =>
                    deleteVehicle(vehicle.vehicle_id)
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

export default Vehicles;