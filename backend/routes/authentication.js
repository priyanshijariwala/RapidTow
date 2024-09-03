const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "pr$$sh.in@hey$oy";
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

router.post("/createuser", async (req, res) => {
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
        password: securepass,
        contact_no: req.body.contact_no,
        fullname: req.body.fullname,
        DOB: req.body.DOB,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      // Send response to server
      res.json(authtoken);
    } else {
      res.status(400).json({ error: "Email is already used.." });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "Enter correct password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    let success = false
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false
        return res.status(400).json({ error: "User is not Exist" });
      }

      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        success = false
        return res.status(400).json({ error: "Password incorrect.." });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true
      // Send response to server
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.get("/getuser", fetchuser, async (req, res) => {
  try {
    console.log(req.user)
    userId = req.user.id;
    const user = await User.findById(userId);
    res.send(user);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send("Internal Server Error");
  }
});


//updating user details

router.put("/updateuser/:id", fetchuser, async (req, res) => {

  const {
    username, email, password, fullname, contact_no, DOB
  } = req.body;

  try {

    const updateuser = {}

    if (username) { updateuser.username = username; }
    if (email) { updateuser.email = email; }
    if (password) { updateuser.password = password; }
    if (contact_no) { updateuser.contact_no = contact_no; }
    if (fullname) { updateuser.fullname = fullname; }
    if (DOB) { updateuser.DOB = DOB; }

    let update_user = await User.findById(req.params.id);
    if (!update_user) {
      return res.status(404).send("Not Found");
    }

    update_user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updateuser },
      { new: true }
    )
    res.json({ update_user })
  } catch (error) {
    console.log(error);
  }
});

//delete user


router.delete("/deleteuser/:id", fetchuser, async (req, res) => {
  try {

    let delete_user = await User.findById(req.params.id);
    if (!delete_user) {
      return res.status(404).send("Not Found");
    }
    delete_user = await User.findByIdAndDelete(req.params.id);
    res.json({ "Success": "deleted" })
  } catch (error) {
    console.log(error);
  }
});

router.put("/changepass/:id", fetchuser, async (req, res) => {
  const { confirm_password, new_password } = req.body;

  // Validate input
  if (!confirm_password || !new_password) {
    return res.status(400).json({ error: "Please provide both old and new passwords." });
  }

  try {
    // Fetch the user from the database
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Compare the provided confirm_password with the user's current password
    const passwordCompare = await bcrypt.compare(confirm_password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "Old password is incorrect." });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(new_password, salt);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.json({ success: true, message: "Password changed successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
