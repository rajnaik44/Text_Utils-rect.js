import About from './About';
import Alert from './Alert';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {



  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message , type)=>{
    setalert({
      msg: message,
      type: type
    })

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled", "Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="Navbar" aboutText="About" mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
       
       <Routes>
       <Route exact path='/' element={<TextForm  heading="Enter Your Text Here To Analyze" mode={mode} />} />
        <Route exact path="/about"  element={<About />} />
          
      </Routes>
      </div>
    </BrowserRouter>
     
      
    </>
  );
}

export default App;


