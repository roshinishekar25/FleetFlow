const pool = require("../config/db");


const getPayments = async (req, res) => {

    try {

        const payments = await pool.query(

            "SELECT * FROM Payment_Transactions ORDER BY payment_id"

        );

        res.json(payments.rows);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

};


const addPayment = async (req, res) => {

    try {

        const {

            trip_id,
            amount,
            payment_method,
            payment_status

        } = req.body;


        const newPayment = await pool.query(

            `INSERT INTO Payment_Transactions
            (
                trip_id,
                amount,
                payment_method,
                payment_status
            )

            VALUES ($1, $2, $3, $4)

            RETURNING *`,

            [

                trip_id,
                amount,
                payment_method,
                payment_status

            ]

        );


        res.json(newPayment.rows[0]);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

};


const deletePayment = async (req, res) => {

    try {

        const { id } = req.params;


        await pool.query(

            "DELETE FROM Payment_Transactions WHERE payment_id = $1",

            [id]

        );


        res.json({

            message: "Payment deleted successfully"

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

    getPayments,
    addPayment,
    deletePayment

};