const express = require("express")
const welcomeRouter = require("./welcome-router")
const postRouter = require("./PC-router")

const server = express();
const port = 4000;

server.use(express.json());
server.use(welcomeRouter)
server.use(postRouter)

server.get("/", (req, res) => {
    res.json({
      message: "Welcome to my API",
    });
  });
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`); 
  });