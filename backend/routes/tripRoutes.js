const express = require("express");

const router = express.Router();


const {

    getTrips,

    addTrip,

    deleteTrip

} = require("../controllers/tripController");


router.get("/", getTrips);

router.post("/", addTrip);

router.delete("/:id", deleteTrip);


module.exports = router;