/* eslint-disable no-undef */
// initialising variables
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

//applying middlewares
app.use(cors());
app.use(cookieParser());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "public")));

const placeRoute = require("./place_route/place");
const customerRoute = require("./auth_routes/customer_auth");
const uploadRoute = require("./upload/single_upload");
const paymentRoute = require("./PayRoute/payment");

// routes

app.use("/v1", customerRoute);
app.use("/place", placeRoute);
app.use("/upload", uploadRoute);
app.use("/payment", paymentRoute);

const PORT = process.env.PORT;

app.listen(PORT || 8080, () => {
  console.log(`Running on PORT ${PORT}`);
});
