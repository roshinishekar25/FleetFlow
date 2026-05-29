const pool = require("../config/db");


const getOrders = async (req, res) => {

    try {

        const orders = await pool.query(

            "SELECT * FROM Orders ORDER BY order_id"

        );

        res.json(orders.rows);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

};


const addOrder = async (req, res) => {

    try {

        const {

            customer_id,
            pickup_location,
            drop_location,
            order_status

        } = req.body;


        const newOrder = await pool.query(

            `INSERT INTO Orders
            (customer_id, pickup_location, drop_location, order_status)

            VALUES ($1, $2, $3, $4)

            RETURNING *`,

            [

                customer_id,
                pickup_location,
                drop_location,
                order_status

            ]

        );


        res.json(newOrder.rows[0]);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: error.message

        });

    }

};


const deleteOrder = async (req, res) => {

    try {

        const { id } = req.params;


        await pool.query(

            "DELETE FROM Orders WHERE order_id = $1",

            [id]

        );


        res.json({

            message: "Order deleted successfully"

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

    getOrders,
    addOrder,
    deleteOrder

};