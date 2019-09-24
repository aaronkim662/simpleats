import React from 'react';
import Recipescard from "./Components/Recipescard";
import Navbar from "./Components/Navbar";
import './App.css';
import Footer from './Components/footer';
import Main from './Components/main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
