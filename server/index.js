const express = require("express");
const authRouter = require("./router/auth-router");
const port = 3000;

const app = express();

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
