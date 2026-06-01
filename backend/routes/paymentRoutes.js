const express = require("express");

const router = express.Router();


const {

    getPayments,
    addPayment,
    deletePayment

} = require("../controllers/paymentController");


router.get("/", getPayments);

router.post("/", addPayment);

router.delete("/:id", deletePayment);


module.exports = router;