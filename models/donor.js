const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonorSchema = new Schema({
    name:{
        type: String,
    },
    password:{
        type:String,
    },
    gender : {
        type:String,
    },
    age:{
        type: String,
    },
    bloodType:{
        type:String,
    },
    status:{
        type:String,
    },
    place:{
        type:String,
    }
});

const Donor = mongoose.model('donor',DonorSchema);
module.exports = Donor;