import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const url = `http://127.0.0.1:3001/hello/${encodeURIComponent(input)}`;
    try {
      const response = await axios.get(url);
      setResponse(response.data);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Failed to fetch data');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter your text here"
        />
        <button onClick={handleSubmit}>Submit</button>
        <p>{response}</p>
      </header>
    </div>
  );
}

export default App;
