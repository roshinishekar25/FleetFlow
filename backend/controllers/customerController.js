const pool = require("../config/db");


const getCustomers = async (req, res) => {

    try {

        const customers = await pool.query(

            "SELECT * FROM Customers ORDER BY customer_id"

        );

        res.json(customers.rows);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

};


const addCustomer = async (req, res) => {

    try {

        const {

            full_name,
            phone,
            email

        } = req.body;


        const newCustomer = await pool.query(

            `INSERT INTO Customers
            (full_name, phone, email)

            VALUES ($1, $2, $3)

            RETURNING *`,

            [

                full_name,
                phone,
                email

            ]

        );


        res.json(newCustomer.rows[0]);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

};


const deleteCustomer = async (req, res) => {

    try {

        const { id } = req.params;


        await pool.query(

            "DELETE FROM Customers WHERE customer_id = $1",

            [id]

        );


        res.json({

            message: "Customer deleted successfully"

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

    getCustomers,
    addCustomer,
    deleteCustomer

};