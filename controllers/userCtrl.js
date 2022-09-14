const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtrl = {
    register: async (req, res) => {
        try{
            const {username, email, password} = req.body

            const user = await Users.findOne({email})

            if(user) return res.status(400).json({msg: "This email already exists"})
            if(password.length < 6) return res.status(400).json({msg: "Password shoul have a minimum of 6 cahracters"})

            const passwordHash = await bcrypt.hash(password, 10)

            const newUser = new Users({username, email, password :passwordHash})

            await newUser.save()
            // console.log(newUser._id)

            const accesstoken = createAccessToken({id: newUser._id})
            const refreshtoken = createRefreshToken({id: newUser._id})
    
            res.cookie('refreshtoken', refreshtoken,{
                httpOnly: true,
                path: 'user/refresh_token'
            })
    

            res.status(200).json({msg: "Registered successfully", accesstoken, newUser})

        }catch(err){
            return res.status(500).json(err.message)
        }
        
    },
    login: async (req, res) => {

        try{
            const {email, password} = req.body
        
            const user = await Users.findOne({email})
            if(!user) return res.status(404).json({msg: "User does not exist"})
    
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect password"})
    
            const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})
    
            res.cookie('refreshtoken', refreshtoken,{
                httpOnly: true,
                path: 'user/refresh_token'
            })
    
            res.json({accesstoken})
    

        }catch(err){
            return res.status(500).json(err.message)
        }
    },
    logout : async (req, res) => {
        try{
            console.log(req.cookies)
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            console.log(req.cookies)
            res.json({msg: "Logged out"})

        }catch(err){
            return res.status(500).json(err.message)
        }

    },
    refreshToken : async (req, res) => {

        try{
            const rf_token = req.cookies.refreshtoken

            if (!rf_token) return res.status(404).json({msg: "PLease login or register"})
    
            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if(err) return res.status(404).json({msg: "Something went wrong"})
    
                const accesstoken = createAccessToken({id: user.id})
    
                res.json({user, accesstoken})
            })
        }catch(err){
            return res.status(500).json(err.message)
        }
    },
    getUser: async (req, res) => {
        
        try{
            const user = await Users.findById(req.user.id)
            if(!user) return req.status(404).json({msg: "User does not exist"})

            res.json(user)

        }catch(err){
            return res.status(500).json(err.message)
        }
    },
    addTask: async(req, res) => {
        try{
            console.log(req.body)
            const user = await Users.findById(req.user.id)

            if(!user) return res.status(400).json({msg: 'User does not exist'})
            
            await Users.findByIdAndUpdate(req.user.id, {tasks: req.body.tasks})
            

            res.json({msg: 'Task added successfully'})

        }catch(err){
            return res.status(400).json({msg: err.message})
        }
    }
}

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1d'})
}

module.exports = userCtrl