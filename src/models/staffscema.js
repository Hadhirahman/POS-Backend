const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
   
  },
  phoneNumber: {
    type: String,
    required: true,
    
  },
  position: {
    type: String,
    enum: ['weiter', 'casher', 'cleaner'],
    required: true
  },
  joiningDate: {
    type: String,
    required:true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
