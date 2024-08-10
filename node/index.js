const express = require("express");
const { userModel } = require("./models/schema");
const cors = require("cors");
require("./db/conn");
const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000, () => {
  console.log("Server Started");
});

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await userModel.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    res.json("notexist");
  }
});
app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.json({ message: "User already exists" });
    } else {
      const newUser = await userModel.create({
        firstname,
        lastname,
        email,
        password,
      });
      return res.json({ message: "User created successfully", user: newUser });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
app.get("/getdata", async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Error getting user");
  }
});

app.post("/form", async (req, res) => {
  const {
    email,
    spiritanimal,
    age,
    height,
    bodyType,
    weather,
    occasion,
    timestamp,
  } = req.body;

  const validSpiritAnimals = ["Cat", "Lion", "Eagle", "Bear", "Butterfly"];
  const validBodyTypes = ["Slim", "Average", "Curvy"];
  const validTimestamps = ["Day", "Night"];

  if (!validSpiritAnimals.includes(spiritanimal)) {
    return res.status(400).json({ message: "Invalid spiritanimal value" });
  }

  if (!validBodyTypes.includes(bodyType)) {
    return res.status(400).json({ message: "Invalid bodyType value" });
  }

  if (!validTimestamps.includes(timestamp)) {
    return res.status(400).json({ message: "Invalid timestamp value" });
  }

  try {
   
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.forms.push({
      spiritanimal,
      age,
      height,
      bodyType,
      weather,
      occasion,
      timestamp,
    });

    await user.save();

    return res
      .status(200)
      .json({ message: "Form submitted successfully", formdata: user.forms });
  } catch (error) {
    console.error("Error filling form details:", error);
    return res.status(500).json({ message: "Error filling form details" });
  }
});
