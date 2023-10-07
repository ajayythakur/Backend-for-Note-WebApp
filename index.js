const express = require('express');
const app = express();
const cors = require('cors')
const connection = require('./config/db');
const router = require('./routes/routes');
const env = require('dotenv');

//configure dot env 
env.config();

app.use(cors({origin:'*'})) 
app.use(express.json());
app.use(router)


app.get("/",(req,res)=>{
    res.send('<h1>Welcome</h1>');
})

const PORT=process.env.PORT || 8080 ;

app.listen(PORT,async()=>{
try {
    await connection();
    console.log('Server is running on port 8080');
} catch (error) {
    console.log('Error in connection')
}
});
 