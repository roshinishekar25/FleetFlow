import {

  BrowserRouter,

  Routes,

  Route

} from "react-router-dom";


import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";

import Drivers from "./pages/Drivers";

import Vehicles from "./pages/Vehicles";

import Trips from "./pages/Trips";

import Payments from "./pages/Payments";

import Customers from "./pages/Customers";

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import "./App.css";

import Orders from "./pages/Orders";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN & SIGNUP ROUTES */}

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />


        {/* MAIN DASHBOARD ROUTES */}

        <Route
          path="/*"
          element={

            <div className="dashboard">

              <Sidebar />

              <div className="main-content">

                <Routes>

                  <Route
                    path="/"
                    element={<Dashboard />}
                  />

                  <Route
                    path="/drivers"
                    element={<Drivers />}
                  />

                  <Route
                    path="/vehicles"
                    element={<Vehicles />}
                  />

                  <Route
                    path="/trips"
                    element={<Trips />}
                  />

                  <Route
                    path="/payments"
                    element={<Payments />}
                  />

                  <Route
                    path="/customers"
                    element={<Customers />}
                  />

                  <Route
  path="/orders"
  element={<Orders />}
/>

                </Routes>

              </div>

            </div>

          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;