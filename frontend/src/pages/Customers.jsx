import { useEffect, useState } from "react";

import axios from "axios";


function Customers() {

  const [customers, setCustomers] = useState([]);

  const [full_name, setFullName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");


  useEffect(() => {

    fetchCustomers();

  }, []);


  const fetchCustomers = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/customers"
      );

      setCustomers(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };


  const addCustomer = async () => {

    try {

      await axios.post(

        "http://localhost:5000/api/customers",

        {

          full_name,
          phone,
          email

        }

      );


      alert("Customer Added Successfully");


      fetchCustomers();


      setFullName("");

      setPhone("");

      setEmail("");

    }

    catch (error) {

      console.log(error);

      alert(error.response.data.error);

    }

  };


  const deleteCustomer = async (id) => {

    try {

      await axios.delete(

        `http://localhost:5000/api/customers/${id}`

      );


      alert("Customer Deleted Successfully");


      fetchCustomers();

    }

    catch (error) {

      console.log(error);

      alert(error.response.data.error);

    }

  };


  return (

    <div style={{ padding: "20px" }}>

      <h1>Customers Management</h1>


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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />


        <button onClick={addCustomer}>

          Add Customer

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

            <th>Name</th>

            <th>Phone</th>

            <th>Email</th>

            <th>Actions</th>

          </tr>

        </thead>


        <tbody>

          {customers.map((customer) => (

            <tr key={customer.customer_id}>

              <td>{customer.customer_id}</td>

              <td>{customer.full_name}</td>

              <td>{customer.phone}</td>

              <td>{customer.email}</td>

              <td>

                <button
                  onClick={() =>
                    deleteCustomer(customer.customer_id)
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

export default Customers;