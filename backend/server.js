const express = require("express");
const { movieSearch } = require("./controllers/movies");
require("dotenv").config();

const server = express();

server.get("/search", movieSearch);

server.listen(3001, () => console.log("server running on port 3001"));
