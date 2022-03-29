// Import express.js to get the make a server lol
const express = require("express");

// Setup the express server
const app = express();
const port = process.env.PORT || 3000;

// Import middlewares into express
app.use(express.json({ limit: "100mb" }));

// Import routes
const authRouter = require("./routes/auth_v1");
const credentialsRouter = require("./routes/credentials");

// Setup all the routes
app.use("/api/v1/credentials", credentialsRouter);
app.use("/api/v1/auth", authRouter);

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});