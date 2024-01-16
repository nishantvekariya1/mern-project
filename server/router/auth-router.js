const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");

router.route("/").get(authController.home);

router.route("/register").get(authController.register);

router.route("/login").get(authController.login);

module.exports = router;
