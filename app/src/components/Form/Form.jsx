import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import girl from "../../assets/image_prev_ui (5).png";

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [spiritanimal, setSpiritAnimal] = useState("");
  const [age, setAge] = useState("");
  // const [height, setHeight] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [weather, setWeather] = useState("");
  const [occasion, setOccasion] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.BACKEND_URL}/form`,
        {
          email,
          spiritanimal,
          age,
          occasion,
          weather,
          timestamp,
          bodyType,
        },
      );
      const { imageUrl } = response.data;
      console.log(imageUrl)
      console.log("response:", response.data);
      navigate("/outfit", { state: { imageUrl } });
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
      alert("There was an error submitting the form.");
    }
  };
  return (
    <div className="wrapper">
      <div className="Main-container">
        <div>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="name"> Fill your details </div>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Spirit Animal:
              <select
                name="spiritanimal"
                value={spiritanimal}
                onChange={(e) => setSpiritAnimal(e.target.value)}
                required
              >
                <option value="">Select an animal</option>
                <option value="Cat">Cat</option>
                <option value="Lion">Lion</option>
                <option value="Eagle">Eagle</option>
                <option value="Bear">Bear</option>
                <option value="Butterfly">Butterfly</option>
              </select>
            </label>
            <label>
              Age:
              <select
                type="number"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              >
                <option value="">Select age</option>
                <option value="1">group 1 (15-22)</option>
                <option value="2">group 2 (23-30)</option>
                <option value="3">group 3 (31-40)</option>
              </select>
            </label>
            <label>
              Body Type:
              <select
                name="bodyType"
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
                required
              >
                <option value="">Select body type</option>
                <option value="Slim">Slim</option>
                <option value="Regular">Regular</option>
                <option value="Curvy">Curvy</option>
              </select>
            </label>
            <label>
              Weather:
              <select
                name="weather"
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
                required
              >
                <option value="">Select weather</option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value="Rainy">Rainy</option>
              </select>
            </label>
            <label>
              Occasion:
              <input
                type="text"
                name="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              />
            </label>
            <label>
              Timestamp:
              <select
                name="timestamp"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
                required
              >
                <option value="">Select time</option>
                <option value="Day">Day</option>
                <option value="Night">Night</option>
              </select>
            </label>
            <button type="submit">Continue</button>
          </form>
        </div>
        <div>
          <img className="girl-img" src={girl} alt="girl" />
        </div>
      </div>
    </div>
  );
};

export default Form;
