import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/bearnot.jpg';
import img2 from '../../assets/butterfly.jpg';
import img3 from '../../assets/cat.jpg';
import img4 from '../../assets/eagle.jpg';
import img5 from '../../assets/lion.jpg';
import img6 from '../../assets/owl.jpg';
import img7 from '../../assets/snake.jpg';
import './SpiritAnimal.css';

const cardData = [
  { title: "Cat", img: img3 },
  { title: "Owl", img: img6 },
  { title: "Lion", img: img5 },
  { title: "Bear", img: img1 },
  { title: "Eagle", img: img4 },
  { title: "Snake", img: img7 },
  { title: "Butterfly", img: img2 }
];

function SpiritAnimal() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-8">Get to know about your spirit animal</h1>
      <div className="flex space-x-2"> {/* Reduce the space between cards */}
        {cardData.map((card, index) => (
          <ExpandableCard 
            key={index} 
            title={card.title} 
            img={card.img} 
            isOpen={selectedCard === index} 
            onClick={() => setSelectedCard(selectedCard === index ? null : index)} 
          />
        ))}
      </div>
    </div>
  );
}

const ExpandableCard = ({ title, img, isOpen, onClick }) => {
  return (
    <motion.div
      className="m-1 cursor-pointer"  // Reduce margin between cards
      onClick={onClick}
      layout
      initial={{ borderRadius: 10 }}
      transition={{ layout: { duration: 0.5, type: 'spring' } }}
    >
      <motion.div
        className="bg-gray-300 rounded-lg shadow-lg overflow-hidden"
        style={{ 
          width: isOpen ? '350px' : '140px',  // Replace w-80 and w-35 with custom widths
          height: isOpen ? '300px' : '300px', // Replace h-800 and h-70 with custom heights
          backgroundColor: '#C4BBAA'
        }}
        layout
      >
        {isOpen ? (
          <motion.img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
            style={{ borderRadius: '20px' }}  // Add border-radius to the image

            layout
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <h2 className="text-lg font-bold transform rotate-90 text-3xl font-bold">{title}</h2>  
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default SpiritAnimal;
