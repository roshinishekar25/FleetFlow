import { useEffect, useState } from "react";
import axios from "axios";

function Drivers() {

  const [drivers, setDrivers] = useState([]);

  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [license_no, setLicenseNo] = useState("");
  const [status, setStatus] = useState("");
  const [rating, setRating] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {

    fetchDrivers();

  }, []);

  const fetchDrivers = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/drivers"
      );

      setDrivers(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const addDriver = async () => {

    try {

      await axios.post(

        "http://localhost:5000/api/drivers",

        {
          full_name,
          phone,
          license_no,
          status,
          rating
        }

      );

      alert("Driver Added Successfully");

      fetchDrivers();

      setFullName("");
      setPhone("");
      setLicenseNo("");
      setStatus("");
      setRating("");

    }

    catch (error) {

      console.log(error);

      alert("Failed to Add Driver");

    }

  };

  const updateDriver = async (id) => {

    try {

      await axios.put(

        `http://localhost:5000/api/drivers/${id}`,

        {
          full_name,
          phone,
          license_no,
          status,
          rating
        }

      );

      alert("Driver Updated Successfully");

      fetchDrivers();

      setEditingId(null);

      setFullName("");
      setPhone("");
      setLicenseNo("");
      setStatus("");
      setRating("");

    }

    catch (error) {

      console.log(error);

      alert("Failed to Update Driver");

    }

  };

  const deleteDriver = async (id) => {

    try {

      const response = await axios.delete(

        `http://localhost:5000/api/drivers/${id}`

      );

      console.log(response.data);

      alert("Driver Deleted Successfully");

      fetchDrivers();

    }

    catch (error) {

      console.log(error);

      alert("Failed to Delete Driver");

    }

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Drivers Management</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap"
        }}
      >

        <input
          type="text"
          placeholder="Full Name"
          value={full_name}
          onChange={(e) =>
            setFullName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="License No"
          value={license_no}
          onChange={(e) =>
            setLicenseNo(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(e) =>
            setRating(e.target.value)
          }
        />

        {

          editingId ? (

            <button
              onClick={() =>
                updateDriver(editingId)
              }
            >

              Update Driver

            </button>

          ) : (

            <button onClick={addDriver}>

              Add Driver

            </button>

          )

        }

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
            <th>Name</th>
            <th>Phone</th>
            <th>License</th>
            <th>Status</th>
            <th>Rating</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {drivers.map((driver) => (

            <tr key={driver.driver_id}>

              <td>{driver.driver_id}</td>
              <td>{driver.full_name}</td>
              <td>{driver.phone}</td>
              <td>{driver.license_no}</td>
              <td>{driver.status}</td>
              <td>{driver.rating}</td>

              <td>

                <button
                  onClick={() => {

                    setEditingId(driver.driver_id);

                    setFullName(driver.full_name);
                    setPhone(driver.phone);
                    setLicenseNo(driver.license_no);
                    setStatus(driver.status);
                    setRating(driver.rating);

                  }}
                >

                  Edit

                </button>

                <button
                  onClick={() =>
                    deleteDriver(driver.driver_id)
                  }
                  style={{
                    marginLeft: "10px"
                  }}
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

export default Drivers;