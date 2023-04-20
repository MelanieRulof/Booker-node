import express from "express";
import apiRoutes from "./js/api-routes.js"
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
var app = express();

var jsonParser = express.json({ extended: true });
app.use(jsonParser);

app.use("/template", express.static(__dirname + "/template"));

app.get("/", function (req, res) {
  res.redirect("/template/index.html");
});

app.use(apiRoutes.apiRouter);

app.listen(8282, function () {
    console.log("http://localhost:8282");
  });