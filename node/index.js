const express = require("express");
const { userModel } = require("./models/schema");
const cors = require("cors");
const fs = require("fs");
const axios = require("axios"); // Required to make API calls
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

// Load the JSON data
const jsonData = JSON.parse(fs.readFileSync("dataset.json", "utf8"));

// Helper function to create the search key
function createSearchKey(spiritanimal, age, occasion, weather, timestamp, bodyType) {
  return `I connect with ${spiritanimal} within the age Group ${age} for outing ${occasion} under ${weather} and ${timestamp} and ${bodyType}`;
}





// Form submission route
app.post("/form", async (req, res) => {
  const { email, spiritanimal, age, occasion, weather, timestamp, bodyType } = req.body;

  const validSpiritAnimals = ["Cat", "Lion", "Eagle", "Bear", "Butterfly"];
  const validBodyTypes = ["Slim", "Regular", "Curvy"];
  const validTimestamps = ["Day", "Night"];

  // Validate input
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
    // Find the user
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create the search key
    const searchKey = createSearchKey(spiritanimal, age, occasion, weather, timestamp, bodyType);
    console.log("Generated Search Key:", searchKey); // Debugging output
  
    // Find matching prompt from the JSON data
    const matchingEntry = jsonData.find((entry) => entry.Searchkey === searchKey);
    console.log(matchingEntry);

    if (matchingEntry) {
      const prompt = matchingEntry.PrompttoAPI;

      // Use the image generation logic directly here
      const response = await axios.get(`https://lexica.art/api/v1/search?q=${prompt}`);
      if (response.data.images && response.data.images.length > 0) {
        const imageUrl = response.data.images[0].src; // Get the first image URL

        // Save the form data along with the prompt and image URL
        user.forms.push({
          spiritanimal,
          age,
          occasion,
          weather,
          timestamp,
          bodyType
        });

        await user.save();

        return res.status(200).json({
          message: "Form submitted successfully",
          formdata: user.forms,
          prompt: prompt,
          imageUrl: imageUrl, // Returning the image URL to the frontend
        });
      } else {
        return res.status(404).json({ message: "No images found for the given prompt" });
      }
    } else {
      return res.status(404).json({ message: "No matching prompt found" });
    }
  } catch (error) {
    console.error("Error filling form details:", error);
    return res.status(500).json({ message: "Error filling form details" });
  }
});
