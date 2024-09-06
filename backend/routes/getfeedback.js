const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Feedback = require("../models/feedback");
const { body, validationResult } = require("express-validator");


router.post(
  "/feedback",
  fetchuser,
  [
    body("feedback", "Feedback cannot be empty").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { feedback } = req.body;
      const new_feedback = new Feedback({
        user: req.user.id,
        feedback,
      });

      const savefeedback = await new_feedback.save();
      res.json(savefeedback);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
