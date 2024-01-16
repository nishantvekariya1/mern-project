require("dotenv").config();
const express = require("express");
const connectDb = require("./utils/db");
const authRouter = require("./router/auth-router");
const port = process.env.PORT || 6000;

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
