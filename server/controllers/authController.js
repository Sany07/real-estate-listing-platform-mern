const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const generateJwtToken = require('../utils/generateJwtToken')

// @desc Login Controller
const loginUser = asyncHandler(async(req, res, next)=>{
    const { email, password } = req.body;

    if (!email || !password) {
        throw new Error('Please add all fields', res.status(400))
    }

    const user = await User.findOne({email}).select("+password");
    
    if(!user){
        throw new Error('User Not Found',res.status(404))
    }
    const isMach = await user.comparePassword(password)
    
    if (!isMach) {
        throw new Error('Invalid Credentials',res.status(404))
    }
    res.status(200).json({     
        message: 'Account SignIn Successfully',
         _id: user.id,
        name: user.username,
        email: user.email,
        token: generateJwtToken(user._id)
    })
})

// @desc Register Controller
const registerUser = asyncHandler(async(req, res, next)=>{
    
    const { first_name, last_name, username, email, password, password2 } = req.body
    console.log(first_name, last_name, username, email, password, password2);
    if (!first_name || !last_name || !username || !password || !email || !password2) {
        throw new Error('Please add all fields', res.status(400))
    }
    const isUserNameExist = await User.findOne({ username });

    if (isUserNameExist) {
        throw new Error('Username already exists', res.status(400))
    }
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
        throw new Error('Email already exists', res.status(400))
    }

    const user = await User.create({
        first_name,
        last_name,
        username,
        email,
        password
    })
    
    if(user) {
        res.status(201).json({
        message: 'Successfully Registered',
        _id: user.id,
        name: user.username,
        email: user.email,
        token: generateJwtToken(user._id),
        })
    }else {
        
        throw new Error('Registration Failed',res.status(400))
    }
    
})


module.exports ={
    loginUser,
    registerUser
}