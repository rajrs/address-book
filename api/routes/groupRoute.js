let groupModel = require('../model/group.model')

let groupRoute = (server)=>{

    return server.route[{
        method:'GET',
        path:'/group',
        handler: async (request,h)=>{
            try {
            let result = await groupModel().find().exec();
            return h.response(result);
            }
            catch(err){
                return h.response(err).code(500);            
            }
        }
    },
    {
        method:'POST',
        path:'/group/add',
        handler: async (request,h) => {
            try {
                var group = new groupModel(request.payload);
                let result = await group.save();
                return h.response(result)
            }
            catch(err) {
                return h.response(err).code(500)      
            }

        }
       
    }

]
}
module.exports = groupRoute;