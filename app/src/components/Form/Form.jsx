import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import girl from '../../assets/image_prev_ui (5).png'


const Form = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [spiritAnimal, setSpiritAnimal] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [bodyType, setBodyType] = useState(""); 
    const [occasion, setOccasion] = useState("");
    const [timestamp, setTimestamp] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/form", {
                email,
                spiritAnimal,
                age,
                height,
                bodyType,
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
                                value={spiritAnimal} 
                                onChange={(e) => setSpiritAnimal(e.target.value)} 
                                required
                            >
                                <option value="">Select an animal</option>
                                <option value="lion">Lion</option>
                                <option value="eagle">Eagle</option>
                                <option value="dolphin">Dolphin</option>
                                <option value="wolf">Wolf</option>
                            </select>
                        </label>
                        <label>
                            Age:
                            <input 
                                type="number" 
                                name="age" 
                                value={age} 
                                onChange={(e) => setAge(e.target.value)} 
                                required 
                            />
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
