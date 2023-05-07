// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
Routes,
  Route,

} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#304f6d';
      showAlert('Dark Mode has been enabled','success')
      setTimeout(()=>{
       setAlert(null)
      },1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has been enabled','secondary')
      setTimeout(()=>{
        setAlert(null)
       },1500)
    }
  }
// function ending here
const [alert, setAlert] = useState(null);


const showAlert = (message,type)=>{
setAlert({
  msg:message,
  type : type,
})
}


  return (
    <Router>
    
      <Navbar title="UtilsText1" about="About Us" toggleMode={toggleMode} mode={mode}/>
    <div className='container'>
    <Alert alert={alert}/>
<Routes>

<Route exact path='/' element={<TextForm showAlert = {showAlert} text = "Enter the text to analyze" mode={mode}/>}></Route>
<Route exact path='/about' element={<About mode={mode}/>}></Route>
</Routes>
 
    

    </div>   
    </Router>


  );  
}

export default App;

