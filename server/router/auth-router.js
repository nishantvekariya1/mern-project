const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");
const validate = require("../middleware/validate-middleware");
const { signUpSchema, signInSchema } = require("../validator/auth-validator");

router.route("/").get(authController.home);

router.route("/register").post(validate(signUpSchema), authController.register);

router.route("/login").post(validate(signInSchema), authController.login);

module.exports = router;
