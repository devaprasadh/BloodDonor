const mongoose = require('mongoose');
const connectionString = "mongodb+srv://devaprasadh:passwordpassword@blooddonor.a7xgd.mongodb.net/BLOOD_DONOR?retryWrites=true&w=majority"

const connectDb = (url) =>{
    return mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

}

module.exports = connectDb;