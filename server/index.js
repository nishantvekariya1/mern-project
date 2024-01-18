require("dotenv").config();
const express = require("express");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/form", contactRouter);

app.use("/api/data", serviceRouter);

app.use(errorMiddleware);

const port = process.env.PORT || 6000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
