const pool = require("../config/db");

const getDrivers = async (req, res) => {

    try {

        const allDrivers = await pool.query(

            "SELECT * FROM Drivers ORDER BY driver_id"

        );

        res.json(allDrivers.rows);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }

};

const addDriver = async (req, res) => {

    try {

        const {

            full_name,
            phone,
            license_no,
            status,
            rating

        } = req.body;

        const newDriver = await pool.query(

            `INSERT INTO Drivers
            (full_name, phone, license_no, status, rating)

            VALUES ($1, $2, $3, $4, $5)

            RETURNING *`,

            [

                full_name,
                phone,
                license_no,
                status,
                rating

            ]

        );

        res.json(newDriver.rows[0]);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }

};

const updateDriver = async (req, res) => {

    try {

        const { id } = req.params;

        const {

            full_name,
            phone,
            license_no,
            status,
            rating

        } = req.body;

        const updatedDriver = await pool.query(

            `UPDATE Drivers

            SET
            full_name = $1,
            phone = $2,
            license_no = $3,
            status = $4,
            rating = $5

            WHERE driver_id = $6

            RETURNING *`,

            [

                full_name,
                phone,
                license_no,
                status,
                rating,
                id

            ]

        );

        res.json(updatedDriver.rows[0]);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({
            error: error.message
        });

    }

};

const deleteDriver = async (req, res) => {

    try {

        const { id } = req.params;

        await pool.query(

            "DELETE FROM Drivers WHERE driver_id = $1",

            [id]

        );

        res.json({

            message: "Driver deleted successfully"

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

    getDrivers,
    addDriver,
    updateDriver,
    deleteDriver

};