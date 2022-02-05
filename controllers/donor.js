const Donor = require('../models/donor.js');


const createDonor = async (req, res) =>{
    try{
        const donor = await Donor.create(req.body);
        res.status(201).json(donor);
    }catch(err){
        console.log(err);
    }
    
}

const getAllDonors = async (req,res) =>{
    try{
        const donors = await Donor.find({});
        res.status(200).json({donors});
    }catch(err){
        console.log(err);
    }
}

module.exports = { createDonor,getAllDonors, }