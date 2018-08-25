const express = require("express");
const app = express();
const routes = require("./routes");
const expressSwagger = require("express-swagger-generator")(app);

let options = {
  swaggerDefinition: {
    info: {
      description: "This is an auto generate swagger document.",
      title: "My Simple API",
      version: "1.0.0"
    },
    host: "localhost:3000",
    basePath: "/api/v1",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      //   JWT: {
      //     type: "apiKey",
      //     in: "header",
      //     name: "Authorization",
      //     description: ""
      //   }
    }
  },
  basedir: __dirname, //app absolute path
  files: ["./api/**/*.js"] //Path to the API handle folder
};
expressSwagger(options);

app.use("/api", routes);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
