var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// Define user model
const userSchema = new Schema({
    email: { type:String, unique: true, lowercase: true },
    password: String
})

//on save hook encrypt password
userSchema.pre('save', function(next) {
   const user = this;
   bcrypt.genSalt(10, function(err, salt) {
        if(err){return next(err);}
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if(err) {return next(err);}
            user.password = hash;
            next(); // go to next save function..
        });
   });
});

// Define model class
const ModelClass = mongoose.model('user', userSchema);

//export model
module.exports = ModelClass;