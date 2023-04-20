import express from "express";
const apiRouter = express.Router();

apiRouter.route("/booker-node/api").post(function(req, res, next){
    var input = req.body;

    console.log(input);
    
    if(input!=""){
        var message = `Bonjour ${input['nom']}, vous êtes bien matinal`
    } else {
        message = `Bonjour, vous avez oublié votre nom !`
    }
    
    res.send(message);
})

export default {apiRouter}