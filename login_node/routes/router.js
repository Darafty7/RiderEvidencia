import  express  from "express"
import  {login, register} from "../controllers/authController.js"


// const express = require('express')
const router = express.Router()


// router para las vistas

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/register',(req,res)=>{
    res.render('register')
})



//router para los metodos de control
router.post('/register',register)
router.post('/login',login)

export default router



// module.exports = router
