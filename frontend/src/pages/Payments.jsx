import { useEffect, useState } from "react";
import axios from "axios";

function Payments() {

  const [payments, setPayments] = useState([]);

  const [trip_id, setTripId] = useState("");
  const [amount, setAmount] = useState("");
  const [payment_method, setPaymentMethod] = useState("");
  const [payment_status, setPaymentStatus] = useState("");

  useEffect(() => {

    fetchPayments();

  }, []);

  const fetchPayments = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/payments"
      );

      setPayments(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const addPayment = async () => {

    try {

      await axios.post(

        "http://localhost:5000/api/payments",

        {
          trip_id,
          amount,
          payment_method,
          payment_status
        }

      );

      alert("Payment Added Successfully");

      fetchPayments();

      setTripId("");
      setAmount("");
      setPaymentMethod("");
      setPaymentStatus("");

    }

    catch (error) {

      console.log(error);

      alert("Failed to Add Payment");

    }

  };

  const deletePayment = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/payments/${id}`
      );

      alert("Payment Deleted Successfully");

      fetchPayments();

    }

    catch (error) {

      console.log(error);

      alert("Failed to Delete Payment");

    }

  };

  return (

    <div>

      <div className="page-header">

        <h1>Payments Management</h1>

      </div>

      <div className="form-container">

        <input
          type="number"
          placeholder="Trip ID"
          value={trip_id}
          onChange={(e) =>
            setTripId(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Payment Method"
          value={payment_method}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Payment Status"
          value={payment_status}
          onChange={(e) =>
            setPaymentStatus(e.target.value)
          }
        />

        <button onClick={addPayment}>

          Add Payment

        </button>

      </div>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Trip ID</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment) => (

            <tr key={payment.payment_id}>

              <td>{payment.payment_id}</td>
              <td>{payment.trip_id}</td>
              <td>₹{payment.amount}</td>
              <td>{payment.payment_method}</td>

              <td>

                <span className="status-badge status-completed">

                  {payment.payment_status}

                </span>

              </td>

              <td>

                <button
  className="delete-btn"
  onClick={() => {

    if (
      window.confirm(
        "Are you sure you want to cancel this payment?"
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

export default Payments;