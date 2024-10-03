require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

var cors = require("cors");
app.use(cors());

app.use(express.json());
app.use("/api/authentication", require("./routes/authentication"));
app.use("/api/cartow", require("./routes/registration"));
app.use("/api/feedbacks", require("./routes/getfeedback"));

app.get("/", (req, res) => {
  res.send("Hello guyses");
});

app.listen(port, () => {
  console.log(` backend listening on port http://localhost:${port}`);
});
