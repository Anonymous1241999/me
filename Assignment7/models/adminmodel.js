const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const adminSchema = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password: {
        type: String,
    }
});


const admin = mongoose.model('admin',adminSchema);

module.exports = admin;


