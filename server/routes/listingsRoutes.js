const express = require("express");
const { allListings, newListing, getListingDetail, searchListing } = require("../controllers/listingController");

const router = express.Router();

router.get("/",allListings);
router.post("/",newListing);
router.get("/detail/:id",getListingDetail);
router.get("/search",searchListing);



module.exports = router;