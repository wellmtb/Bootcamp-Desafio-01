const express = require("express");

const server = express();

server.get("/projects", (req, res) => {
  console.log("funcionou");
});

server.listen(3000);
