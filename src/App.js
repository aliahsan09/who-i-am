// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Skills from './components/Skills';

function App() {

  const [mode, setMode] = useState({
    color: "#f9f9f9",
    backgroundColor: "#0c0c0c"
  });

  const changeMode = () => {
    if(mode.color == "#f9f9f9") {
      setMode({
        color: "#0c0c0c",
        backgroundColor: "#f9f9f9"
      })
      document.body.style.backgroundColor = "#f9f9f9";
    }
    else {
      setMode({
        color: "#f9f9f9",
        backgroundColor: "#0c0c0c"
      })
      document.body.style.backgroundColor = "#0c0c0c";
    }
  }

  return (
    <div className="App h-full scroll-smooth" style={mode}>
      <NavBar themeMode={changeMode} className='absolute top-5 right-0'/>
      <Intro />
      <Skills />
    </div>
  );
}

export default App;
