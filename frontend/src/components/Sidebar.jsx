import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaTruck,
  FaUserFriends,
  FaClipboardList,
  FaRoute,
  FaMoneyBillWave
} from "react-icons/fa";


function Sidebar() {

  return (

    <div className="sidebar">

      <h2>FleetFlow</h2>

      <ul>

        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/drivers">Drivers</Link>
        </li>

        <li>
          <Link to="/vehicles">Vehicles</Link>
        </li>

        <li>
          <Link to="/customers">Customers</Link>
        </li>

        <li>
          <Link to="/orders">Orders</Link>
        </li>

        <li>
          <Link to="/trips">Trips</Link>
        </li>

        <li>
          <Link to="/payments">Payments</Link>
        </li>

      </ul>

    </div>

  );

}

export default Sidebar;