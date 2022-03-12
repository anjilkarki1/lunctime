const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { userRoutes, itemRoutes } = require("./routes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/ums", userRoutes);
app.use("/api/v1/ims", itemRoutes);

app.use(errorMiddleware);

module.exports = app;
