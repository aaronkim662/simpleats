import React from 'react';
import Recipescard from "./Components/Recipescard";
import Navbar from "./Components/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recipescard />
    </div>
  );
}

export default App;
