require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cookieparser = require("cookie-parser")
const cors = require("cors")
const path = require("path")


//configuring server

const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(cors())

//Connecting to mongodb

//password : k8qYpTbBGA10tBvv

const URI = process.env.MONGODB_URL 
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true    
}, err => {
    if (err) throw err;
    else console.log('Connected to MongoDB')
})

app.use('/user', require('./routes/userRouter'))


const PORT = process.env.PORT || 8000
app.listen(PORT, ()=> {
    console.log(`Server running at Port ${PORT}`)
})