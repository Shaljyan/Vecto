import React from 'react';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import ImgSlider from './components/ImgSlider';


function App() {
  return (
    <div className="App">
      
        <Home />
        <Sidebar />
        <ImgSlider />

    </div>
  );
}

export default App;
