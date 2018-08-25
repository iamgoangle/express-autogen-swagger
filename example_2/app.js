const express = require("express");
const expressOasGenerator = require("express-oas-generator");

const app = express();
const routes = require("./routes");
expressOasGenerator.init(app, {});

app.use("/api", routes);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
