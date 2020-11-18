const mongoose= require('mongoose');

const  contactsModel =mongoose.model('contact', new mongoose.Schema({   
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    list:[{ mobile:{type:Number,required:true, unique:true},Label:String }],
    group:String,
   
}));

module.exports = contactsModel;