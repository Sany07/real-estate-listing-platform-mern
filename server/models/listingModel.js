const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var validator = require('validator');

const ListingSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please enter a title'],
        trim: true,
    },
    description:{
        type: String,
        required: [true, 'Please enter a description'],
        trim: true,

    },
    
    address:{
        type: String,
        required: [true, 'Please enter a address'],
        trim: true,

    },
    price:{
        type: String,
        required: [true, 'Please enter a price'],
        trim: true
    },
    bedrooms:{
        type: String,
        required: [true, 'Please enter a bedrooms'],
        trim: true
    },
    bathrooms:{
        type: String,
        required: [true, 'Please enter a bathrooms'],
        trim: true
    },
    garage:{
        type: String,
        required: [true, 'Please enter a garage'],
        trim: true
    },
    squareFeet:{
        type: String,
        required: [true, 'Please enter a squareFeet'],
        trim: true
    },
    lotSize:{
        type: String,
        required: [true, 'Please enter a lotSize'],
        trim: true
    },
    realtor:{
        type: String,
        required: [true, 'Please enter a realtor'],
        trim: true
    },
    image:{
        type: String,
        required: [true, 'Please enter image link'],
        trim: true
    },
    image1:{
        type: String,
        trim: true
    },
    image2:{
        type: String,
        trim: true
    },
    image3:{
        type: String,
        trim: true
    },
    image4:{
        type: String,
        trim: true
    }
},
    {
    timestamps: true,
})





module.exports = mongoose.model('Listings',ListingSchema)