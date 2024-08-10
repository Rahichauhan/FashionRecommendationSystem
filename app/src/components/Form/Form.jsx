import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import girl from '../../assets/image_prev_ui (5).png'


const Form = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [spiritanimal, setSpiritAnimal] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [bodyType, setBodyType] = useState(""); 
    const [weather, setWeather] = useState(""); 
    const [occasion, setOccasion] = useState("");
    const [timestamp, setTimestamp] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/form", {
                email,
                spiritanimal,
                age,
                height,
                bodyType,
                weather,
                occasion,
                timestamp
            });
            console.log("response:", response.data);
            navigate("/home");
        } catch (error) {
            console.error("Error submitting form:", error.response ? error.response.data : error.message);
            alert("There was an error submitting the form.");
        }
    }

    return (
        <div className="wrapper">
            <div className='Main-container'>
                <div>
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div className='name'> Fill your details </div>
                        
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
                                name="spiritAnimal" 
                                value={spiritanimal} 
                                onChange={(e) => setSpiritAnimal(e.target.value)} 
                                required
                            >
                                <option value="">Select an animal</option>
                                <option value="cat">Cat</option>
                                <option value="lion">Lion</option>
                                <option value="eagle">Eagle</option>
                                <option value="bear">Bear</option>
                                <option value="butterfly">Butterfly</option>
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
                                <option value="ectomorph">15-22</option>
                                <option value="mesomorph">23-30</option>
                                <option value="endomorph">31-40</option>
                                </select>
                        </label>
                        <label>
                            Height:
                            <input 
                                type="text" 
                                name="height" 
                                value={height} 
                                onChange={(e) => setHeight(e.target.value)} 
                                required 
                            />
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
                                <option value="ectomorph">Slim</option>
                                <option value="mesomorph">Average</option>
                                <option value="endomorph">Curvy</option>
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
                                <option value="ectomorph">Summer</option>
                                <option value="mesomorph">Winter</option>
                                <option value="endomorph">Rainy</option>
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
                                <option value="day">Day</option>
                                <option value="night">Night</option>
                            </select>     
                        </label>
                        <button type="submit">Continue</button>
                    </form>
                </div>
                <div>
                    <img className='girl-img' src={girl} alt='girl'/>
                </div>
            </div>
        </div>
    );
}

export default Form;
