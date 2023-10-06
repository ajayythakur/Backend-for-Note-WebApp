// This controller is responsible for user login.

const { registerSchema } = require("../model/registerModel");
const bcrypt  = require('bcrypt');
const { response } = require("express");
const jwt = require('jsonwebtoken');
const secret = 'secret##';

const login = async(req,res) =>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.send("Invalid Credentials");
        }

        const user = await registerSchema.findOne({email});

        if(!user){
            return res.send('User is not found');
        }

        const decrypt = await bcrypt.compare(password.toString(), user.password.toString());
        if(!decrypt){
            return res.send('Invalid detials');
        }

        const token = jwt.sign ({_id:user.id}, secret , {expiresIn: '1d'} );
    if(!token) {
        res.send('Error in token generation');
    }

    res.status(200).send({
        success : true,
        message : 'LogIn Success',
        name : user.name,
        email: user.email,
        contact  : user.contact,
        token
    })
        
    } catch (error) {
        res.send('Error in Login')
        console.log('Error in Login');
    }
}

module.exports = login ; 