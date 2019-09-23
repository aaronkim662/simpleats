import React from 'react';
import Recipescard from "./Components/Recipescard";
import Navbar from "./Components/Navbar";
import './App.css';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Recipescard />
      <Footer />
    </div>
  );
}

export default App;
