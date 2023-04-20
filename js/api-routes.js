import express from "express";
const apiRouter = express.Router();

apiRouter.route("/booker-node/api").post(function(req, res, next){
    var nom = req.body;
    if(nom){
        var message = `Bonjour ${nom}, vous êtes bien matinal`
    } else {
        message = `Bonjour, vous avez oublié votre nom !`
    }
    
    res.send(message);
})