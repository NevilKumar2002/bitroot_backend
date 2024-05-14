const express = require("express");
const mongoose = require("mongoose");
const contactRouter = require("./routes/contactRoute");

const app = express();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://Kumar:1234567890@cluster0.y0tweds.mongodb.net/FirstDB1")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", contactRouter);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
