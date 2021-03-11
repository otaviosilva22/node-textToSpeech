const CommentsDescriptions = require ('../models/Comments');


class CommentsController{
    async createComment(request, response){
        var {message} = request.body;

        //fail
        if (!message || message == ' '){
            return response.status(400).json({
                "Error": "400 - Bad request!"
            })
        }
        

        const Create = await CommentsDescriptions.create({
            message
        }).then((result)=>{ //resolve
           
            return response.status(201).json(
                result
            )     
        }).catch((error)=>{ //reject
            return response.status(400).json({
                "Error": error
            })
        })


    }

    async readComments(request, response){
        
        try{
            const Read = await CommentsDescriptions.findAll();

            if (Read == ""){
                return response.status(404).json({
                    "Error": "404 - Not found!"
                })
            }

            return response.status(302).json(Read);
        }catch{
            return response.status(404).json({
                "Error": "404 - Not found!"
            })
        }
        
    }

}

module.exports = CommentsController;