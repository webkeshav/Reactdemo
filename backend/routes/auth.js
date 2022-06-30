const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');

// Create a user using : POST "/api/auth/"  Doesn't requite AUTH
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async(req, res) => {
    // If there are errors then send bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

// Check weather the user with this email already exists
try{
let user = await User.findOne({email : req.body.email});
if(user){
   return  res.status(400).json({error:"A user with this email already exist"});
}
const salt = await bcrypt.genSalt(10);
const secPass = await bcrypt.hash(req.body.password,salt);
// create a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
      
     res.json(user);
  }catch(err){
    console.error(err.message);
    res.status(500).send("some erroe occured");
  }
}
);

module.exports = router;
