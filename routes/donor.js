const {createDonor,getAllDonors} = require('../controllers/donor.js');
const express = require('express')
const router = express.Router()

router.route('/register' ).post(createDonor);
router.route('/all').get(getAllDonors);

module.exports = router