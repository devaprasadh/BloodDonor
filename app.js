const express = require("express");
const bodyparser = require('body-parser')

const app = express();
const donor = require('./routes/donor.js');
const connectDb = require('./db/connect.js')

//middleware
// app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());



app.get('/', (req,res) => {
    res.send("home page")
})

app.use('/donor',donor);

const start = async () => {
    try{
        await connectDb();
        app.listen(5000,() => {
            console.log("server is listening on 5000")
        })
    }catch(err){
        console.log(err)
    }
}
start();