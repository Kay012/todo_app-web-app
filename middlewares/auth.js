const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try{
        const token = req.header("Authorization")
        console.log(token)
        if(!token) return res.status(404).json({msg: "Please login or Register"})
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.status(500).json({msg: err.message})

            req.user = user
            next()
        })
        

    }catch(err){
        return res.json({msg: err.message})
    }
}

module.exports = auth