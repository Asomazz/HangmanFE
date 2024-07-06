const express = require("express");
const userRouter = require("./api/users/routes");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/auth", userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
