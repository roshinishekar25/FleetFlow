const pool = require("../config/db");


const getVehicles = async (req, res) => {

    try {

        const vehicles = await pool.query(

            "SELECT * FROM Vehicles ORDER BY vehicle_id"

        );

        res.json(vehicles.rows);

    }

    catch (error) {

        console.log(error.message);

    }

};


const addVehicle = async (req, res) => {

    try {

        const {

            driver_id,

            vehicle_number,

            vehicle_type,

            capacity

        } = req.body;


        const newVehicle = await pool.query(

            `INSERT INTO Vehicles
            (driver_id, vehicle_number, vehicle_type, capacity)

            VALUES ($1, $2, $3, $4)

            RETURNING *`,

            [

                driver_id,

                vehicle_number,

                vehicle_type,

                capacity

            ]

        );


        res.json(newVehicle.rows[0]);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

};


const deleteVehicle = async (req, res) => {

    try {

        const { id } = req.params;


        await pool.query(

            "DELETE FROM Vehicles WHERE vehicle_id = $1",

            [id]

        );


        res.json({

            message: "Vehicle deleted"

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

    getVehicles,

    addVehicle,

    deleteVehicle

};