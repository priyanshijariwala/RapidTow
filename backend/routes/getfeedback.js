const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Feedback = require("../models/feedback");
// const { body, validationResult } = require("express-validator");

router.post(
    "/feedback",
    fetchuser,
    [
      body("feedback", "Enter feedback"),
    ],
    async (req, res) => {
      try {
        const { feedback } = req.body;
  
  
        const new_feedback = new Feedback({
          user: req.user.id,
          feedback
        }
        );
  
        const savefeedback = await new_feedback.save();
        res.json(savefeedback);
      } catch (error) {
        console.log(error);
      }
    }
  );