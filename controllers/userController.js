const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Controller function for user registration
exports.register = async (req, res) => {
  try {
    //Check if email exists in database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists");

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create new user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    //Save user to the database
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Controller function for user login
exports.login = async (req, res) => {
  try {
    //Check if the email exists in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email not found");

    //Validate the user's password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid password");

    //Create and assign a JWT token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  } catch (err) {
    res.status(400).send(err);
  }
};