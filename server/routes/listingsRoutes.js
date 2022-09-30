const express = require("express");
const { allListings, newListing } = require("../controllers/listingController");

const router = express.Router();

router.get("/listings",allListings);
router.post("/listings",newListing);



module.exports = router;