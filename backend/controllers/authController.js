const pool = require("../config/db");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");


const signup = async (req, res) => {

    try {

        const {

            full_name,

            email,

            password

        } = req.body;


        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        const newUser = await pool.query(

            `INSERT INTO Users
            (full_name, email, password)

            VALUES ($1, $2, $3)

            RETURNING *`,

            [full_name, email, hashedPassword]

        );


        res.json(newUser.rows[0]);

    }

    catch (error) {

        console.log(error.message);

    }

};


const login = async (req, res) => {

    try {

        const {

            email,

            password

        } = req.body;


        const user = await pool.query(

            "SELECT * FROM Users WHERE email = $1",

            [email]

        );


        if (user.rows.length === 0) {

            return res.json({
                message: "User not found"
            });

        }


        const validPassword = await bcrypt.compare(

            password,

            user.rows[0].password

        );


        if (!validPassword) {

            return res.json({
                message: "Invalid password"
            });

        }


        const token = jwt.sign(

            {

                user_id: user.rows[0].user_id

            },

            process.env.JWT_SECRET

        );


        res.json({

            token,

            user: user.rows[0]

        });

    }

    catch (error) {

        console.log(error.message);

    }

};


module.exports = {

    signup,

    login

};