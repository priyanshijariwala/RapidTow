const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post('/createuser', async (req, res) => {
  try {
    // Check if user already exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        const salt = await bcrypt.genSalt(10);
      const securepass = await bcrypt.hash(req.body.password, salt);


      // Create new user
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        contact_no: req.body.contact_no,
        password: securepass
      });
      
      // Send response to server
      res.json(user);
    } else {
      res.status(400).json({ error: "Email is already used.." });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;