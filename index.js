const express = require('express');
const app = express();
const cors = require('cors')
const connection = require('./config/db');
const router = require('./routes/routes');
const login = require('./controller/loginController');
const register = require('./controller/registerController');

app.use(cors({origin:'*'})) 
app.use(express.json());
app.use(router)

// app.post('/register', register);
// app.post('/login',login)


app.get("/",(req,res)=>{
    res.send('<h1>Welcome</h1>');
})


app.listen(8080,async()=>{
try {
    await connection();
    console.log('Server is running on port 8080');
} catch (error) {
    console.log('Error in connection')
}
});
 