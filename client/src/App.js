import React from 'react';
import Navbar from "./Components/navbar";
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
