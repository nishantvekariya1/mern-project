require("dotenv").config();
const express = require("express");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDb = require("./utils/db");

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/form", contactRouter);

const port = process.env.PORT || 6000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
