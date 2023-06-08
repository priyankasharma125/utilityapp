
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const[Mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";

    }

  }
  return (
    <div className="App">
     <>
     <Navbar title="TextUtility" mode={Mode} toggleMode={toggleMode}/>
    <Home mode={Mode}/>
     </>
    </div>
  );
}

export default App;
