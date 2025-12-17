import React, { useState } from 'react';
import PixelBlast from './components/PixelBlast';
import MessageBox from './components/MessageBox';
import personalMessages from './data/personalMessage';

function App() {
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);

  const handleAddMessage = () => {
    const trimmedName = name.trim();
    if (trimmedName === '') return;
    const formattedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();
    const message = personalMessages[formattedName] || 'No message found for this name.';
    setMessages(prev => [...prev, `Hello, ${formattedName}! ${message}`]);
    setName('');
  };

  return (
    <div className="app">
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />
      <div className="container">
        <h1 className="title">Message Just for You</h1>
        <input
          className="input"
          type="text"
          placeholder="Enter your last name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="button" onClick={handleAddMessage}>Show Message</button>
        {messages.map((msg, i) => <MessageBox key={i} text={msg} />)}
      </div>
    </div>
  );
}

export default App;
