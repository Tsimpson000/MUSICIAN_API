const router = require("express").Router();
const userController = require("../controllers/userController");

//Define the routes for user registration and login
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;