const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(
  cors({
    origin: ["https://jcds3.vercel.app","http://localhost:3000","https://jcds-registration.vercel.app","https://jaipurcateringdealerssamiti.com","https://www.jaipurcateringdealerssamiti.com"], 
    credentials: true,
  })
);

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Setup backend...");
});

// Routes
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/admin", require("./routes/adminRoute"));

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
