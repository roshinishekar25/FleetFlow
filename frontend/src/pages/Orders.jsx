import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {

  const [orders, setOrders] = useState([]);

  const [customer_id, setCustomerId] = useState("");
  const [pickup_location, setPickupLocation] = useState("");
  const [drop_location, setDropLocation] = useState("");
  const [order_status, setOrderStatus] = useState("");

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const addOrder = async () => {

    try {

      await axios.post(

        "http://localhost:5000/api/orders",

        {
          customer_id,
          pickup_location,
          drop_location,
          order_status
        }

      );

      alert("Order Added Successfully");

      fetchOrders();

      setCustomerId("");
      setPickupLocation("");
      setDropLocation("");
      setOrderStatus("");

    }

    catch (error) {

      console.log(error);

      alert("Failed to Add Order");

    }

  };

  const deleteOrder = async (id) => {

    try {

      await axios.delete(

        `http://localhost:5000/api/orders/${id}`

      );

      alert("Order Deleted Successfully");

      fetchOrders();

    }

    catch (error) {

      console.log(error);

      alert("Failed to Delete Order");

    }

  };

  return (

    <div>

      <div className="page-header">

        <h1>Orders Management</h1>

      </div>

      <div className="form-container">

        <input
          type="number"
          placeholder="Customer ID"
          value={customer_id}
          onChange={(e) =>
            setCustomerId(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup_location}
          onChange={(e) =>
            setPickupLocation(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Drop Location"
          value={drop_location}
          onChange={(e) =>
            setDropLocation(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Order Status"
          value={order_status}
          onChange={(e) =>
            setOrderStatus(e.target.value)
          }
        />

        <button onClick={addOrder}>

          Add Order

        </button>

      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Customer ID</th>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr key={order.order_id}>

              <td>{order.order_id}</td>
              <td>{order.customer_id}</td>
              <td>{order.pickup_location}</td>
              <td>{order.drop_location}</td>

              <td>

                <span className="status-badge status-completed">

                  {order.order_status}

                </span>

              </td>

              <td>

                <button
  className="delete-btn"
  onClick={() => {

    if (
      window.confirm(
        "Are you sure you want to delete this order?"
      )
    ) {

      deleteOrder(order.order_id);

    }

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

export default Orders;