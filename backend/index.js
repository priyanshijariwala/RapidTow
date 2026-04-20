require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ IMPORTANT: serve uploaded images
app.use("/uploads", express.static("uploads"));

// routes
app.use("/api/authentication", require("./routes/authentication"));
app.use("/api/cartow", require("./routes/registration"));
app.use("/api/feedbacks", require("./routes/getfeedback"));

app.get("/", (req, res) => {
  res.send("Hello guyses");
});

app.listen(port, () => {
  console.log(`backend listening on http://localhost:${port}`);
});