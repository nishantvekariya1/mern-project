require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const serviceRouter = require("./router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

const app = express();
const corsOpetions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOpetions));
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
