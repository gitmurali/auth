var mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define user model
const userSchema = new Schema({
    email: { type:String, unique: true, lowercase: true },
    password: String
})

// Define model class
const ModelClass = mongoose.model('user', userSchema);

//export model
module.exports = ModelClass;