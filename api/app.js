const Hapi = require('@hapi/hapi');
const mongoose = require("mongoose");
//const Joi = require("joi");
const contactRoute = require('./routes/contactRoute')

require('dotenv').config();
const uri = process.env.ATLAS_URI;
const server = new Hapi.Server({"host":"localhost","port":3232,routes: {  cors: true}})

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;    
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


const main = async () => {
    await contactRoute(server)    
    await server.start()  
    return server 
  } 
//server.route()


main().then(()=>{ console.log('Server running at:', server.info.uri)})
.catch(err => {    console.log(err);    process.exit(1);  })