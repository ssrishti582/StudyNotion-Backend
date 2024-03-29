const Razorpay = require("razorpay");
require("dotenv").config();
exports.instance = new Razorpay({
    key_id: process.env.REACT_APP_RAZORPAY_KEY,
    key_secret: process.env.REACT_APP_RAZORPAY_SECRET,
});