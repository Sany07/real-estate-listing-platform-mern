const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
var validator = require('validator');

const ListingSchema = mongoose.Schema({
    title:{
        type: String,
        trim: true,
        maxLength: [500, 'Your firstname cannot exceed 8 characters']
    },
    description:{
        type: String,
        trim: true,

    },
    
    address:{
        type: String,
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
        required: [true, 'Please enter image link'],
        trim: true
    },
    image2:{
        type: String,
        required: [true, 'Please enter image link'],
        trim: true
    },
    image3:{
        type: String,
        required: [true, 'Please enter image link'],
        trim: true
    },
    image4:{
        type: String,
        required: [true, 'Please enter image link'],
        trim: true
    }
},
    {
    timestamps: true,
})





module.exports = mongoose.model('Listings',ListingSchema)