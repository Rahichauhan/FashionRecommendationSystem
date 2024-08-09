import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const history=useNavigate();
    const [email, setEmail] = useState("");
    const [spiritanimal, setSpiritAnimal] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [bodyType, setBodyType] = useState(""); 
    const [weather, setWeather] = useState("");
    const [occassion, setOccassion] = useState("");
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
                occassion,
                timestamp
            });
            console.log("response:",response.data);
                history("/home");
            
        } catch (error) {
            console.error("Error submitting form:", error.response ? error.response.data : error.message);
            alert("There was an error submitting the form.");
        }
    }
    return (
        <div>
            <h1 className='font-semibold color-blue'>Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='Spirit Animal' onChange={(e) => setSpiritAnimal(e.target.value)} />
                <input type="text" placeholder='Age' onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder='Height' onChange={(e) => setHeight(e.target.value)} />
                <input type="text" placeholder='Body Type' onChange={(e) => setBodyType(e.target.value)} /> 
                <input type="text" placeholder='Weather' onChange={(e) => setWeather(e.target.value)} />
                <input type="text" placeholder='Occasion' onChange={(e) => setOccassion(e.target.value)} /> 
                <input type="text" placeholder='Timestamp' onChange={(e) => setTimestamp(e.target.value)} /> 
                <button type='submit'>Continue</button>
            </form>
        </div>
    )
}

export default Form;
