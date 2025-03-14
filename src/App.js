// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';

function App() {

  const [mode, setMode] = useState({
    color: "#f9f9f9",
    backgroundColor: "#0c0c0c"
  });

  return (
    <div className="App h-full" style={mode}>
      <NavBar />
      <Intro />
    </div>
  );
}

export default App;
