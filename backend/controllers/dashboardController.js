const pool = require("../config/db");

const getDashboardStats = async (req, res) => {

    try {

        const drivers = await pool.query(
            "SELECT COUNT(*) FROM Drivers"
        );

        const vehicles = await pool.query(
            "SELECT COUNT(*) FROM Vehicles"
        );

        const customers = await pool.query(
            "SELECT COUNT(*) FROM Customers"
        );

        const orders = await pool.query(
            "SELECT COUNT(*) FROM Orders"
        );

        const trips = await pool.query(
            "SELECT COUNT(*) FROM Trips"
        );

        const payments = await pool.query(
            "SELECT COUNT(*) FROM Payment_Transactions"
        );

        res.json({

            totalDrivers: drivers.rows[0].count,
            totalVehicles: vehicles.rows[0].count,
            totalCustomers: customers.rows[0].count,
            totalOrders: orders.rows[0].count,
            totalTrips: trips.rows[0].count,
            totalPayments: payments.rows[0].count

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

};

module.exports = {

    getDashboardStats

};