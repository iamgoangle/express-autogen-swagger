const express = require("express");
const bodyParser = require("body-parser");
const swaggerJSDoc = require("swagger-jsdoc");

const app = express();
const routes = require("./routes");
app.use(bodyParser.json()); // To support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));

const swaggerDefinition = {
  info: {
    // API informations (required)
    title: "Hello World", // Title (required)
    version: "1.0.0", // Version (required)
    description: "A sample API" // Description (optional)
  },
  host: "localhost:3000", // Host (optional)
  basePath: "/api" // Base path (optional)
};

const options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  apis: ["routes*.js", "./example/v2/parameters.yaml"]
};

const swaggerSpec = swaggerJSDoc(options);

app.get("/api-docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.get("/swagger", function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

// Set up the routes
app.use("/api", routes);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
