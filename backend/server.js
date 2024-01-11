//Server e o script que starta a API
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./route/routes");
const connect = require("./config/database");
const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use("/apiv1", routes);

async function startServer() {
  try {
    connect()
    const port = 3000 || 3003;
    app.listen(port, () => console.log(`Listening on port ${port}...`));

    
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

startServer();
