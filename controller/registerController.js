//This controller is responsible for User Registration

const { registerSchema } = require("../model/registerModel");
const bcrypt  = require('bcrypt');

const register = async(req,res) => {
    try {
    
        const {name, email, password, contact} = req.body; 

        //Here it is checked if all the datails are provided or not. 
        if(!name || !email || !password || !contact){
             return res.send('Invalid details');
        }

        // It checks if the user is already registered or not.
        const find_user = await registerSchema.findOne({email});

        // If user is registered then it will return from here.
        if(find_user){
            return res.send('User is already registered');
        }
        
        // If user is not registered then it encrypts the password with the help of bcrypt.
        const salt = 10 ;
        const encrypt = await bcrypt.hash(password.toString(),salt);
        
        // Here all user details are saved in database with encrypted password
        const newUser =  await new registerSchema({
            name, email, password:encrypt , contact
        }).save();
        res.status(200).send({
            success : 'ok' ,
            message : 'User Registerd',
            newUser

        })

    } catch (error) {
        res.send('Error in User Registration');
        console.log('Error in User Registration')
    }
}

module.exports = register ; 