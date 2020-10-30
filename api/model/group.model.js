const mongoose= require('mongoose');
const groupSchema =mongoose.model('Group', mongoose.Schema({ name: String, created_at: Date,groupList:Array  }));
module.exports = groupSchema;