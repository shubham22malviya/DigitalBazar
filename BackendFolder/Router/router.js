const express = require("express");
const router = express.Router();
const User = require("../Models/User"); // Correct relative path
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const jwtAuthMiddleware = require('../Middleware/middle')
//checking purpose

router.get('/protected-route', jwtAuthMiddleware, (req, res) => {
  res.status(200).json({ message: 'Access granted', user: req.user });
});
// User registration route
router.post(
  "/registration",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().withMessage("Email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("avtar").notEmpty().withMessage("Avatar is required"),
    body("isAdmin").notEmpty().withMessage("isAdmin is required"),
    body("Address.flat").notEmpty().withMessage("Flat is required"),
    body("Address.Street").notEmpty().withMessage("Street is required"),
    body("Address.landmark").notEmpty().withMessage("Landmark is required"),
    body("Address.city").notEmpty().withMessage("City is required"),
    body("Address.State").notEmpty().withMessage("State is required"),
    body("Address.country").notEmpty().withMessage("Country is required"),
    body("Address.pin")
      .isNumeric()
      .withMessage("Pin code must be numeric")
      .withMessage("Pin code is required"),
    body("Address.mobile")
      .isNumeric()
      .withMessage("Mobile number must be numeric")
      .withMessage("Mobile number is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, Address, avtar, isAdmin } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User already exists with this email." });
      }

      // Hashing the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        avtar,
        isAdmin: isAdmin || false,
        Address,
      });

      await newUser.save();
      res.status(201).json({ message: "User registered successfully", newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

//user login Api
router.post('/login', (req, res, next) => {
  User.find({ name: req.body.name })
    .exec()
    .then(User => {
      if (User.length < 1) {
        return res.status(401).json({
          msg: 'user not exist'
        })
      }
      bcrypt.compare(req.body.password, User[0].password, (err, result) => {
        if (!result) {
          return res.status(401).json(
            {
              msg: 'password matching fail'
            })
        }
        if (result) {
          const token = jwt.sign(
            {
              name: User[0].name,
              password: User[0].password,
            },
            process.env.JWT_SECRET, // Use environment variable for the secret key
            { expiresIn: "1h" }
          );
          res.status(200).json({
            name: User[0].name,
            email: User[0].email,
            mobile: User[0].Address.mobile,
            pin: User[0].Address.pin,
            token: token
          })
        }
      })
    })
    .catch(err => {
      res.status(500).json({
        err: err
      })
    })
})

module.exports = router;