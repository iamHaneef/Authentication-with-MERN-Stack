import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />  {/* Default route */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
