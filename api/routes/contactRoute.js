let contactModel = require('../model/contact.model');
const Joi = require("joi");
let contactRoute = (server) => {
    return server.route([
        {
            method: 'GET',
            path: '/',
            handler: () => {
                return [{
                    so: 'hapi!'
                }]
            }
        },
        {
            method: 'POST',
            path: "/contact/add",
            handler: async (request, h) => {
                try {
                   
                    var contact = new contactModel(request.payload);
                    var result = await contact.save();
                    return h.response(result)
                } catch (err) {
                    return await h.response(err).code(500)
                }

            },
            options: {
                validate: {
                    payload: Joi.object({
                        name: Joi.string().required(),
                        email: Joi.string().email()
                    }),
                    failAction(request,h,error){                       
                        // console.log({req,ht,err});
                        // console.log(h);
                        console.log(error)
                        //console.log(error.isJoi);  
                       // return h.response(error.details).takeover()
                       return error.isJoi? h.response(error.details[0]).takeover() : h.response(error).takeover();
                       
                    }
                }
            }
        }, 

        {
            method: 'GET',
            path: '/contacts',
            handler: async (request, h) => {
                try {                 
                    var result = await contactModel.find().exec();
                    //console.log(result)
                    return h.response(result)
                } catch (err) {
                   // console.log('from catch block',err);
                    return h.response(err).code(500).takeover();
                }

            }
        }
    ]) 

}
module.exports= contactRoute;