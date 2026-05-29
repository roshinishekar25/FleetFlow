const express = require("express");

const cors = require("cors");


const driverRoutes = require("./routes/driverRoutes");


const app = express();


const vehicleRoutes = require("./routes/vehicleRoutes");


const tripRoutes = require("./routes/tripRoutes");


const customerRoutes = require("./routes/customerRoutes");


const orderRoutes = require("./routes/orderRoutes");


// MIDDLEWARE

app.use(cors());

app.use(express.json());


// ROUTES

app.use("/api/drivers", driverRoutes);

app.use("/api/vehicles", vehicleRoutes);

app.use("/api/trips", tripRoutes);

app.use("/api/customers", customerRoutes);

app.use("/api/orders", orderRoutes);


// TEST ROUTE

app.get("/", (req, res) => {

    res.send("FleetFlow Backend Running");

});


module.exports = app;