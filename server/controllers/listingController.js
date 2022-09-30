const Listings = require('../models/listingModel')
const asyncHandler = require('express-async-handler')
const generateJwtToken = require('../utils/generateJwtToken')

// @desc Login Controller
const allListings = asyncHandler(async(req, res)=>{

    const listings = await Listings.find();
    
    res.status(200).json({     
        success: true,
        listings
    })
})

const newListing = asyncHandler(async(req, res)=>{
    
    const {         title,
        description,
        image4,
        image3,
        image2,
        price,
        image1,
        image,
        realtor,
        address,
        bedrooms,
        bathrooms,
        garage,
        squareFeet,
        lotSize} = req.body


    const listing = await Listings.create({
        title,
        description,
        image4,
        image3,
        image2,
        price,
        image1,
        image,
        realtor,
        address,
        bedrooms,
        bathrooms,
        garage,
        squareFeet,
        lotSize
        
    })
    console.log(listing);
    if(listing) {
        res.status(201).json({
        message: 'Post successfull',

        })
    }else {
        
        throw new Error('Failed',res.status(400))
    }
    
})

const getListingDetail = asyncHandler(async(req, res, next)=>{
    

    const listing = await Listings.findById(req.params.id)
    

    if (!listing) {
        return next(new ErrorHandler("Listing Not Found", 404));
    }

    res.status(200).json({
        success: true,
        listing,
    });
});


const searchListing = asyncHandler(async(req, res, next)=>{
    console.log(req.query);
    const listing = await Listings.find({
        bedrooms: req.query.bedrooms,
        garage: req.query.garage
    });
    console.log(listing);
    res.status(200).json({
        success: true,
        listing,
    });
});

module.exports ={
    allListings,
    newListing,getListingDetail, searchListing
}