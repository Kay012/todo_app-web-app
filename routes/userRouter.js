const userCtrl = require("../controllers/userCtrl")
const auth = require("../middlewares/auth")

const userRouter = require('express').Router()

userRouter.get('/infor', auth, userCtrl.getUser)
userRouter.get('/refresh_token', userCtrl.refreshToken)
userRouter.post('/register', userCtrl.register)
userRouter.post('/login', userCtrl.login)
userRouter.patch('/add_task', auth, userCtrl.addTask)
userRouter.get('/logout', auth,  userCtrl.logout)

module.exports = userRouter