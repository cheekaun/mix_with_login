import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    
     <React.Fragment>
      <BrowserRouter>
        <LoginPage/>
      </BrowserRouter>
     </React.Fragment>
    
  );
}

export default App;