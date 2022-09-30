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
    
    const { userName, email, password} = req.body


    const listing = await Listings.create({
        title,
        description,
        
    })
    
    if(listing) {
        res.status(201).json({
        message: 'Post successfull',

        })
    }else {
        
        throw new Error('Failed',res.status(400))
    }
    
})


module.exports ={
    allListings,
    newListing
}