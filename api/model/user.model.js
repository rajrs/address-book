const mongoose= require('mongoose');

const  userModel =mongoose.model('user', new mongoose.Schema({   
    username:{type:String,required:true,unique:true},
    email:{type:String,unique:true,required:true},
    password:{type:String}
}))

module.exports = userModel;