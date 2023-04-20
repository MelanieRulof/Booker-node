import express from "express";
const apiRouter = express.Router();

apiRouter.route("/booker-node/api").post(function(req, res, next){
    var input = req.body;

    var message = `Bonjour ${input['nom']}, vous êtes bien matinal`
    res.send(message);
})

export default {apiRouter}