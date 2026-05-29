const pool = require("../config/db");


const getTrips = async (req, res) => {

    try {

        const trips = await pool.query(

            "SELECT * FROM Trips ORDER BY trip_id"

        );

        res.json(trips.rows);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

};


const addTrip = async (req, res) => {

    try {

        const {

            order_id,
            driver_id,
            vehicle_id,
            distance_km,
            actual_fare,
            trip_status

        } = req.body;


        const newTrip = await pool.query(

            `INSERT INTO Trips
            (
                order_id,
                driver_id,
                vehicle_id,
                distance_km,
                actual_fare,
                trip_status
            )

            VALUES ($1, $2, $3, $4, $5, $6)

            RETURNING *`,

            [

                order_id,
                driver_id,
                vehicle_id,
                distance_km,
                actual_fare,
                trip_status

            ]

        );


        res.json(newTrip.rows[0]);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

};


const deleteTrip = async (req, res) => {

    try {

        const { id } = req.params;


        await pool.query(

            "DELETE FROM Trips WHERE trip_id = $1",

            [id]

        );


        res.json({

            message: "Trip deleted successfully"

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

    getTrips,
    addTrip,
    deleteTrip

};